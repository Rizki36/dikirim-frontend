import { useSession, signIn, signOut } from "next-auth/react";

const Order = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <div>Order</div>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Order;
