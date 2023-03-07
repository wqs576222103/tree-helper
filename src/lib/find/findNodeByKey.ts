import { CHILDREN_NAME, KEY_NAME } from "../../const";
import { TTreeNode } from "../../typings/index";

type TParams = {
  node: TTreeNode[] | TTreeNode;
  key: string;
  childrenName?: string;
  keyName?: string;
};
/**
 * 根据key查找树节点
 * @param params TParams
 * @returns TTreeNode
 */
export const findNodeByKey = (params: TParams): TTreeNode | null => {
  const {
    node,
    key,
    childrenName = CHILDREN_NAME,
    keyName = KEY_NAME,
  } = params;
  if (!node) return null;
  const treeData = Array.isArray(node) ? node : [node];

  const loop = (tree: TParams["node"]): TTreeNode | null => {
    const len = tree.length;
    for (let i = 0; i < len; i++) {
      const nodeItem = tree[i];
      if (nodeItem[keyName] === key) return nodeItem;
      const children = nodeItem[childrenName];
      if (children && children.length) {
        const rst = loop(children);
        if (rst !== null) return rst;
      }
    }
    return null;
  };

  return loop(treeData);
};

