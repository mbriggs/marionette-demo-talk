(function(){
  var JSTRenderer = require('jst-renderer');
  var TemplateRenderer = JSTRenderer.extend({
    prefix: 'templates/'
  });

  Marionette.Renderer = new TemplateRenderer(JST);
}());