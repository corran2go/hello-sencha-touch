Ext.define('App.store.Blogs', {
  extend: 'Ext.data.TreeStore',

  requires: ['App.model.Blog'],

  config: {
    model: 'App.model.Blog',
    autoLoad: true,
    root: {
      leaf: false
    }
  }
});
