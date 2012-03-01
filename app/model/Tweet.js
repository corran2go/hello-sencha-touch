Ext.define('App.model.Tweet', {
  extend: 'Ext.data.Model',

  requires: [
    'Ext.data.proxy.JsonP'
  ],

  config: {
    fields: [
      'from_user', 'text', 'profile_image_url'
    ],

    proxy: {
      type: 'jsonp',
      url: 'http://search.twitter.com/search.json?q=Sencha Touch',

      reader: {
        type: 'json',
        rootProperty: 'results'
      }
    }
  }
});
