Ext.define('App.store.Tweets', {
  extend: 'Ext.data.Store',

  config: {
    model: 'App.model.Tweet',
    autoLoad: true
  }
});
