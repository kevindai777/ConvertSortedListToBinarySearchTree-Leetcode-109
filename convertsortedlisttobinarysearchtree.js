//Objective is to convert a sorted linked list to a BST.

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val
      this.left = left
      this.right = right
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new TreeNode(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new TreeNode(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new TreeNode(null, null, val)
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)


//O(n) solution that pushes all of the values in the linked list into an array
//and then builds the BST recursively.

let arr = []

while (head) {
    arr.push(head.val)
    head = head.next
}

let start = 0
let end = arr.length - 1

function dfs(start, end) {
    if (start > end) {
        return null
    }

    let mid = Math.floor((start + end) / 2)
    let root = new TreeNode(arr[mid])
    root.left = dfs(start, mid - 1)
    root.right = dfs(mid + 1, end)

    return root
}
return dfs(start, end)
