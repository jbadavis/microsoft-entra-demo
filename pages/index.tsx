import { useSession, signIn, signOut } from "next-auth/react";
import { useTheme, Box, Button, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session, status } = useSession();
  const { push } = useRouter();
  const theme = useTheme();

  if (status === "unauthenticated") {
    signIn();
  }

  return (
    <Box w="75%" maxW="420px" m="0 auto">
      <Heading my={8}>Microsoft Entra Demo 🔐</Heading>
      <Text mb={6} fontSize="lg">
        Signed in as {session?.user?.name}
      </Text>
      <Button
        mr="4"
        as="a"
        bg={theme.colors.gray[300]}
        onClick={async () => push("/staff-only")}
        cursor="pointer"
      >
        Staff Area
      </Button>
      <Button bg={theme.colors.red[200]} onClick={async () => signOut()}>
        Sign out
      </Button>
    </Box>
  );
}
