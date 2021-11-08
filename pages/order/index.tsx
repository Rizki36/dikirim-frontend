import { useSession, signIn, signOut } from "next-auth/react";
import UserLayout from "@/components/layouts/UserLayout";

const Order = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (session) {
    return (
      <>
        <UserLayout>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </UserLayout>
      </>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen w-screen flex-col">
      <div>Private Route</div>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default Order;
