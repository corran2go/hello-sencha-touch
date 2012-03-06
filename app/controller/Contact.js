Ext.define('App.controller.Contact', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      contactForm: 'formpanel'
    },

    control: {
      'formpanel button[action=send]': {
        tap: 'submitForm'
      },
      'formpanel': {
        submit: 'formSubmitted'
      }
    }
  },

  submitForm: function() {
    this.getContactForm().submit();
  },

  formSubmitted: function(form, result, event) {
    Ext.Msg.alert('Success', 'The form data has been submitted.');
  }
});
