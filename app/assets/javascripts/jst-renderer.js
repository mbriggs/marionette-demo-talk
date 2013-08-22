define("jst-renderer", function(module) {
  var Renderer = Backbone.Class.extend({
    prefix: '',

    constructor: function(store){
      if(!store){
        throw new Error("Template store is required");
      }

      this.store = store;
      Backbone.Class.apply(this, arguments);
    },

    render: function(viewTemplate, data){
      var template = _.isString(viewTemplate) ? this.store[this.prefix + viewTemplate] : viewTemplate;
      var result;

      if(template){
        result = template(data);
      } else {
        throw new Error("Could not find template '"+ viewTemplate +"'");
      }

      return result;
    }
  });

  module.exports = Renderer;
});