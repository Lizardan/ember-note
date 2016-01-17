import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNew: function() {
      // Get username from input and create user record in model
      let user = this.store.createRecord('user', {name: this.get('name')});

      // Save new user and inform that user was created or if save failed
      user.save().then(() => {
        console.log('Save Successful');
        this.set('message', `A new user with the name ${this.get('name')} was added.`);
        this.set('name', null);
      }, () => {
        console.lot('Save failed.');
      });
    }// end addNew()
  }
});
