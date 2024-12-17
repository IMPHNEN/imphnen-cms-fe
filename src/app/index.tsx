import { ROUTE_URL } from "@/entities/constants/route";
import { createBrowserRouter } from "react-router-dom";
import { usersRoute } from "./users/route";
import { dashboardRoute } from "./dashboard/route";
import { authRoute } from "./auth/route";
import { contentRoute } from "./contents/route";

export const router = createBrowserRouter([
  {
    path: ROUTE_URL.ROOT,
    children: [
      {
        path: ROUTE_URL.AUTH.ROOT,
        children: authRoute,
      },
      {
        path: ROUTE_URL.DASHBOARD,
        children: dashboardRoute,
      },
      {
        path: ROUTE_URL.USERS.ROOT,
        children: usersRoute,
      },
      {
        path: ROUTE_URL.CONTENTS.ROOT,
        children: contentRoute,
      },
    ],
  },
]);
