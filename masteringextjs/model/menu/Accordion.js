Ext.define('Packt.model.menu.Accordion', {
	extend: 'Ext.data.Model',

	requires: [
		'Packt.model.menu.TreeNode'	
	],

	fields: [		//#1
	{name: 'id', type: 'int'},	//#2
	{name: 'text'},
	{name: 'iconCls'}
	],
	
	hasMany: {
		model: 'Packt.model.menu.TreeNode',
		foreignKey: 'parent_id',
		name: 'items'	//#1
	}
});