"use strict";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);

    if (child.parent) {
      var index = child.parent.children.indexOf(child);
      child.parent.children.splice(index, 1);
    }

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
