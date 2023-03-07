// 引入要测试的函数和Jest框架
import {findNodeByKey} from "../dist/find.es.js";

// 定义一个测试套件
describe("findNodeByKey function", () => {
  // 定义一个测试用例：当node为空时，返回null
  test("should return null when node is null", () => {
    // 调用函数并断言结果
    expect(findNodeByKey({ node: null, key: "a" })).toBe(null);
  });

  // 定义一个测试用例：当node是一个单个节点时，如果key与节点的key相等，返回该节点；否则返回null
  test("should return node when node is a single node and key matches", () => {
    // 定义一个模拟的节点对象
    const node = { key: "a", value: "apple" };
    // 调用函数并断言结果
    expect(findNodeByKey({ node: node, key: "a" })).toBe(node);
    expect(findNodeByKey({ node: node, key: "b" })).toBe(null);
  });

  // 定义一个测试用例：当node是一个节点数组时，如果key与其中某个节点或其子孙节点的key相等，返回该节点；否则返回null
  test("should return node when node is an array of nodes and key matches", () => {
    // 定义一个模拟的节点数组对象
    const nodes = [
      { key: "a", value: "apple" },
      {
        key: "b",
        value: "banana",
        children: [
          { key: "c", value: "cherry" },
          { key: "d", value: "durian" },
        ],
      },
      { key: "e", value: "elderberry" },
    ];
    // 调用函数并断言结果
    expect(findNodeByKey({ node: nodes, key: "a" })).toBe(nodes[0]);
    expect(findNodeByKey({ node: nodes, key: "b" })).toBe(nodes[1]);
    expect(findNodeByKey({ node: nodes, key: "c" })).toBe(nodes[1].children[0]);
    expect(findNodeByKey({ node: nodes, key: "f" })).toBe(null);
  });
});
