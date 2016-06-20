/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtSix1.view.main.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',
  init: function() {
    this.callParent();
    this.logArray = JSON.parse(localStorage.getItem('logArray'));
    this.lookupReference('officeLabel').setText(this.logArray.office.toUpperCase());
    this.lookupReference('userLabel').setText(this.logArray.userName);
    this.lookupReference('userGroupLabel').setText(this.logArray.userGroup);
  },
  onClickButton: function() {
    localStorage.removeItem('logArray');
    this.getView().destroy();
    Ext.widget('login');
    Ext.getCmp('uNameLog').focus(true, 100);
  },
  onChangeOfficeClick: function() {
    this.office = 'Пловдив';
    this.lookupReference('officeLabel').setText(this.office.toUpperCase());
  },
  onInfoClick: function() {
    this.lookupReference('infoWin').show();
  },
  onChangePassClick: function() {
    this.lookupReference('changePass').show();
  },
  onConfirmClick: function() {
    this.lookupReference('changePass').hide();
  },
  onCancelClick: function() {
    this.lookupReference('changePass').hide();
  }
});
