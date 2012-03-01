Ext.define('App.view.TweetItem', {
  extend: 'Ext.dataview.component.DataItem',
  xtype: 'tweetitemview',

  requires: [
    'Ext.Img'
  ],

  config: {
    layout: 'vbox',

    userImage: {
      xtype: 'image',
      width: 50,
      height: 50,
      docked: 'left',
      cls: 'my-dataview-item-img'
    },

    userName: {
      cls: 'my-dataview-item-name'
    },

    text: {
      cls: 'my-dataview-item-text'
    },

    dataMap: {
      getUserImage: {
        setSrc: 'profile_image_url'
      },

      getUserName: {
        setHtml: 'from_user'
      },

      getText: {
        setHtml: 'text'
      }
    }
  },

  applyUserImage: function(config) {
    return Ext.factory(config, Ext.Img, this.getUserImage());
  },

  updateUserImage: function(newUserImage) {
    if (newUserImage)
      this.add(newUserImage);
  },

  applyUserName: function(config) {
    return Ext.factory(config, Ext.Component, this.getUserName());
  },

  updateUserName: function(newUserName) {
    if (newUserName)
      this.add(newUserName);
  },

  applyText: function(config) {
    return Ext.factory(config, Ext.Component, this.getText());
  },

  updateText: function(newText) {
    if (newText)
      this.add(newText);
  },
});
