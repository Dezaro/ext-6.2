
//Ext.define('ExtSix1.view.custom.customMsgBox', {
//  extend: 'Object',
//  constructor: function(config) {
//    this.config = config;
//    this.activeTabID = Ext.getCmp('tabs12').getActiveTab().id;
//    this.activeTab = Ext.getCmp(this.activeTabID);
//    var org_fn = this.config.fn;
//    var activeTabFn = this.activeTab;
//    this.config.fn = function(btn, text, ob) {
//      activeTabFn.el.unmask();
//      if(typeof org_fn !== 'undefined') {
//        org_fn(btn, text, ob);
//      }
//    };
//  },
//  show: function() {
//    this.activeTab.el.mask();
//    this.msg = Ext.create('Ext.window.MessageBox', {
//      constrain: true,
//      renderTo: this.activeTabID
//    });
//    this.msg.show(this.config);
//  },
//  hide: function() {
//    this.activeTab.el.unmask();
//    this.msg.hide();
//  }
//});

Ext.define('ExtSix1.view.custom.customMsgBox', {
  extend: 'Ext.window.MessageBox',
  constrain: true,
  modal: false,
  initComponent: function() {
    this.callParent();
    this.activeTabID = Ext.getCmp('tabs12').getActiveTab().id;
    this.activeTab = Ext.getCmp(this.activeTabID);
    this.renderTo = this.activeTabID;
    this.activeTab.el.mask();
    var activeTabFn = this.activeTab;
    var org_fn = this.fn;
    this.fn = function(btn, text, ob) {
      activeTabFn.el.unmask();
      if(typeof org_fn !== 'undefined') {
        org_fn(btn, text, ob);
      }
    };
  },
  listeners: {
    close: function() {
      this.removeMask();
    }
  }
});