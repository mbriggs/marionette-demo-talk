if(Backbone.Class) throw new Error("Something already exists at Backbone.Class!!")
Backbone.Class = function(){ this.initialize.apply(this, arguments) };
Backbone.Class.extend = Backbone.Model.extend;
Backbone.Class.prototype.initialize = function(){};
_.extend(Backbone.Class.prototype, Backbone.Events);

