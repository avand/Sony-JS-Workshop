var assert = require("assert");

describe("avandamiri.com", function() {
  it("should have the right title", function () {
    browser.url("http://avandamiri.com");
    var title = browser.getTitle();
    assert.equal(title, "Hello · Avand Amiri");
  });
});
