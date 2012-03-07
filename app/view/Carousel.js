Ext.define('App.view.Carousel', {
  extend: 'Ext.Carousel',
  xtype: 'carouselview',

  config: {
    title: 'Carousel Test',
    iconCls: 'refresh',
    historyToken: 'carousel',

    defaults: {
      styleHtmlContent: true
    },

    items: [
      {
        html: 'Item 1',
        style: 'background-color: #5E99CC'
      },
      {
        html: 'Item 2',
        style: 'background-color: #759E60'
      },
      { xtype: 'homeview' },
      { xtype: 'blogview' },
      { xtype: 'tweetview' },
      { xtype: 'contactview' },
      { xtype: 'layoutview' }
    ]
  }
});
