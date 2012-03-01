Ext.define('App.view.Layout', {
  extend: 'Ext.Panel',
  xtype: 'layoutview',

  config: {
    title: 'Layout Test',
    iconCls: 'organize',
    layout: 'hbox',

    items: [
      {
        xtype: 'panel',
        flex: 1,
        html: 'Left Panel, 1/3rd of total size',
        style: 'background-color: #5E99CC;'
      },
      {
        xtype: 'panel',
        flex: 2,
        html: 'Right Panel, 2/3rds of total size',
        style: 'background-color: #759E60;'
      }
    ]
  }
});
