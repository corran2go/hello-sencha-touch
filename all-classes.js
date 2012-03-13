/*
Copyright(c) 2011 Company Name
*/
Ext.define('App.controller.Contact', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      contactForm: 'formpanel'
    },

    control: {
      'formpanel button[action=send]': {
        tap: 'submitForm'
      },
      contactForm: {
        submit: 'formSubmitted'
      }
    }
  },

  submitForm: function() {
    this.getContactForm().submit();
  },

  formSubmitted: function(form, result, event) {
    Ext.Msg.alert('Success', 'The form data has been submitted.');
  }
});

Ext.define('App.controller.List', {
  extend: 'Ext.app.Controller',

  config: {
    control: {
      'listview': {
        select: 'showEntry'
      }
    }
  },

  showEntry: function(view, record) {
    Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
  }
});

Ext.define('App.controller.Navigation', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      navigationView: 'mynavigationview'
    },

    control: {
      'mynavigationview button[action=first]': {
        tap: 'showFirstLevel'
      },
      'mynavigationview button[action=second]': {
        tap: 'showSecondLevel'
      },
      'mynavigationview button[action=pop]': {
        tap: 'popView'
      }
    }
  },

  showFirstLevel: function() {
    this.getNavigationView().push({
      title: '1st view',
      items: {
        xtype: 'button',
        text: 'Push 2nd view',
        action: 'second'
      }
    });
  },

  showSecondLevel: function() {
    this.getNavigationView().push({
      title: '2nd view',
      items: {
        xtype: 'button',
        text: 'Pop this view',
        action: 'pop'
      }
    });
  },

  popView: function() {
    this.getNavigationView().pop()
  }
});

Ext.define('App.view.Home', {
  extend: 'Ext.Panel',
  xtype: 'homeview',

  config: {
    title: 'Home',
    iconCls: 'home',
    historyToken: 'home',

    cls: 'home',
    scrollable: true,
    html: [
      '<img src="http://staging.sencha.com/img/sencha.png" />',
      '<h1>Welcome to Sencha Touch</h1>',
      '<p>You\'re creating the Getting Started app. This demonstrates how ',
      'to use tabs, lists and forms to create a simple app</p>',
      '<h2>Sencha Touch (2.0.0)</h2>'
    ].join('')
  }
});

Ext.define('App.view.Blog', {
  extend: 'Ext.dataview.NestedList',
  xtype: 'blogview',

  config: {
    title: 'Blog',
    iconCls: 'infinite',
    historyToken: 'blog',

    store: 'Blogs',
    displayField: 'title',

    detailCard: {
      xtype: 'panel',
      scrollable: true,
      styleHtmlContent: true
    }
  }
});

Ext.define('App.view.Contact', {
  extend: 'Ext.form.Panel',
  xtype: 'contactview',

  requires: [
    'Ext.form.FieldSet',
    'Ext.field.Email'
  ],

  config: {
    title: 'Contact',
    iconCls: 'user',
    historyToken: 'contact',

    url: 'static.json',
    layout: 'vbox',

    items: [
      {
        xtype: 'titlebar',
        title: 'Contact',
        docked: 'top'
      },
      {
        xtype: 'fieldset',
        title: 'Contact Us',
        instructions: '(email is optional)',

        items: [
          {
            xtype: 'textfield',
            name: 'name',
            label: 'Name'
          },
          {
            xtype: 'emailfield',
            name: 'email',
            label: 'Email'
          },
          {
            xtype: 'textareafield',
            name: 'message',
            label: 'Message'
          }
        ]
      },
      {
        xtype: 'button',
        text: 'Send',
        ui: 'confirm',
        action: 'send'
      }
    ]
  }
});

