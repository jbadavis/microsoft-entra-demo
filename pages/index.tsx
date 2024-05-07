import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <Box w="75%" maxW="420px" m="0 auto">
      <Heading my={8}>Microsoft Entra Demo 🔐</Heading>
      {session ? (
        <>
          <Text mb={6} fontSize="lg">
            Signed in as {session.user?.name}
          </Text>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <>
          <Text mb={6} fontSize="lg">
            Please sign in using the button below:
          </Text>
          <Button onClick={() => signIn()}>Sign In</Button>
        </>
      )}
    </Box>
  );
}
