describe("Orders Table", function() {
  var Orders =  require('table/orders');
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
    var table, collection;

    beforeEach(function() {
      collection = new Collection([
        {user: {name: 'first'}},
        {user: {name: 'last'}}
      ]);
      table = new Orders({ collection: collection });
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