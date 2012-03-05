Ext.define('App.controller.Contact', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      contactForm: 'formpanel'
    },

    control: {
      'formpanel button': {
        tap: 'submitForm'
      }
    }
  },

  submitForm: function() {
    this.getContactForm().submit();
  }
});
