Ext.define('MyMessageBox', {
  override: 'Ext.window.MessageBox',
  modal: false,
  initComponent: function() {
    console.log(this.cfg);
    this.callParent();
    this.constrain = true;
    this.constrainTo = 'tab01';
    this.floating = true;
//    this.renderTo = 'tab01';//Ext.getCmp('tabs12').getActiveTab().id;
  }
//  show: function() {
//    console.log("asdasdas");
//    this.renderTo = 'tab01';
//    this.callParent();
//  }
}, function() {
  Ext.MessageBox = Ext.Msg = new this();
});

Ext.define('ExtSix1.view.item.TabPanel', {
  id: 'tabs12',
  extend: 'Ext.TabPanel',
  alias: 'widget.itemShow',
//  plugins: Ext.create('Ext.ux.TabReorderer'),
//  requires: [
//    'Ext.ux.TabReorderer'
//  ],
  plugins: [
    //'tabreorderer',
    'responsive'
  ],
//  responsiveConfig: {
//    'width < 800': {
//      tabPosition: 'left'
//    },
//    'width > 800': {
//      tabPosition: 'top'
//    }
//  },
  reference: 'tabpanel',
  border: false,
  items: [
    {
      id: 'tab01',
      tbar: [
        {
          xtype: 'button',
          icon: "img/icon/color.png",
          tooltip: 'show',
          handler: function(grid, rowIndex) {
            var k = Ext.Msg.alert('Warrning', 'How the fuck?');
            console.log(k);
          }
        }
      ],
      title: '',
      border: true,
      icon: "img/icon/home1.png",
      glyph: null,
      items: [
        {
          xtype: 'image',
          width: 800,
          height: 450,
          style: 'margin-left: 15%;',
          src: 'img/icon/evropat.jpg'
        }
      ]
    },
    {
      id: 'tab0',
      tbar: [
        {
          xtype: 'button',
          icon: "img/icon/color.png",
          tooltip: 'show',
          handler: function(grid, rowIndex) {

//            var k = new Ext.window.MessageBox({
//              modal: false,
//              title: 'Изтриване',
//              msg: 'Сигурни ли сте, че искате да изтриете запис?',
//              constrain: true,
//              renderTo: Ext.getCmp('tabs12').getActiveTab().id
//            });
//            k.show();
//            console.log(k);
//            var msgBox = Ext.create('ExtSix1.view.custom.customMsgBox', {
//              title: 'Изтриване',
//              msg: 'Сигурни ли сте, че искате да изтриете запис?',
////              buttonText: {
////                yes: '<span style="color: #083772"><b>Да</b></span>',
////                no: '<span style="color: #083772"><b>Не</b></span>'
////              },
////              fn: function(btn, text, ob) {
////                if(btn === 'yes') {
////                  console.log('TEst1w!');
////                }
////              },
////              icon: Ext.MessageBox.QUESTION
//            });

//            var test = Ext.create('ExtSix1.view.custom.customWindow', {
//              title: 'Colors',
//              width: 200,
//              alwaysOnTop: true,
//              height: 200,
//              fn: function(btn, text, ob) {
//                console.log('TEst1w!');
//              },
//              items: [Ext.create('Ext.picker.Color', {
//                  value: '993300', // initial selected color
//                  renderTo: Ext.getBody(),
//                  listeners: {
//                    select: function(picker, selColor) {
//                      alert(selColor);
//                    }
//                  }
//                })]
//            });
//            test.show();
          }
        }
      ],
      title: '',
      border: true,
      icon: "img/icon/home1.png",
      glyph: null,
      items: [
        {
          xtype: 'image',
          width: 800,
          height: 450,
          style: 'margin-left: 15%;',
          src: 'img/icon/evropat.jpg'
        }
      ]
    }
  ]
});