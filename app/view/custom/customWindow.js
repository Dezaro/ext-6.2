
Ext.define('ExtSix1.view.custom.customWindow', {
  extend: 'Ext.window.Window',
  title: 'New Window!',
  constrain: true,
  closable: true,
  height: 300,
  width: 500,
  modal: false,
  initComponent: function() {
    this.callParent();
    this.activeTabID = Ext.getCmp('tabs12').getActiveTab().id;
    this.renderTo = this.activeTabID;
    this.activeTab = Ext.getCmp(this.activeTabID);
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
  removeMask: function() {
    this.activeTab.el.unmask();
  },
  listeners: {
    close: function() {
      this.removeMask();
    }
  }
});