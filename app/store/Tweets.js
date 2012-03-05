Ext.define('App.store.Tweets', {
  extend: 'Ext.data.Store',

  requires: ['App.model.Tweet'],

  config: {
    model: 'App.model.Tweet',
    autoLoad: true
  }
});
