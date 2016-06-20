var assert = require('chai').assert;
var TreeNode = require("../tree-node.js");

describe("TreeNode", function() {
  describe("value", function() {
    it("should be undefined by default", function() {
      var treeNode = new TreeNode();
      assert.isUndefined(treeNode.value);
    });

    it("can be constructed with a value", function() {
      var treeNode = new TreeNode("foo");
      assert.equal(treeNode.value, "foo");
    });
  });

  describe("parent", function () {
    it("should be nil by default", function () {
      var treeNode = new TreeNode();
      assert.isNull(treeNode.parent);
    });
  });

  describe("children", function () {
    it("should be empty by default", function () {
      var treeNode = new TreeNode();
      assert.isArray(treeNode.children);
      assert.lengthOf(treeNode.children, 0);
    });
  });

  describe("isRoot", function () {
    it("should return true if parent is null", function () {
      var treeNode = new TreeNode();
      assert.isTrue(treeNode.isRoot);
    });

    it("should return false if parent is not null", function () {
      var treeNode = new TreeNode();
      treeNode.parent = new TreeNode();
      assert.isFalse(treeNode.isRoot);
    });
  });

  describe("addChild", function () {
    it("should set the parent of the child", function () {
      var parent = new TreeNode();
      var child = new TreeNode();
      parent.addChild(child);
      assert.equal(child.parent, parent);
    });

    it("should add the child to the children", function () {
      var parent = new TreeNode();
      var child = new TreeNode();
      parent.addChild(child);
      assert.include(parent.children, child);
    });
  });
});
