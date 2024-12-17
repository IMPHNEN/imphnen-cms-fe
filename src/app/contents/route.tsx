import { ROUTE_URL } from "@/entities/constants/route";
import { contentArticleRoute } from "./articles/route";
import { contentMemeRoute } from "./memes/route";

export const contentRoute = [
  {
    path: ROUTE_URL.CONTENTS.MEMES.ROOT,
    children: contentMemeRoute,
  },
  {
    path: ROUTE_URL.CONTENTS.ARTICLES.ROOT,
    children: contentArticleRoute,
  },
];
