import Ember from 'ember';

export default Ember.ArrayController.extend({
  
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