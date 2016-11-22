
Ext.define('Packt.view.locale.Translation', {
	extend: 'Ext.button.Split',			//#1
	xtype: 'translation',				//#2
	
	requires: [
		'Packt.view.locale.TranslationController'	
	],

	controller: 'translation',

	menu: {								//#3
		xtype: 'menu',					//#4
		default:{
			listeners: {
				click: 'onMenuItemClick'
			}
		},
		items: [{
			xtype: 'menuitem',			//#5
			iconCls: 'en',
			text: 'English'
		},{
			xtype: 'menuitem',			//#6
			iconCls: 'es',
			text: 'Español'
		},{
			xtype: 'menuitem',			//#7
			iconCls: 'pt_Br',
			text: 'Português'
		}]
	}
});