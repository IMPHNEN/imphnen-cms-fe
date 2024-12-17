import { ROUTE_URL } from "@/entities/constants/route";

export const usersRoute = [
  {
    path: ROUTE_URL.USERS.LIST,
    lazy: () => import("./list/page"),
  },
  {
    path: ROUTE_URL.USERS.CREATE,
    lazy: () => import("./create/page"),
  },
  {
    path: ROUTE_URL.USERS.UPDATE,
    lazy: () => import("./update/page"),
  },
  {
    path: ROUTE_URL.USERS.DETAIL,
    lazy: () => import("./detail/page"),
  },
];
