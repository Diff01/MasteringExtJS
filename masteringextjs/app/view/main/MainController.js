/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Packet.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Packt.util.Util'
    ],

    alias: 'controller.main',

	onLogout: function(button, e, options) {
		var me = this;			//#1
		Ext.Ajax.request({
			url: 'php/security/logout.php',	//#2
			scope: me,						//#3
			success: 'onLogoutSuccess',		//#4
			failure: 'onLogoutFailure'		//#5
		});
	},

	onLogoutFailure: function(conn, response, options, eOpts) {
		Packt.util.Util.showErrorMsg(conn.responseText);
	},

	onLogoutSuccess: function(conn, response, options, eOpts) {  //##1
		var result = Packt.util.Util.decodeJSON(conn.responseText);

		if (result.success)		//##2
		{
			this.getView().destroy();	//##3
			window.location.reload();	//##4
		} else {
			Packt.util.Util.showErrorMsg(result.msg);	//##5
		}
	}
});
