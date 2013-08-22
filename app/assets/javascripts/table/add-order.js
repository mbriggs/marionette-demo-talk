define("table/add-order", function(module) {
  var Order = require('models/order');

  var Add = Marionette.ItemView.extend({
    tagName: 'tr',
    className: 'add-order',
    template: 'order-form',

    events: {
      'click .save': 'save'
    },

    bindings: {
      '.order-userName select': {
        observe: 'user_id',
        selectOptions: {
          collection: 'this.users',
          labelPath: 'name',
          valuePath: 'id'
        }
      },

      '.order-total input': 'total',
      '.order-notes textarea': 'notes'
    },


    initialize: function(options){
      this.users = options.users;
      this.orders = options.orders;
      this.model = new Order();
    },

    save: function(){
      this.model.save();
      this.orders.add(model);

      this.unstickit();
      this.model = new Order();
      this.stickit();
    },

    onRender: function(){
      this.stickit();
    }

  });

  module.exports = Add;
});