Ext.define('App.view.Layout', {
  extend: 'Ext.Panel',
  xtype: 'layoutview',

  config: {
    title: 'Layout Test',
    iconCls: 'organize',
    historyToken: 'layout',

    layout: 'hbox',

    items: [
      {
        flex: 1,
        layout: 'vbox',
        style: 'background-color: #5E99CC;',

        items: [
          {
            flex: 1,
            html: 'Left Panel, half width, half height',
          },
          {
            flex: 1,
            html: 'Left Bottom Panel, half height',
            style: 'background-color: #6FAADD;'
          }
        ]
      },
      {
        flex: 1,
        layout: 'vbox',
        style: 'background-color: #759E60;',

        items: [
          {
            flex: 1,
            html: 'Right Panel, half width, half height'
          },
          {
            flex: 1,
            html: 'Right Bottom Panel, half height',
            style: 'background-color: #86AF71;'
          }
        ]
      }
    ]
  }
});

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

Ext.define('App.view.List', {
  extend: 'Ext.List',
  xtype: 'listview',

  config: {
    title: 'List Test',
    iconCls: 'trash',
    historyToken: 'list',

    store: {
      fields: ['name'],
      data: [
        {name: 'Cowper'},
        {name: 'Everett'},
        {name: 'University'},
        {name: 'Forest'}
      ]
    },

    itemTpl: 'User: {name}',

    items: {
      xtype: 'titlebar',
      title: 'List Test',
      docked: 'top'
    }
  }
});

Ext.define('App.view.Navigation', {
  extend: 'Ext.navigation.View',
  xtype: 'mynavigationview',

  config: {
    title: 'Navigation Test',
    iconCls: 'locate',
    historyToken: 'navigation',

    items: {
      title: 'Navigation Test',

      items: {
        xtype: 'button',
        text: 'Push 1st view',
        action: 'first'
      }
    }
  }
});

Ext.define('App.controller.Base', {
  extend: 'Ext.app.Controller',

  config: {
    refs: {
      mainview: '#mainview'
    },

    control: {
      mainview: {
        activeitemchange: 'addTabHistory'
      }
    },

    routes: {
      'home': 'showHome',
      'tweets': 'showTweets',
      'contact': 'showContact',
      'layout': 'showLayout',
      'carousel': 'showCarousel',
      'list': 'showList',
      'navigation': 'showNavigation'
    }
  },

  addTabHistory: function(mainview, newView) {
    var history = this.getApplication().getHistory();
    if (history.getToken().split('/')[0] !== newView.getHistoryToken()) {
      history.add(new Ext.app.Action({
        url: newView.getHistoryToken()
      }), true);
    }
  },

  showHome: function() {
    this.getMainview().setActiveItem(0);
  },

  showTweets: function() {
    this.getMainview().setActiveItem(2);
  },

  showContact: function() {
    this.getMainview().setActiveItem(3);
  },

  showLayout: function() {
    this.getMainview().setActiveItem(4);
  },

  showCarousel: function() {
    this.getMainview().setActiveItem(5);
  },

  showList: function() {
    this.getMainview().setActiveItem(6);
  },

  showNavigation: function() {
    this.getMainview().setActiveItem(7);
  }
});

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

Ext.define('App.controller.Blog', {
  extend: 'App.controller.Base',

  config: {
    refs: {
      nestedList: 'blogview',
    },

    control: {
      nestedList: {
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

Ext.define('App.store.Blogs', {
  extend: 'Ext.data.TreeStore',

  requires: ['App.model.Blog'],

  config: {
    model: 'App.model.Blog',
    autoLoad: true,
    root: {
      leaf: false
    }
  }
});

Ext.define('App.store.Tweets', {
  extend: 'Ext.data.Store',

  requires: ['App.model.Tweet'],

  config: {
    model: 'App.model.Tweet',
    autoLoad: true
  }
});

Ext.define('App.view.Tweet', {
  extend: 'Ext.dataview.DataView',
  xtype: 'tweetview',

  requires: [
    'App.view.TweetItem'
  ],

  config: {
    title: 'Tweets',
    iconCls: 'twitter',
    historyToken: 'tweets',

    baseCls: 'my-dataview',
    itemCls: 'my-dataview-item',
    store: 'Tweets',
    useComponents: true,
    defaultType: 'tweetitemview',

    items: {
      xtype: 'titlebar',
      title: 'Tweets',
      docked: 'top'
    }
  }
});

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



