/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
 requires: [
	'Packt.view.menu.Accordion'
 ],

Ext.define('Packet.view.main.Main', {
    extend: 'Ext.container.Container',

	plugins: 'viewport',

    xtype: 'app-main',
   
	requires: [			//##1
		'Packt.view.main.Footer',
		'Packt.view.main.Header',
		'Packt.view.main.Pannel'//,
		//'Packt.view.main.MainController',
		//'Packt.view.main.MainModel'
	],

	controller: 'main',		//##2

	viewModel: {
		type: 'main'			//##3
	},
	
	layout: {
		type: 'border'
	},

    items: [{
        region: 'center',    //#1
		xtype: 'mainpanel'
    },{
        xtype: 'appheader',  //#2
        region: 'north'
    },{
		xtype: 'appfooter',  //#3
		region: 'south'
	},{
		//xtype: 'container',  //#4
		xtype: 'mainmenu',
		region: 'west',
		//width: 200,
		//split: true
 	}]
});
