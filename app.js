Ext.application({
  name: 'App',

  models: ['Blog', 'Tweet'],
  stores: ['Blogs', 'Tweets'],
  views: ['Main'],
  controllers: ['Main'],

  launch: function() {
    Ext.Viewport.add(Ext.create('App.view.Main'));
  }
});
