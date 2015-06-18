import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    save: function() {
      // Get the todo title set by the "New Todo" text field
      var model = this.get('model').get('content');
      var title = this.get('newTitle');
      var newId = parseInt(model[model.length - 1].get('id')) + 1;
      if (title == undefined) { return; }
      if (!title.trim()) { return; }

      // Create the new Todo model
      var todo = this.store.createRecord('todo', {
        title: title,
        dueDate: '2015-06-14T18:30:00Z'
      });

      // Clear the "New Todo" text field
      this.set('newTitle', '');

      // Save the new model
      todo.save();
    }
  }
});