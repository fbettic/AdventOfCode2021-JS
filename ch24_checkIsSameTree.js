// ---------- Challenge 24 ----------

function checkIsSameTree(treeA, treeB) {
  return search(treeA, treeB);
}

function search(treeA, treeB) {
  if (treeA.value !== treeB.value) {
    return false;
  }

  if (treeA.left !== null && treeB.left !== null) {
    if (!search(treeA.left, treeB.left)) {
      return false;
    }
  } else if (
    (treeA.left !== null && treeB.left === null) ||
    (treeA.left === null && treeB.left !== null)
  ) {
    return false;
  }

  if (treeA.right !== null && treeB.right !== null) {
    if (!search(treeA.right, treeB.right)) {
      return false;
    }
  } else if (
    (treeA.right !== null && treeB.right === null) ||
    (treeA.right === null && treeB.right !== null)
  ) {
    return false;
  }

  return true;
}

// ---------- Challenge 24 ----------

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

const tree1 = {
  value: 1,
  left: { value: 3, left: null, right: null },
  right: { value: 3, left: null, right: null },
};

console.log(checkIsSameTree(tree1, tree)); // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } },
};

console.log(checkIsSameTree(tree, tree2)); // false
console.log(checkIsSameTree(tree2, tree2)); // true
