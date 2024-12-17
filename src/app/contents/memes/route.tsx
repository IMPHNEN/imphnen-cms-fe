import { ROUTE_URL } from "@/entities/constants/route";

export const contentMemeRoute = [
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
