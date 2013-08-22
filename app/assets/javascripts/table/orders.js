define("table/orders", function(module) {
  var Order = require('table/order');

  var NoOrders = Marionette.ItemView.extend({
    tagName: 'tr',
    template: 'no-orders'
  });

  var Orders = Marionette.CompositeView.extend({
    tagName: 'table',
    itemView: Order,
    emptyView: NoOrders,
    itemViewContainer: 'tbody',
    template: 'orders'
  });

  module.exports = Orders;
});