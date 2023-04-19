const GITHUB_API_HOST = 'https://api.github.com';

// https://docs.github.com/zh/graphql/reference/objects
export const GITHUB_GRAPHQL_API_URL = `${GITHUB_API_HOST}/graphql`;

export const stringify = (str: string, variables: Record<string, any> = {}) => {
  Object.entries(variables).forEach(([k, v]) => {
    str = str.replace(`$${k}`, v);
  });
  return str;
};
