import {GITHUB_GRAPHQL_API_URL, stringify} from "../config";
import {AsGetProjectItemType} from "@hocgin/giboard/types";

export async function getProjectItem(params: GetProjectItemBody, token: string): Promise<GetProjectItemResponse> {
  return fetch(GITHUB_GRAPHQL_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: stringify(GET_PROJECT_ITEM_QUERY, params)
    }),
  }).then(r => r.json()).catch(console.warn);
}

export interface GetProjectItemBody {
  login: string;
  number: number;
}

export interface GetProjectItemResponse {
  data: any;
}

// https://docs.github.com/zh/graphql/reference/objects#projectv2
const GET_PROJECT_ITEM_QUERY = `query{
  user(login: "$login"){
       # ProjectV2
      projectV2(number: $number) {
          url
          title
          shortDescription
          readme
          createdAt
          updatedAt
          #
          views(first: 1) {
              # https://docs.github.com/en/graphql/reference/objects#projectv2view
              nodes {
                id
                name
                number
                createdAt
                updatedAt

                # https://docs.github.com/en/graphql/reference/objects#projectv2
                project {
                  id
                  title
                  items(first: 100) {
                    # https://docs.github.com/en/graphql/reference/objects#projectv2item
                    nodes {
                      id
                      fieldValues(first: 20) {
                        # https://docs.github.com/en/graphql/reference/unions#projectv2itemfieldvalue
                        nodes {
                        ... on ProjectV2ItemFieldTextValue {
                            text
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                       ... on ProjectV2ItemFieldRepositoryValue {
                          repository {
                            id
                            name
                            url
                          }
                        }
                       ... on ProjectV2ItemFieldLabelValue {
                            labels(first: 20) {
                                nodes {
                                    id
                                    name
                                }
                            }
                            field {
                              ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                        }
                        ... on ProjectV2ItemFieldDateValue {
                            date
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                        ... on ProjectV2ItemFieldSingleSelectValue {
                            name
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                        ... on ProjectV2ItemFieldIterationValue {
                            title
                            startDate
                            duration
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                        ... on ProjectV2ItemFieldNumberValue {
                            number
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }
                        ... on ProjectV2ItemFieldUserValue {
                            users(first: 5){
                              nodes {
                                login
                                avatarUrl
                              }
                            }
                            field {
                            ... on ProjectV2FieldCommon {
                                name
                              }
                            }
                          }

                        }
                      }
                    }
                  }
                }
              }
          }
      }
  }
}`;

export function asGetProjectItem(resp: GetProjectItemResponse): AsGetProjectItemType {
  let project = resp?.data?.user?.projectV2 ?? {};
  let views = project?.views?.nodes ?? [];
  console.log('field.resp', resp);
  return {
    url: project?.url,
    title: project?.title,
    shortDescription: project?.shortDescription,
    readme: project?.readme,
    views: views.map((e) => ({
      id: e?.id,
      name: e?.name,
      items: (e?.project?.items?.nodes ?? []).map((e) => {
        let result: any = {
          id: e?.id,
        };
        let nodes = e?.fieldValues?.nodes ?? [];
        for (let node of nodes) {
          let field = node?.field;
          let _name = field?.name;
          let name = `${_name}`.trim().toLowerCase();
          if (name === `title`) {
            result[_name] = node?.text;
          } else if (name === `status`) {
            result[_name] = node?.name;
          } else if (name === `description`) {
            result[_name] = node?.text;
          } else if (name === `complete`) {
            result[_name] = node?.number;
          } else if (name === `priority`) {
            result[_name] = node?.number;
          } else if (name === `assignees`) {
            result[_name] = (node?.users?.nodes ?? []).map((e) => ({
              ...e
            }));
          } else if ('repository' in node) {
            result['repository'] = node?.repository;
          }
        }
        return result;
      }),
    })),
  };
}

