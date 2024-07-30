// Activity 1
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  removeNode(value) {
    if (!this.head) {
      return null;
    }
    if (!this.head.value == value) {
      this.head = this.head.next;
    }
    current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }
  displayNode() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// Activity 2
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items(this.items.length - 1);
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

function reverseString(string) {
  const stack = new Stack();
  for (const char of string) {
    stack.push(char);
  }
  let reverseString = "";
  while (!stack.isEmpty()) {
    reverseString += stack.pop();
  }
  return reverseString;
}

// console.log(reverseString("hello"));

// Activity 3
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    return this.items.shift();
  }
  front() {
    return this.items[0];
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }
  addPrinter(job) {
    this.queue.enqueue(job);
  }
  processJob() {
    if (this.queue.front() == null) {
      return `No Jobs in the queue.`;
    } else {
      const job = this.queue.dequeue();
      return `Processing job ${job}`;
    }
  }
}

// Activity 4
class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(node, newNode) {
    {
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left == newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  }
}

BinaryTree.prototype.inorderTraversal = function () {
  const result = [];
  this.inorder(this.root, result);
  return result;
};

BinaryTree.prototype.inorder = function (node) {
  if (node !== null) {
    this.inorder(node.left, result);
    result.push(node.key);
    this.inorder(node.right, result);
  }
};
