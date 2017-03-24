import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      var params = {
        author: this.get('author'),
        question: this.get('question'),
        content: this.get('content'),
        notes: this.get('notes')
      };

      console.log(params);

      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
