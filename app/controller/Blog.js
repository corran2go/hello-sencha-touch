Ext.define('App.controller.Blog', {
  extend: 'Ext.app.Controller',

  config: {
    control: {
      'blogview': {
        leafitemtap: 'showDetailPanel'
      }
    }
  },

  showDetailPanel: function(nestedList, list, index, target, record) {
    var detailCard = nestedList.getDetailCard();
    detailCard.setHtml(record.get('content'));
    detailCard.getScrollable().getScroller().scrollToTop();
  }
});
