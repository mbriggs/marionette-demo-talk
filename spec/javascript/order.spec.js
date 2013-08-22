describe("Order Row", function() {
  var Order = require('table/order');
  var Model = Backbone.Model;

  describe("viewing", function() {
    var order, model;

    beforeEach(function() {
      model = new Model({ user: { name: 'frank' }});
      order = new Order({ model: model });
      order.render();
    });

    it("is read-only", function() {
      expect(order.$('input,select').length).to.be(0);
      expect(order.$el.text()).to.match(/frank/);
    });
  });

  describe("editing", function() {
    var order, model;

    beforeEach(function() {
      model = new Model();
      order = new Order({ model: model });
      order.render();

      order.edit();
    });

    it("is not read-only", function() {
      expect(order.$('input,select,textarea').length).to.eq(3);
    });

  });
});