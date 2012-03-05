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
