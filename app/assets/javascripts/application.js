//= require libs
//= require jst-renderer
//= require marionette.config
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./table

define("MarionetteDemo", function(module) {
  var Users = require('models/users');
  var Orders = require('models/orders');
  var OrderTable = require('table/orders');


  var App = new Marionette.Application();

  App.addRegions({
    demoRegion: '#demo-region'
  });

  App.addInitializer(function(){
    var users = new Users();
    var orders = new Orders();
    var region = this.demoRegion;

    $.when(users.fetch(), orders.fetch()).then(function(){
      var table = new OrderTable({ users: users, orders: orders });
      region.show(table);
    });
  });

  module.exports = App;
});