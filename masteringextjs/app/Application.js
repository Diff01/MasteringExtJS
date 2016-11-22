/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

function loadLocale(){
	var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en';
	console.log('lang--------------------------'+lang);
	var file = Ext.util.Format.format("../resources/locale/{0}.js", lang);
	console.log("in function loadLocale!");
	//Ext.Loader.require({url: file, onError: function(){
	//console.log('loadScript run success!');
	//	alert('Error loading locale file. Please contact system administrator.');
	//}});
	//Ext.require( file,function(){alert(123)});
	Ext.Loader.setConfig({  
		enabled:true,  
		paths:{
			ppd:file  
	}}); 
   // console.log(translations);
	console.log(file);
}
	
	loadLocale(); //##1
	console.log("after function loadLocale!");

Ext.define('Packet.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Packet',

    stores: [
        // TODO: add global / shared stores here
    ],
    
	view: [
		'login.Login'	
	],

    launch: function () {
        // TODO - Launch the application
		//Fade out the body mask
		Ext.tip.QuickTipManager.init();
		//Fade out the icon and message
	},
    
	init: function () {
		Ext.create('Packt.view.login.Login');
	}
});
  