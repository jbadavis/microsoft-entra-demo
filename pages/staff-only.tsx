import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import type { GetServerSideProps } from "next";
import { useRouter } from 'next/navigation';
import { env } from '@/env';

export default function StaffOnly() {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  if (status !== "loading" && session?.user.groups.includes(env.NEXT_PUBLIC_STAFF_GROUP_ID)) {
    push('/');
  }

  return (
    <Box w="75%" maxW="420px" m="0 auto">
      <Heading my={8}>Staff Only 🚨</Heading>
    </Box>
  );
}
