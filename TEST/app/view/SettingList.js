Ext.define('TEST.view.SettingList',{
	extend:'Ext.Panel',
	xtype:'SettingList',
	
	config:{
		Title:'SettingList',
		iconCls:'star',
		scrollable:false,
		
		items: [
                {
                	xtype: 'button',
                   text: '개발자 도와주기',
                   id: 'btnList',
                   ui: 'plain', 
                   
                 },
                 {
                 	xtype: 'button',
                    text: '정보 ',
                    id: 'btnList',
                    ui: 'plain', 
                    
                  },
                  {
                  	xtype: 'button',
                     text: '암호 재설정',
                     id: 'btnList',
                     ui: 'plain', 
                     
                   },
                   
                ]
		
		
		
	}
	
});