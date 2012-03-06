Ext.define('App.controller.Base', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      mainview: '#mainview'
    },

    routes: {
      'tweets': 'showTweets',
      'contact': 'showContact'
    }
  },

  showTweets: function() {
    this.getMainview().setActiveItem(2);
  },

  showContact: function() {
    this.getMainview().setActiveItem(3);
  }
});
