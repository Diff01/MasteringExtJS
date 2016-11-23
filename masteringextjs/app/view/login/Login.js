console.log("prepare to login!----------------------");

Ext.define('Packt.view.login.Login', {
	extend: 'Ext.window.Window',

	xtype: 'login-dialog',
	requires: [
				'Packt.view.login.LoginController',
				'Packt.view.locale.Translation'	
			  ],

	controller: 'login',  //¸ølogin view °ó¶¨ViewController.
	
	autoShow: true,
	height: 170,
	width: 360,
	layout: {
		type: 'fit'
	},
	iconCls: 'fa fa-key fa-lg',
	title: 'login',
	closeAction: 'hide',
	closable: false,
	draggable: false,
	resizable: false,
	
	items: [
	{
		xtype: 'form',            //#14
		reference: 'form',
		bodyPadding: 15,          //#15
		defaults: {
			xtype: 'textfield',
			anchor: '100%',
			labelWidth: 60,
			
			allowBlank: false,
			vtype: 'alphanum',
			minLength: 3,
			msgTarget: 'under',
			listeners: {
				specialKey: 'onTextFieldSpecialKey'
			}
		},
		items: [
		{
			name: 'user',
			fieldLabel: 'user',
			maxLength: 25
		},
		{
			inputType: 'password',
			name: 'password',
			fieldLabel: 'password',
			maxLength: 15,
			
			//custom vtype.
			vtype: 'customPass',
			msgTarget: 'side',
			
			id: 'password',
			enableKeyEvents: true,
			listeners: {
				keypress: 'onTextFieldKeyPress'
			}
		}]
	}],
	
	dockedItems: [
	{
		xtype: 'toolbar',
		dock: 'bottom',
		items: [
			{
				xtype: 'translation',
				width: 155
			},
			{
				xtype: 'tbfill' //#25
			},
			{
				xtype: 'button', //#26
				iconCls: 'fa fa-times fa-lg',
				text: 'cancel',
				listeners: {
					click: 'onButtonClickCancel'
				}
			},
			{
				xtype: 'button', //#27
				formBind: true, //#28
				iconCls: 'fa fa-sign-in fa-lg',
				text: 'submit',
				listeners: {
					click: 'onButtonClickSubmit'
				}
			}
		]
	}]
	
});