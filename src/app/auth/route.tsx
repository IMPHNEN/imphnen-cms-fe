import { ROUTE_URL } from "@/entities/constants/route";

export const authRoute = [
  {
    path: ROUTE_URL.AUTH.LOGIN,
    lazy: () => import("./login/page"),
  },
];
