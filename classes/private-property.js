var counter = {
  count: 0,

  increment: function() {
    this.count++;
  },

  getCount: function() {
    return this.count
  }
}

// Good:
counter.increment();
counter.getCount();

// Bad:
counter.count = 123;


// Privatizing the count...

var counter = (function() {
  var _count = 0;

  return {
    increment: function() {
      _count++;
    },

    getCount: function() {
      return _count;
    }
  }
})()

// Good:
counter.increment();
counter.getCout();
counter._count = 123; // Won't do anything bad, yay!
