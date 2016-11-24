
Ext.define('Packt.store.Menu', {
	extend: 'Ext.data.Store',
	
	requires: [
		'Packt.util.Util'	//#1	
	],
	
	model: 'Packt.model.menu.Accordion',	//#2

	proxy: {
		type: 'ajax',						//#3
		url: 'php/menu/list.php',			//#4

		reader: {			//#5
			type: 'json',
			rootProperty: 'data'
		},
		listeners: {
			exception: function(proxy, response, operation){	//#6
				Packt.util.Util.showErrorMsg(response.responseText);
			}
		}
	}
});