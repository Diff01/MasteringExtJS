
Ext.define('Packt.view.locale.TranslationController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.translation',

	onMenuItemClick: function(item, e, options){
		var menu = this.getView(); //#1

		menu.setIconCls(item.iconCls);	//#2
		menu.setText(item.text);		//#3

		localStorage.setItem("user-lang", item.iconCls);	//#4

		window.location.reload();							//#5
	},

	init: function(){
		var lang = localStorage ? (localStorage.getItem('user-lang') || 'en') : 'en';
		var button = this.getView();

		button.setIconCls(lang);	//##1

		if (lang == 'en')			//##2
		{
			button.setText('English');
		} else if (lang == 'es')
		{
			button.setText('Español');
		} else {
			button.setText('Português');
		}
	}
});