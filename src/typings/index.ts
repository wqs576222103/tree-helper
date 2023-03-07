export type TTreeNode = {
  key: any;
  children?: TTreeNode[];
  [k: string]: any;
};
