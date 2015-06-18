import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save: function(){
			var model = this.get('model');
			var newTitle = this.get('title');
			this.set('model.title',newTitle);
			this.set('model.dueDate','2015-06-14T18:30:00Z')
			this.set('model.id',model.id);
			model.save();
		}
	},

	title : function(){
		return this.get('model.title');
	}.property('this')
});