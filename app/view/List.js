Ext.define('App.view.List', {
  extend: 'Ext.List',
  xtype: 'listview',

  config: {
    title: 'List Test',
    iconCls: 'trash',

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

    listeners: {
      select: function(view, record) {
        Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
      }
    }
  }
});
