var AnalyticsModule = (function() {

  var _actionCount = 0;

  function _incrementNumberOfActions() {
    _actionCount++;
  };

  function _sendToServer(user, action) {
    console.log(`${new Date()}: ${user} ${action.action} ${action.target} on ${action.page}`)
  }

  return {
    logAction: function(user, action) {
      _incrementNumberOfActions();
      _sendToServer(user, action)
    },

    getActionCount: function() {
      return _actionCount;
    }
  }
})();

AnalyticsModule.logAction("avand", {
  page: "homepage",
  action: "clicked",
  target: "sign-up-link"
});

AnalyticsModule.logAction("bob", {
  page: "checkout",
  action: "clicked",
  target: "check-out-button"
});

console.log(`Total actions: ${AnalyticsModule.getActionCount()}`);
