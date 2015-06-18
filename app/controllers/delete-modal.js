import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteItem: function(){
			alert('deleted');
		}
	}
});