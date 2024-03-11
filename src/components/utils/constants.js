const REGEXP_EMAIL =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const baseUrl = "https://hackathon-yacrm04.sytes.net/api/v1";
const REGEX_URL = /^(f|ht)tps?:\/\//i;

export { REGEXP_EMAIL, REGEX_URL, baseUrl };
