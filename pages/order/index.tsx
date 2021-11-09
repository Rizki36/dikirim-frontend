import UserLayout from "@/components/layouts/UserLayout";
import { signOut } from "next-auth/react";

const Order = () => {
  return (
    <>
      <UserLayout>
        <div>Order</div>
        <button onClick={() => signOut()}>Sign out</button>
      </UserLayout>
    </>
  );
};

Order.auth = true;

export default Order;
