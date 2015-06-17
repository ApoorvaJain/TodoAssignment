import DS from "ember-data";

var Todo = DS.Model.extend({
	title : DS.attr('string'),
	dueDate: DS.attr('string')
});

Todo.reopenClass({
	FIXTURES : [
	 {
	   id: 1,
	   title: 'Learn Ember.js',
	   dueDate: '12-May-2015'
	 },
	 {
	   id: 2,
	   title: '...',
	   dueDate: '12-May-2015'
	 },
	 {
	   id: 3,
	   title: 'Profit!!',
	   dueDate: '12-May-2015'
	 }
	]
});

export default Todo;