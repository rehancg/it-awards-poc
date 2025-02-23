export interface BreadcrumbItem {
  label: string;
  path: string;
}

export interface RouterState {
  url: string;
  breadcrumbs: BreadcrumbItem[];
}

export const initialRouterState: RouterState = {
  url: '',
  breadcrumbs: []
};
