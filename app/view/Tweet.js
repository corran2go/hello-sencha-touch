Ext.define('App.view.Tweet', {
  extend: 'Ext.dataview.DataView',
  xtype: 'tweetview',

  requires: [
    'App.view.TweetItem'
  ],

  config: {
    title: 'Tweets',
    iconCls: 'compose',
    baseCls: 'my-dataview',
    itemCls: 'my-dataview-item',
    store: 'Tweets',
    useComponents: true,
    defaultType: 'tweetitemview',

    items: [
      {
        xtype: 'titlebar',
        title: 'Tweets',
        docked: 'top'
      }
    ]
  }
});
