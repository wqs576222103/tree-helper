// 引入要测试的函数和Jest框架
import { findNodeByKey } from "../dist/find.es.js";

// 定义一个示例数据
const treeData = [
  {
    key: 1,
    name: "A",
    children: [
      {
        key: 2,
        name: "B",
      },
      {
        key: 3,
        name: "C",
        children: [
          {
            key: 4,
            name: "D",
          },
          {
            key: 5,
            name: "E",
          },
        ],
      },
    ],
  },
];

// 开始测试
describe("findNodeByKey", () => {
  // 测试正常情况，找到对应的节点
  test("should return the node with the given key and value", () => {
    const result = findNodeByKey(treeData, 3);
    expect(result).toEqual({
      key: 3,
      name: "C",
      children: [
        {
          key: 4,
          name: "D",
        },
        {
          key: 5,
          name: "E",
        },
      ],
    });
  });

  // 测试异常情况，找不到对应的节点
  test("should return null if the node with the given key and value does not exist", () => {
    const result = findNodeByKey(treeData, "6");
    expect(result).toBeNull();
  });

  // 测试异常情况，传入空数据
  test("should return null if the node is null or undefined", () => {
    const result1 = findNodeByKey(null, "1");
    const result2 = findNodeByKey(undefined, "1");
    expect(result1).toBeNull();
    expect(result2).toBeNull();
  });

  // 测试不同的参数设置，指定childrenName和keyName
  test("should return the node with the given key and value according to the custom childrenName and keyName", () => {
    const customTreeData = [
      {
        _id_: "_A_",
        _name_: "_A_",
        _children_: [
          {
            _id_: "_B_",
            _name_: "_B_",
          },
          {
            _id_: "_C_",
            _name_: "_C_",
            _children_: [
              {
                _id_: "_D_",
                _name_: "_D_",
              },
              {
                _id_: "_E_",
                _name_: "_E_",
              },
            ],
          },
        ],
      },
    ];

    const result = findNodeByKey(customTreeData, "_C_", "_children_", "_id_");

    expect(result).toEqual({
      _id_: "_C_",
      _name_: "_C_",
      _children_: [
        {
          _id_: "_D_",
          _name_: "_D_",
        },
        {
          _id_: "_E_",
          _name_: "_E_",
        },
      ],
    });
  });
});
