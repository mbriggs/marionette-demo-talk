define("models/users", function(module) {
  var User = require('models/user');

  var Users = Backbone.Collection.extend({
    model: User
  });

  module.exports = Users;
});