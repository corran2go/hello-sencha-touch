Ext.application({
  name: 'App',

  models: ['Blog', 'Tweet'],
  stores: ['Blogs', 'Tweets'],
  views: ['Main'],
  controllers: ['Main'],

  viewport: {
    autoMaximize: true
  },

  launch: function() {
    Ext.Viewport.add(Ext.create('App.view.Main'));
  }
});
