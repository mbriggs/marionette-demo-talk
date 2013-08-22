define("table/orders", function(module) {
  var Order = require('table/order');

  var NoOrders = Marionette.ItemView.extend({
    tagName: 'tr',
    template: 'no-orders'
  });

  var Orders = Marionette.CompositeView.extend({
    tagName: 'table',
    className: 'table table-striped',
    itemView: Order,
    emptyView: NoOrders,
    itemViewContainer: 'tbody',
    template: 'orders',
    itemViewOptions: {},

    initialize: function(options){
      this.collection = options.orders;
      this.itemViewOptions.users = options.users;
      this.orders = options.orders;
    }
  });

  module.exports = Orders;
});