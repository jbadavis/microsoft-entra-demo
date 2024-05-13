import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { getServerSession } from "next-auth/next";
import type { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]";
import { env } from "@/env";

export default function StaffOnly() {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  return (
    <Box w="75%" maxW="420px" m="0 auto">
      <Heading my={8}>Staff Portal</Heading>
      {status !== "loading" &&
      session?.user.roles.includes(env.NEXT_PUBLIC_STAFF_GROUP_ID) ? (
        <Text mb={6} fontSize="lg">
          Welcome to the staff portal 👋
        </Text>
      ) : (
        <Text mb={6} fontSize="lg">
          Access Denied ❌
        </Text>
      )}
    </Box>
  );
}
