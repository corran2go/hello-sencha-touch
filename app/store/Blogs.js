Ext.define('App.store.Blogs', {
  extend: 'Ext.data.TreeStore',

  config: {
    model: 'App.model.Blog',
    root: {
      leaf: false
    }
  }
});
