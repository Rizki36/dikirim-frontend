export interface AuthInterface {
  role: "admin" | "reseller" | "supplier" | "branch";
  authenticated?: string;
  children: any;
  ScreenLoader: React.ReactNode;
}
