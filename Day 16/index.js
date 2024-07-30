// Activity 1
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(10));

function fibonacci(num) {
  if (num <= 1) return num;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));

// Activity 2
const arr = [1, 2, 3, 44, 5];
function recurSum(arr) {
  if (arr.length == 0) return 0;
  return arr[0] + recurSum(arr.slice(1));
}
console.log(recurSum(arr));

function recurMax(arr) {
  if (arr.length == 1) return arr[0];
  return Math.max(arr[0], recurMax(arr.slice(1)));
}

console.log(recurMax(arr));

// Activity 3
function recurReverse(string) {
  if (string.length == 1) return string;
  return recurReverse(string.slice(1)) + string[0];
}

console.log(recurReverse("hello"));

function recurPalindrome(string) {
  if (string.length == 1) return true;
  if (string[0] == string[string.length - 1]) {
    return recurPalindrome(string.substring(1, string.length - 1));
  } else {
    return false;
  }
}

console.log(recurPalindrome("hello"));
console.log(recurPalindrome("madam"));

// Activity 4
function binarySearch(arr, target, low, high) {
  if (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      return binarySearch(arr, target, low, mid - 1);
    } else {
      return binarySearch(arr, target, mid + 1, high);
    }
  } else {
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4], 3, 0, 4));

function countOccurence(arr, target) {
  if (arr.length == 0) return 0;
  return (arr[0] == target ? 1 : 0) + countOccurence(arr.slice(1), target);
}

console.log(countOccurence([1, 1, 23, 5, 64, 7, 21, 21, 1], 1));

// Activity 5
class TreeNode {
  constructor(value = 0, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  inorderTraversal = function () {
    let result = [];
    this.inOrder(this, result);
    return result;
  };
  inOrder = function (node, result) {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
  };
}

const leftChild = new TreeNode(1);
const rightChild = new TreeNode(3);
const root = new TreeNode(2, leftChild, rightChild);
console.log(root.inorderTraversal());

function treeDepth(root) {
  if (root == null) return 0;
  return Math.max(treeDepth(root.left), treeDepth(root.right)) + 1;
}

console.log(treeDepth(root));
