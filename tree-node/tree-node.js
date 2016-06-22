"use strict";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
    child.parent = this;
  }

  get isRoot() {
    return !this.parent;
  }

  get root() {
    return this.parent == null ? this : this.parent.root;
  }
}

module.exports = TreeNode;
