export interface MenuItem {
  id: string;
  label: string;
  icon?: string; 
  path?: string;
  children?: MenuItem[];
  badge?: number;
  isActive?: boolean;
}

export type MenuGroup = {
  id: string;
  label: string;
  items: MenuItem[];
  collapsible?: boolean;
};
