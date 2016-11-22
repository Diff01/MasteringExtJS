
Ext.define('Packt.view.locale.TranslationController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.translation',

	onMenuItemClick: function(item, e, options){
		var menu = this.getView(); //#1

		menu.setIconCls(item.iconCls);	//#2
		menu.setText(item.text);		//#3

		localStorage.setItem("user-lang", item.iconCls);	//#4

		window.location.reload();							//#5
	}
});