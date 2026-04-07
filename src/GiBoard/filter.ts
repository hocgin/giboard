import {AsGetProjectItemType} from "../types";

export function filterBoardByRepository(data: AsGetProjectItemType | undefined, repository?: string) {
  if (!repository) {
    return data;
  }
  return {
    ...data,
    views: (data?.views ?? []).map((view) => ({
      ...view,
      items: (view?.items ?? []).filter((item) => item?.repository?.name === repository),
    })),
  } as AsGetProjectItemType;
}

