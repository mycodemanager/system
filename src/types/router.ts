export interface MenuRouterType {
    path: string;
    label: string;
    icon?: JSX.Element;
    key: string;
    element?: JSX.Element;
    children?: Array<MenuRouterType>;
    exact?: boolean;
    hidden?: boolean;
    meta?: any;
    redirect?: string;
    isLoading?: boolean
}