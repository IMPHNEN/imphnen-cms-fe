export const ROUTE_URL = {
  ROOT: "/",
  DASHBOARD: "/dashboard",
  AUTH: {
    ROOT: "/auth",
    LOGIN: "/login",
  },
  USERS: {
    ROOT: "/users",
    LIST: "/users/list",
    CREATE: "/users/create",
    UPDATE: "/users/:id/update",
    DETAIL: "/users/:id/detail",
  },
  CONTENTS: {
    ROOT: "/contents",
    ARTICLES: {
      ROOT: "/contents/articles",
      LIST: "/contents/articles/list",
      CREATE: "/contents/articles/create",
      UPDATE: "/contents/articles/:id/update",
      DETAIL: "/contents/articles/:id/detail",
    },
    MEMES: {
      ROOT: "/contents/memes",
      LIST: "/contents/memes/list",
      CREATE: "/contents/memes/create",
      UPDATE: "/contents/memes/:id/update",
      DETAIL: "/contents/memes/:id/detail",
    },
  },
};
