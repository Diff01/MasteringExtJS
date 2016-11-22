
Ext.define('Packt.view.main.Footer', {
	extend: 'Ext.container.Container',      //#1
	xtype: 'appfooter',						//#2

	cls: 'app-footer',                      //#3

	height: 30,

	layout: 'center',						//#4

	items: [{
		xtype: 'component',				 //#6
		width:350,						 //#7
		componentCls: 'app-footer-title',				 //#8
		bind: {
			html: '{footer}'							 //#9
		}
	}]
});