"use-client";
import { client } from "@repo/db/client";

export default async function Home() {
  const users = await client.user.findFirst();
  return (
    <main>
      {users?.username}
      {users?.password}
    </main>
  );
}
