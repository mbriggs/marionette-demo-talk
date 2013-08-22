describe("JSTRenderer", function() {
  var Renderer = require('jst-renderer');

  it("cannot be intialized without a template store", function() {
    expect(function(){
      new Renderer();
    }).to.throw(/Template store is required/);
  });

  describe("with templates", function() {
    var JST;
    var renderer;

    beforeEach(function() {
      JST = { templ: sinon.spy() };
      renderer = new Renderer(JST);
    });

    it("renders by name", function() {
      renderer.render('templ', 'data');
      expect(JST.templ).to.have.been.calledWith('data');
    });

    it("raises an error when name not found", function() {
      expect(function(){ renderer.render('floob') }).to.throw(/Could not find template 'floob'/);
    });

    it("renders functions as the template", function() {
      var template = sinon.spy();
      renderer.render(template, 'data');

      expect(template).to.have.been.calledWith('data');
    });
  });

  describe("with prefix", function() {
    var PrefixedRenderer = Renderer.extend({
      prefix: '/foo/'
    });
    var renderer;
    var JST;

    beforeEach(function() {
      JST = { '/foo/templ' : sinon.spy() };
      renderer = new PrefixedRenderer(JST);
    });

    it("finds templates after prefix", function() {
      renderer.render('templ', 'data');
      expect(JST['/foo/templ']).to.have.been.calledWith('data');
    });
  });
});