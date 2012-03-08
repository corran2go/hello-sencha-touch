Ext.application({
  name: 'App',
  icon: 'resources/img/logo.png',
  tabletStartupScreen: 'resources/img/tablet_startup_portrait.png',

  controllers: ['Blog', 'Contact', 'List', 'Navigation'],
  stores: ['Blogs', 'Tweets'],
  views: ['Main'],

  viewport: {
    autoMaximize: true
  },

  launch: function() {
    Ext.get('loading-image').destroy();
    Ext.Viewport.add(Ext.create('App.view.Main'));
  }
});
