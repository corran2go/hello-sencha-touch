Ext.define('App.controller.Navigation', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      navigationView: 'mynavigationview'
    },

    control: {
      'mynavigationview button[action=first]': {
        tap: 'showFirstLevel'
      },
      'mynavigationview button[action=second]': {
        tap: 'showSecondLevel'
      },
      'mynavigationview button[action=pop]': {
        tap: 'popView'
      }
    }
  },

  showFirstLevel: function() {
    this.getNavigationView().push({
      title: '1st view',
      items: {
        xtype: 'button',
        text: 'Push 2nd view',
        action: 'second'
      }
    });
  },

  showSecondLevel: function() {
    this.getNavigationView().push({
      title: '2nd view',
      items: {
        xtype: 'button',
        text: 'Pop this view',
        action: 'pop'
      }
    });
  },

  popView: function() {
    this.getNavigationView().pop()
  }
});
