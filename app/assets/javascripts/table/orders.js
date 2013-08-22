define("table/orders", function(module) {
  var Order = require('table/order');
  var AddOrder = require('table/add-order');

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

    ui: {
      header: 'thead'
    },

    initialize: function(options){
      this.collection = options.orders;
      this.itemViewOptions.users = options.users;
      this.orders = options.orders;
      this.users = options.users;

      this.addView = new AddOrder({ orders: this.orders, users: this.users });
    },

    onRender: function(){
      this.ui.header.append(this.addView.render().el);
    },

    onClose: function(){
      this.addView.close();
    }
  });

  module.exports = Orders;
});