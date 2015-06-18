import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
	    createTodo: function() {
	      	// Get the todo title set by the "New Todo" text field
	    	var title = this.get('newTitle');
	    	if (!title.trim()) { return; }

	    	// Create the new Todo model
	    	var todo = this.store.createRecord('todo', {
	        title: title,
	        isCompleted: false
	    	});

    		// Clear the "New Todo" text field
    		this.set('newTitle', '');

    		// Save the new model
    		todo.save();
    	}
  	},
  	searchQuery : null,

  	filterResult: function(){
    	var that = this;
    	if (this.searchQuery == undefined){
        	return this.get('content');}
    	else{
      		return this.get('content').filter(function(item,index,enumerate){
        		return item.get('title').includes(that.searchQuery);
      		});
    	}
  	}.property('searchQuery', '@each'),

  	remaining : function(){
    	return this.get('length');
  	}.property('@each'),

  	inflection: function() {
    	var remaining = this.get('remaining');
    	return remaining === 1 ? 'item' : 'items';
  	}.property('remaining')

});