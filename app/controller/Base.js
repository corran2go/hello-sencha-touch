Ext.define('App.controller.Base', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      mainview: '#mainview'
    },

    routes: {
      'home': 'showHome',
      'tweets': 'showTweets',
      'contact': 'showContact'
    }
  },

  showHome: function() {
    this.getMainview().setActiveItem(0);
  },

  showTweets: function() {
    this.getMainview().setActiveItem(2);
  },

  showContact: function() {
    this.getMainview().setActiveItem(3);
  }
});
