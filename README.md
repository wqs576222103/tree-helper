# tree-helper.js

A small JavaScript utility library for tree data.

Package with `rollup.js`, exported as `iife amd cmd cjs umd es6` module.

## Install

```bash
npm install tree-helper
// or
yarn add tree-helper
```

## API

[See this dir]()

examples:

```txt
find:
  findNodeByKey

insert:
  insertChildNode

delete:

```

## Usage

```javascript
import { findNodeById } from "tree-helper";
const tree = [
  {
    id: "1",
    name: "www",
    children: [],
  },
];
console.log(findNodeById(tree, "1"));
```

Can also import like

```javascript
import treeHelper from "tree-helper";

console.log(treeHelper.findNodeById); // Function
```

or like this

```javascript
import findNodeById from "tree-helper/findNodeById";

console.log(findNodeById); // Function
```

### more examples

## License

Released under the MIT Licenses.
