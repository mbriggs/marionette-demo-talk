define("table/order", function(module) {
  var Row = Marionette.ItemView.extend({
    tagName: 'tr',
    template: 'order'
  });

  module.exports = Row;
});