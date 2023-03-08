import { CHILDREN_NAME, KEY_NAME } from "../../const";
import { TTreeNode } from "../../typings/index";

type TNode = TTreeNode[] | TTreeNode;
/**
 * 根据key查找树节点
 * @param node 树根节点
 * @param key 目标key
 * @param childrenName 树结构中子节点键名
 * @param keyName 树结构中节点关键标识键名
 * @returns node | null
 */
const findNodeByKey = (
  node: TNode,
  key: string,
  childrenName: string = CHILDREN_NAME,
  keyName: string = KEY_NAME
): TTreeNode | null => {
  if (!node) return null;
  const treeData = Array.isArray(node) ? node : [node];

  const loop = (tree: TNode): TTreeNode | null => {
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
export default findNodeByKey;
