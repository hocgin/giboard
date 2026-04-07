export type ViewItemType = {
  id: string;
  Title: string;
  Status: 'In Progress' | 'Done' | 'Todo';
  Description?: string;
  repository?: {
    id?: string;
    name?: string;
    url?: string;
  };
  Assignees?: {
    avatarUrl?: string;
    login?: string;
  }[];
  Complete?: number;
  Priority?: number;
};
export type ViewType = {
  id: string;
  name: string;
  items: ViewItemType[]
};
export interface AsGetProjectItemType {
  url: string;
  title: string;
  shortDescription?: string;
  readme?: string;
  views: ViewType[];
}
