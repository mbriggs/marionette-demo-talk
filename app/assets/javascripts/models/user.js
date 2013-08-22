define("models/user", function(module) {
  var User = Backbone.Model.extend({
    urlRoot: '/users'
  });

  module.exports = User;
});