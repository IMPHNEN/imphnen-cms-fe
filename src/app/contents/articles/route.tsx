import { ROUTE_URL } from "@/entities/constants/route";

export const contentArticleRoute = [
  {
    path: ROUTE_URL.CONTENTS.MEMES.LIST,
    lazy: () => import("./list/page"),
  },
  {
    path: ROUTE_URL.CONTENTS.MEMES.CREATE,
    lazy: () => import("./create/page"),
  },
  {
    path: ROUTE_URL.CONTENTS.MEMES.UPDATE,
    lazy: () => import("./update/page"),
  },
  {
    path: ROUTE_URL.CONTENTS.MEMES.DETAIL,
    lazy: () => import("./detail/page"),
  },
];
