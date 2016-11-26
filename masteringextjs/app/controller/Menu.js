console.log('---------------------------enter menu----------------------');
Ext.define('Packt.controller.Menu', {
	extend: 'Ext.app.Controller',

	init: function(application){
		this.control({			//#1
			"menutree": {		//#2
				itemclick: this.onTreePanelItemClick	//#3
			},
			"mainmenu": {
				render: this.renderDynamicMenu			//#4
			}
		});
	},
	
	renderDynamicMenu: function(view, options){
		console.log('menu rendered');
		var dynamicMenus = [];	//##1

		view.body.mask('Loading Menus... Please wait...');		//##2

		this.getMenuStore().load(function(root){	//#4
			var menu = Ext.create('Packt.view.menu.Tree', {		//#5
				title: root.get('text'),						//#6
				iconCls: root.get('iconCls')					//#7
			});

			var treeNodeStore = root.items();					//#8
			var nodes = [];
			var item;

			for (var i = 0; i<treeNodesStore.getCount(); i++)	//#9
			{
				item = treeNodeStore.getAt(i);					//#10
				
				nodes.push({		//#11
					text: item.get('text'),
					leaf: true,		//#12
					glyph: item.get('iconCls'),		//#13
					id: item.get('id'),
					className: item.get('className')
				});
			}

			menu.getRootNode().appendChild(nodes);	//#14
			dynamicMenus.push(menu);	//#15
		});
		view.add(dynamicMenus);		//#16
		view.body.unmask();			//#17
	},

	onTreePanelItemClick: function(view, record, item, index, event, options) {
			console.log('onTreePanelItemClick');

		var mainPanel = this.getMainPanel();	//###1
		var newTab = mainPanel.items.findBy(	//###2
			function (tab){
				return tab.title == record.get('text');	//###3
			});
		
		if (!newTab)		//###4
		{
			newTab = mainPanel.add({	//###5
				xtype: record.get('className'),	//###6
				closable: true,		//###7
				glyph: record.get('glyph'),	//###8
				title: record.get('text');	//###9
			});
		}
		mainPanel.setActiveTab(newTab);	//#10
	}
});