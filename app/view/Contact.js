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
        handler: function() {
          this.up('formpanel').submit();
        }
      }
    ]
  }
});
