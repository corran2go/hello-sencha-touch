Ext.define('App.view.Main', {
  extend: 'Ext.tab.Panel',

  requires: [
    'Ext.TitleBar',
    'App.view.Home',
    'App.view.Blog',
    'App.view.Tweet',
    'App.view.Contact',
    'App.view.Layout',
    'App.view.Carousel'
  ],

  config: {
    tabBarPosition: 'bottom',

    items: [
      { xtype: 'homeview' },
      { xtype: 'blogview' },
      { xtype: 'tweetview' },
      { xtype: 'contactview' },
      { xtype: 'layoutview' },
      { xtype: 'carouselview' }
    ]
  },
});
