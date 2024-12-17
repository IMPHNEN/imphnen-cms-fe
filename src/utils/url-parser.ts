import { REGEX } from "@/entities/constants/regex";

export const urlParser = (
  path: string,
  params: Record<string, string | number>,
): string => {
  return path.replace(REGEX.URL_PARSER, (_, key) => {
    if (params[key] !== undefined) {
      return encodeURIComponent(params[key].toString());
    }
    throw new Error(`Missing parameter: ${key}`);
  });
};
