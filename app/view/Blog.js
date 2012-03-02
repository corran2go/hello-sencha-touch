Ext.define('App.view.Blog', {
  extend: 'Ext.dataview.NestedList',
  xtype: 'blogview',

  config: {
    title: 'Blog',
    iconCls: 'infinite',

    store: 'Blogs',
    displayField: 'title',

    detailCard: {
      xtype: 'panel',
      scrollable: true,
      styleHtmlContent: true
    },

    listeners: {
      leafitemtap: function(nestedList, list, index, target, record) {
        var detailCard = nestedList.getDetailCard();
        detailCard.setHtml(record.get('content'));
        detailCard.getScrollable().getScroller().scrollToTop();
      }
    }
  }
});
