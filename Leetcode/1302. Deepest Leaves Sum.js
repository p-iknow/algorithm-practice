const deepestLeavesSum = function(root) {
  const stk = [];
  const vals = {};
  let maxDepth = 1;
  let sum = 0;
  stk.push({ node: root, depth: 1 });

  while (stk.length) {
    const ele = stk.pop();
    // If vals not set for current depth, initalize;
    if (!vals[ele.depth]) {
      vals[ele.depth] = [];
    }
    // Add element value to current depth
    vals[ele.depth].push(ele.node.val);

    // Increase parent node depth by one and store it along with child elements
    if (ele.node.left) stk.push({ node: ele.node.left, depth: ele.depth + 1 });
    if (ele.node.right)
      stk.push({ node: ele.node.right, depth: ele.depth + 1 });

    // Update maxDepth
    maxDepth = Math.max(maxDepth, ele.depth);
  }
  // Sum elements of vals[maxDepth]
  for (const ele of vals[maxDepth]) {
    sum += ele;
  }
  return sum;
};

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

deepestLeavesSum(root);
