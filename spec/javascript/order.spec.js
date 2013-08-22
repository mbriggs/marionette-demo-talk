describe("Order Row", function() {
  var Order = require('table/order');
  var Model = Backbone.Model;
  var Collection = Backbone.Collection;

  describe("viewing", function() {
    var order, model, users;

    beforeEach(function() {
      users = new Collection([ {id: 1, name: 'frank' }]);
      model = new Model({ user_id: 1 });
      order = new Order({ model: model, users: users });
      order.render();
    });

    it("is read-only", function() {
      expect(order.$('input,select').length).to.be(0);
      expect(order.$el.text()).to.match(/frank/);
    });
  });

  describe("editing", function() {
    var order, model, users;

    beforeEach(function() {
      users = new Collection([ {id: 1, name: 'frank' }]);
      model = new Model({ user_id: 1 });
      order = new Order({ model: model, users: users });
      order.render();

      order.edit();
    });

    it("is not read-only", function() {
      expect(order.$('input,select,textarea').length).to.eq(3);
    });

  });
});