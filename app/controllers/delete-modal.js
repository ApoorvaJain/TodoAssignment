import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteItem: function(){
			this.get('model').deleteRecord();
			this.get('model').save();
		}
	}
});