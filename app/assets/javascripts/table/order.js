define("table/order", function(module) {
  var Row = Marionette.ItemView.extend({
    tagName: 'tr',
    template: 'order',
    editTemplate: 'edit-order',
    mode: 'read-only',

    events: {
      'click .edit': 'edit',
      'click .save': 'save',
      'click .cancel': 'cancel',
      'click .destroy': 'destroyOrder'
    },

    editBindings: {
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

    readOnlyBindings: {
      '.order-userName .value': {
        observe: 'user_id',
        onGet: function(userId){ return this.users.get(userId).get('name') }
      },

      '.order-total .value': 'total',
      '.order-notes .value': 'notes'
    },

    initialize: function(options){
      this.users = options.users;
    },

    getTemplate: function(){
      return this.isReadOnly() ? this.template : this.editTemplate;
    },

    onRender: function(){
      var bindings = this.isReadOnly() ? this.readOnlyBindings : this.editBindings;
      this.stickit(this.model, bindings);
    },

    edit: function(){
      this.mode = 'edit';
      this.render();
    },

    save: function(){
      this.model.save();
      this.cancel();
    },

    cancel: function(){
      this.mode = 'read-only';
      this.render();
    },

    destroyOrder: function(){
      this.model.destroy();
    },

    isReadOnly: function(){
      return this.mode === 'read-only';
    }
  });

  module.exports = Row;
});