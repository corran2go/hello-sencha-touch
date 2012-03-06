Ext.define('App.view.Layout', {
  extend: 'Ext.Panel',
  xtype: 'layoutview',

  config: {
    title: 'Layout Test',
    iconCls: 'organize',

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
