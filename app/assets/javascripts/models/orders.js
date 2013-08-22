define("models/orders", function(module) {
  var Order = require('models/order');

  var Orders = Backbone.Collection.extend({
    model: Order,
    url: '/orders'
  });

  module.exports = Orders;
});