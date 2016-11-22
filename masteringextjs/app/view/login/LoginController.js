Ext.define('Packt.view.login.LoginController', { //#1
	extend: 'Ext.app.ViewController',            //#2
	alias: 'controller.login',					 //#3

	requires: [
		'Packt.view.login.CapsLockTooltip',
		'Packt.util.Util',
		'Packt.util.SessionMonitor'
	],

	onTextFieldSpecialKey: function(field, e, options){
		if (e.getKey() == e.ENTER)
		{
			this.doLogin();
		}
	},      //#4
	onTextFieldKeyPress: function(filed, e, options){
		var charCode = e.getCharCode();
		var me = this;

		if ((e.shiftKey && charCode >= 97 && charCode <= 122) ||  //#2
			(!e.shiftKey && charCode >= 65 && charCode <=90))
		{
			if (me.capslockTooltip == undefined)					//#3
			{
				me.capslockTooltip = Ext.widget('capslocktooltip');   //#4
			}
			console.log("before tooltip  show");
			me.capslockTooltip.show();            //#5
			console.log('after tooltip show');
		} else {
			if (me.capslockTooltip != undefined)  //#6
			{
				me.capslockTooltip.hide();		  //#7
			}
		}
	},        //#5
	onButtonClickCancel: function(button, e, options){
		console.log('login cancel');
		this.lookupReference('form').reset();
	},       //#6

	onButtonClickSubmit: function(button, e, options){
		console.log('login submit');
		var me = this;
		if (me.lookupReference('form').isValid())
		{
			console.log('Form valid');
			me.doLogin();
		}
	},       //#7

	doLogin: function(){
		var me = this;
		var	form = me.lookupReference('form');
		console.log('prepare submit');
		this.getView().mask('Authenticating... Please wait...');
		form.submit({
			clientValidation: true,          //#3
			url: 'php/security/login.php',	 //#4
			scope: me,						 //#5
			success: 'onLoginSuccess',   	 //#6
			failure: 'onLoginFailure'        //#7
		});
	},						//#8

	onLoginFailure: function(form, action){
		this.getView().unmask();
		console.log(action);
		var result = Packt.util.Util.decodeJSON(action.response.responseText);

		switch (action.failureType)
		{
		case Ext.form.action.Action.CLIENT_INVALID:  //#5
			Packt.util.Util.showErrorMsg('Form fields may not be submitted with invalid values');
			break;
		case Ext.form.action.Action.CONNECT_FAILURE:  //#6
			Packt.util.Util.showErrorMsg(action.response.responseText);
			break;
		case Ext.form.action.Action.SERVER_INVALID:  //#7
			Packt.util.Util.showErrorMsg(result.msg);
		}
	},   //#9

	onLoginSuccess: function(form, action){
		this.getView().unmask();
		this.getWiew().close();
		Ext.create('Packt.view.main.Main');
		Packt.util.SessionMonitor.start();
	}   //#10
 });