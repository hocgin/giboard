import {asGetProjectItem, getProjectItem} from "../github/getProjectItem";
import {AsGetProjectItemType} from "../../types";

export interface GetBoardBody {
  login: string;
  number: number;
}

export function buildBoardApiUrl(api: string, params: GetBoardBody) {
  const base = typeof window !== 'undefined' ? window.location.origin : 'http://localhost';
  const url = new URL(api, base);
  url.searchParams.set('login', params.login);
  url.searchParams.set('number', `${params.number}`);
  url.searchParams.set('projectId', `${params.number}`);
  return url.toString();
}

export async function getBoard(params: GetBoardBody, token: string, api?: string): Promise<AsGetProjectItemType> {
  if (api) {
    // 自定义接口直接返回标准看板结构，组件侧无需再做 GraphQL 转换。
    const url = buildBoardApiUrl(api, params);
    return fetch(url).then(r => r.json());
  }
  return asGetProjectItem((await getProjectItem(params, token)) as any);
}
