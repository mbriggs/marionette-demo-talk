describe("Orders Table", function() {
  var Orders = require('table/orders');
  var Collection = Backbone.Collection;

  describe("with an empty collection", function() {
    var table, collection;

    beforeEach(function() {
      collection = new Collection();
      table = new Orders({ collection: collection });

      table.render();
    });

    it("shows empty message", function() {
      expect(table.$('tbody td').text()).to.match(/No orders have been placed yet/);
    });
  });

  describe("with orders", function() {
    var table, orders, users;

    beforeEach(function() {
      users = new Collection([
        {id: 1, name: 'first'},
        {id:2, name: 'last'}
      ]);
      orders = new Collection([{ user_id: 1 }, { user_id: 2 }]);

      table = new Orders({ orders: orders, users: users });
      table.render();
    });

    it("renders two rows", function() {
      expect(table.$('tbody tr').length).to.eq(2);
    });

    it("renders first row", function() {
      expect(table.$('tbody tr:first-child').text()).to.match(/first/);
    });

    it("renders second row", function() {
      expect(table.$('tbody tr:last-child').text()).to.match(/last/);
    });
  });
});