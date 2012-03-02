Ext.define('App.view.Blog', {
  extend: 'Ext.dataview.NestedList',
  xtype: 'blogview',

  config: {
    title: 'Blog',
    iconCls: 'infinite',
    displayField: 'title',
    store: 'Blogs',

    detailCard: {
      xtype: 'panel',
      scrollable: true,
      styleHtmlContent: true
    },

    listeners: {
      itemtap: function(nestedList, list, index, element, post) {
        this.getDetailCard().setHtml(post.get('content'));
        this.getDetailCard().getScrollable().getScroller().scrollToTop();
      }
    }
  }
});
