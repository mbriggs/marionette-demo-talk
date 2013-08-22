define("table/add-order", function(module) {
  var Order = require('models/order');

  var Add = Marionette.ItemView.extend({
    tagName: 'tr',
    className: 'add-order',
    template: 'add-order',

    events: {
      'click .save': 'save'
    },

    bindings: {
      '.order-userName select': {
        observe: 'user_id',
        selectOptions: {
          defaultOption: { label: 'please choose a user...', key: null },
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
      this.orders.add(this.model);

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