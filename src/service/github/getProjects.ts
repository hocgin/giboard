import {GITHUB_GRAPHQL_API_URL, stringify} from "../config";

export async function getProjects(params: getProjectsBody, token: string): Promise<getProjectsResponse> {
  return fetch(GITHUB_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: stringify(GET_PROJECTS_QUERY, params)
    }),
  }).then(r => r.json());
}

export interface getProjectsBody {
  login: string;
  first: number;
}

export interface getProjectsResponse {
  data: {};
}

const GET_PROJECTS_QUERY = `
query{
    user(login: "$login") {
      projectsV2(first: $first) {
        nodes {
          id
          title
        }
      }
    }
}`;
