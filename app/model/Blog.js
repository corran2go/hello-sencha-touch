Ext.define('App.model.Blog', {
  extend: 'Ext.data.Model',

  requires: [
    'Ext.data.proxy.JsonP'
  ],

  config: {
    fields: [
      'title', 'link', 'author', 'contentSnippet', 'content',
      { name: 'leaf', defaultValue: true }
    ],

    proxy: {
      type: 'jsonp',
      url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',

      reader: {
        type: 'json',
        rootProperty: 'responseData.feed.entries'
      }
    }
  }
});
