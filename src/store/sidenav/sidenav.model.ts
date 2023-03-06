export interface NavigationItem {
  name: string;
  to: string;
  active?: boolean;
  icon?: string;
  children?: NavigationItem[];
}
