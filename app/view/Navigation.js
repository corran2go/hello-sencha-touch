Ext.define('App.view.Navigation', {
  extend: 'Ext.navigation.View',
  xtype: 'mynavigationview',

  config: {
    title: 'Navigation Test',
    iconCls: 'locate',

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
