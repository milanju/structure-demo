Template.mainLayout.helpers({
  isCurrent: function(route) {
    if(route === Router.current().route.getName()) {
      return "active"
    }
  }
});
