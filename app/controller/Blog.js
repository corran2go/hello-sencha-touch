Ext.define('App.controller.Blog', {
  extend: 'App.controller.Base',

  config: {
    refs: {
      nestedList: 'blogview',
    },

    control: {
      'blogview': {
        leafitemtap: 'updateDetailCard'
      }
    },

    before: {
      showBlogByIndex: 'ensureStoreLoaded'
    },

    routes: {
      'blog': 'showBlog',
      'blog/:index': 'showBlogByIndex'
    }
  },

  updateDetailCard: function(nestedList, list, index, target, record) {
    var detailCard = nestedList.getDetailCard();
    detailCard.setHtml(record.get('content'));
    detailCard.getScrollable().getScroller().scrollToTop();
  },

  ensureStoreLoaded: function(action) {
    var store = Ext.getStore('Blogs');
    if (store.data.all.length) {
      action.resume();
    } else {
      store.on('load', function() {
        action.resume();
      }, this, {single: true });
    }
  },

  showBlog: function() {
    this.getMainview().setActiveItem(1);
  },

  showBlogByIndex: function(index) {
    this.showBlog();
    var record = this.getNestedList().getStore().getAt(index - 1);
    if (record) {
      this.updateDetailCard(this.getNestedList(), null, null, null, record);
      this.getNestedList().goToLeaf(record);
    }
  }
});
