import { ROUTE_URL } from "@/entities/constants/route";

export const dashboardRoute = [
  {
    path: ROUTE_URL.DASHBOARD,
    lazy: () => import("./page"),
  },
];
