Ext.define('App.view.Main', {
  extend: 'Ext.tab.Panel',
  id: 'mainview',

  requires: [
    'Ext.TitleBar',
    'App.view.Home',
    'App.view.Blog',
    'App.view.Tweet',
    'App.view.Contact',
    'App.view.Layout',
    'App.view.Carousel',
    'App.view.List',
    'App.view.Navigation'
  ],

  config: {
    tabBarPosition: 'bottom',
    tabBar: {
      scrollable: 'horizontal'
    },

    layout: {
      type: 'card',
      animation: {
        type: 'slide'
      }
    },

    items: [
      { xtype: 'homeview' },
      { xtype: 'blogview' },
      { xtype: 'tweetview' },
      { xtype: 'contactview' },
      { xtype: 'layoutview' },
      { xtype: 'carouselview' },
      { xtype: 'listview' },
      { xtype: 'mynavigationview' }
    ]
  },
});
