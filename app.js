Ext.application({
  name: 'App',
  icon: 'resources/img/icon.jpg',
  tabletStartupScreen: 'resources/img/tablet_startup_portrait.png',

  controllers: ['Blog', 'Contact', 'List', 'Navigation'],
  stores: ['Blogs', 'Tweets'],
  views: ['Viewport'],

  viewport: {
    autoMaximize: true
  },

  launch: function() {
    Ext.Viewport.add(Ext.create('App.view.Viewport'));
  }
});
