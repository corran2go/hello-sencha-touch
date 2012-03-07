Ext.define('App.controller.Base', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      mainview: '#mainview'
    },

    control: {
      mainview: {
        activeitemchange: 'addTabHistory'
      }
    },

    routes: {
      'home': 'showHome',
      'tweets': 'showTweets',
      'contact': 'showContact',
      'layout': 'showLayout',
      'carousel': 'showCarousel',
      'list': 'showList',
      'navigation': 'showNavigation'
    }
  },

  launch: function() {
    var history = this.getApplication().getHistory();
    history.add(new Ext.app.Action({
      url: 'home'
    }), true);
  },

  addTabHistory: function(mainview, newView) {
    var history = this.getApplication().getHistory();
    history.add(new Ext.app.Action({
      url: newView.getHistoryToken()
    }), true);
  },

  showHome: function() {
    this.getMainview().setActiveItem(0);
  },

  showTweets: function() {
    this.getMainview().setActiveItem(2);
  },

  showContact: function() {
    this.getMainview().setActiveItem(3);
  },

  showLayout: function() {
    this.getMainview().setActiveItem(4);
  },

  showCarousel: function() {
    this.getMainview().setActiveItem(5);
  },

  showList: function() {
    this.getMainview().setActiveItem(6);
  },

  showNavigation: function() {
    this.getMainview().setActiveItem(7);
  }
});
