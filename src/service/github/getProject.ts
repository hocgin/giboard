import {GITHUB_GRAPHQL_API_URL, stringify} from "../config";

export async function getProject(params: GetProjectBody, token: string): Promise<GetProjectResponse> {
  return fetch(GITHUB_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: stringify(GET_PROJECT_QUERY, params)
    }),
  }).then(r => r.json()).catch(console.warn);
}

export interface GetProjectBody {
  login: string;
  number: number;
  type: 'organization' | 'user';
}

export interface GetProjectResponse {
  data: {};
}

const GET_PROJECT_QUERY = `
query{
    user(login: "$login"){
      projectV2(number: $number) {
        id,
        title
      }
    }
}`;
