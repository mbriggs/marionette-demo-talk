define("models/order", function(module) {
  var Order = Backbone.Model.extend({
    urlRoot: '/orders'
  });

  module.exports = Order;
});