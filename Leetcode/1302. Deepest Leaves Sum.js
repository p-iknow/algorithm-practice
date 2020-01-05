const root = {
  val: 1,
  right: {
    val: 3,
    right: { val: 6, right: { val: 8, left: null, right: null }, left: null },
    left: null
  },
  left: {
    val: 2,
    right: { val: 5, right: null, left: null },
    left: { val: 4, right: null, left: { val: 7, right: null, left: null } }
  }
};

const deepestLeavesSum = root => {
  const stack = [];
  const depthMap = new Map();
  let maxDepth = 1;
  let sum = 0;
  stack.push({ node: root, depth: 1 });

  while (stack.length) {
    const ele = stack.pop();
    // init if
    if (!depthMap.get(ele.depth)) {
      depthMap.set(ele.depth, []);
    }

    depthMap.get(ele.depth).push(ele.node.val);

    if (ele.node.left)
      stack.push({ depth: ele.depth + 1, node: ele.node.left });
    if (ele.node.right)
      stack.push({ depth: ele.depth + 1, node: ele.node.right });

    maxDepth = Math.max(ele.depth, maxDepth);
  }

  sum = depthMap.get(maxDepth).reduce((prev, curr) => prev + curr);
  return sum;
};

deepestLeavesSum(root);
