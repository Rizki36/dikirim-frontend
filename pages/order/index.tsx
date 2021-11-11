import UserLayout from "@/components/layouts/ResellerLayout";
import { UserRole } from "constans/Auth";
import { signOut } from "next-auth/react";
import { AuthInterface } from "types";

const Order = () => {
  return (
    <UserLayout>
      <div>Order</div>
    </UserLayout>
  );
};

Order.auth = {
  role: UserRole.reseller,
} as AuthInterface;

export default Order;
