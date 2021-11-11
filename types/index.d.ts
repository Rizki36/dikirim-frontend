import { UserRole } from "constans/Auth";

export interface AuthInterface {
  role?: UserRole;
  authenticatedRedirect?: string;
  children?: any;
  ScreenLoader?: React.ReactNode;
}
