export type ActiveFilter = {
  key: string;
  label: string;
  type: "search" | "category" | "sort";
  icon: Component;
};
