
Ext.define('Packt.view.menu.Accordion', {
	extend: 'Ext.panel.Panel',
	xtype: 'mainmenu',	//#1

	width: 250,			//#2
	layout: {
		type: 'accordion',		//#3
		multi: true				//#4
	},
	collapsible: true,			//#3
	split: true,				//#4

	iconCls: 'fa fa-sitemap fa-lg',	//#5
	title: 'menu'					//#6

});