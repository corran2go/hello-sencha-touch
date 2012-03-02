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
        handler: function() {
          this.up('mynavigationview').push({
            title: '1st view',
            items: {
              xtype: 'button',
              text: 'Push 2nd view',
              handler: function() {
                this.up('mynavigationview').push({
                  title: '2nd view',
                  items: {
                    xtype: 'button',
                    text: 'Pop this view',
                    handler: function() {
                      this.up('mynavigationview').pop();
                    }
                  }
                });
              }
            }
          });
        }
      }
    }
  }
});
