/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('Packet.view.main.MainModel', {		//#1
    extend: 'Ext.app.ViewModel',				//#2

    alias: 'viewmodel.main',					//#3

	
    data: {
        name: 'Packt',		//#4
		appName: 'DVD Rental Store',	//#5
		appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header-logo">',	//#6
		footer: 'Mastering ExtJs book - Loiane Groner - http://packtpub.com'    //#7
    }

    //TODO - add data, formulas and/or methods to support your view
});