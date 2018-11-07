var arr333=[]	
	var AddressAll = []		
	var Address=[]
	var Address2=[]
	var quc =[]
	$("#dg").datagrid({	
		fitColumns:true,
		width:"100%",
		height:500,
		fit: true
	})
	$("#dg2").datagrid({	
				fitColumns:true,
				width:"100%",
				singleSelect: true,
				height:500,
				fit: true
	})			
	var zuoData=[]
	$(function(){
		$.ajax({
			type:"get",
			url:"data.json",
			async:true,
			success:function(data){
				console.log(data)
			$("#dg").datagrid({			
				onSelect:function(rowIndex,rowData){				
				
												
				},
				onUnselect:function(rowIndex,rowData){
					var row = $('#dg2').datagrid('getRows');
					for (var i=0;i<row.length;i++){
						console.log(rowData.productname)
						if (rowData.productname==row[i].productname){					
							$("#dg2").datagrid('deleteRow',i)
						}						
					}	
				},
				onSelectAll:function(rows){
					console.log(rows)
					var data22=[
					[{"typedd":"CJ00","nameadb":"00zdb"}],
					[{"typedd":"CJ11","nameadb":"11ZDB"},{"typedd":"CJ22","nameadb":"22ZDB"}],
					[{"typedd":"CJ33","nameadb":"33ZDB"},{"typedd":"CJ44","nameadb":"44ZDB"},{"typedd":"CJ55","nameadb":"55ZDB"}],
					[{"typedd":"CJ66","nameadb":"66zdb"}]	
					]
					$("#dg2").datagrid('loadData',rows)
					var rows2 = $('#dg2').datagrid('getRows');
					console.log(rows2)
					var arr=[]
					var arrarr=[]
					var all=[]
					var all2=[]
					var dg=[]
					var dgzdb=[]
					var dg2=[]
					var dg2zdb=[]
					var dg3=[]
					var nameArr=[]
					for (var i=0;i<rows2.length;i++){
						$("#dg2").datagrid('beginEdit', i);
						for (var dd=0;dd<data22[i].length;dd++){
							data22[i][dd].index=i
						}
						
						
						if (data22[i].length==1){
							all.push([{"value":data22[i][0].typedd,"text":data22[i][0].typedd},data22[i][0].index])
							all2.push([{"value":data22[i][0].nameadb,"text":data22[i][0].nameadb},data22[i][0].index])
						}
						if (data22[i].length==2){
							for (var q=0;q<data22[i].length;q++){
								var objs={
									"value":data22[i][q].typedd,
									"text":data22[i][q].typedd,
									"index":data22[i][q].index
								}
								var objszdb={
									"value":data22[i][q].nameadb,
									"text":data22[i][q].nameadb,
									"index":data22[i][q].index
								}
								dg.push(objs)
								dgzdb.push(objszdb)
								dg.push(data22[i][0].index)
								dgzdb.push(data22[i][0].index)
							}		
						}
						if (data22[i].length==3){
							console.log("会走这里")
							for (var w=0;w<data22[i].length;w++){
								var objs2={
									"value":data22[i][w].typedd,
									"text":data22[i][w].typedd,
									"index":data22[i][w].index
								}
								var objs2zdb={
									"value":data22[i][w].nameadb,
									"text":data22[i][w].nameadb,
									"index":data22[i][w].index
								}
								dg2.push(objs2)
								dg2zdb.push(objs2zdb)
								dg2.push(data22[i][0].index)
								dg2zdb.push(data22[i][0].index)
							}		
						}		
					}
					all.push(dg)
					all.push(dg2)	
					all2.push(dgzdb)
					all2.push(dg2zdb)
					console.log(all)
					console.log(all2)
					//排序
					var qqq=all.sort(function(x, y){
					    return x[1] - y[1];
					});
					var qqq2=all2.sort(function(x, y){
					    return x[1] - y[1];
					});
					console.log(qqq)
					console.log(qqq2)
					for (var m=0;m<rows2.length;m++){
						var aa = $('#dg2').datagrid('getEditor', {index : m,field : 'unitcost'})
						if (aa){
							$(aa.target).combobox('loadData',qqq[m]);
						}
					}
					for (var mm=0;mm<rows2.length;mm++){
						var aa = $('#dg2').datagrid('getEditor', {index : mm,field : 'name'})
						if (aa){
							$(aa.target).combobox('loadData',qqq2[mm]);
						}
					}
				
				}
			})
			$("#dg").datagrid('loadData',data)
				
			}
		});
	})
	
		$("#dg2").datagrid({	
				onClickRow: function () {
			//	    $('#dg2').datagrid('clearSelections');
				},
				onClickCell:onClickCell,
				onAfterEdit: function (rowIndex, rowData, changes) { //编辑模式结束执行
					//可执行修改操作也可加入数组 或作记录
			        editRow = undefined;  
			    }, 
				columns: [[
                    {field: 'age',  title: 'age',width: 100,editor:{
	                       	type:'numberbox'
	                       
                       },
                    },
                    {field: 'name',title: '战斗部',width: 100,
                     editor:{
	                       	type:'combobox',
	                       	options:{
	                       		precision:1,data: Address2,valueField: "value",
	                       		textField: "text",
	                       		onChange:function(v,x){
	                       			var row = $('#dg2').datagrid('getSelected');
						 			console.log(row)
						 			console.log(x)
						 			var rindex = $('#dg2').datagrid('getRowIndex', row);//获取所选行index
						 		
	                       		
	                       		
	                       		}
	                       	}
                       },        
                    },
                    {field: 'productname', title: 'productname',width: 100 },
	
                    {
                        field: 'unitcost',
                        title: '蛋形', 
                         width: 100,
	                     editor:{
	                       	type:'combobox',
	                       	options:{
	                       		precision:1,
	                       		data: Address,
						 		valueField: "value", 
						 		textField: "text",
						 		onSelect:function(data){
					
						 		}
	                       	}
                       }, 
                       
                 
                    }
                ]]
	})
	

	
	
	
	
	
	
	
	$(".btn").click(function(){
		accept()
	})
	var editIndex = undefined;
		function endEditing(){
			//如果当前没有编辑得行，返回true
			if (editIndex == undefined){return true}
			//validateRow	验证指定的行，有效时返回 true。
			//endEdit	结束对一行进行编辑。
			if ($('#dg2').datagrid('validateRow', editIndex)){
				$('#dg2').datagrid('endEdit', editIndex);
				editIndex = undefined;
				return true;
			} else {
				return false;
			}
		}
		function onClickCell(index, field){
		if (editIndex != undefined) {  
	            $("#dg2").datagrid('endEdit', index);	            
	        }
		}
		function onEndEdit(index, row){
			var ed = $(this).datagrid('getEditor', {
				index: index,
				field: 'name'
			});
			row.name = $(ed.target).combobox('getText');
		}
		function append(){
			if (endEditing()){
				$('#dg2').datagrid('appendRow',{status:'P'});
				editIndex = $('#dg').datagrid('getRows').length-1;
				$('#dg2').datagrid('selectRow', editIndex)
						.datagrid('beginEdit', editIndex);
			}
		}
		function removeit(){
			if (editIndex == undefined){return}
			$('#dg2').datagrid('cancelEdit', editIndex)
					.datagrid('deleteRow', editIndex);
			editIndex = undefined;
		}
		function accept(){
			if (endEditing()){
				$('#dg2').datagrid('acceptChanges');
			}
		}
	
	
	
	
	
	
	
	
	
			/*	console.log(data)
		var row = $('#dg2').datagrid('getSelected'); 
	console.log(row)
	
	console.log(rindex)
	var aa = $('#dg2').datagrid('getEditor', {index : rindex,field : 'unitcost'})

	$(aa.target).combobox('clear');
	var data22=[{"value":"CJ1111","text":"CJ1111"}]
	$(aa.target).combobox('loadData',data22);
	
	*/
	
	
	
	
	/*	 			console.log(data)
						 			var row = $('#dg2').datagrid('getSelected'); 
						 
						 		var rindex = $('#dg2').datagrid('getRowIndex', row);//获取所选行index
						 //		console.log(rindex)
						 		var aa = $('#dg2').datagrid('getEditor', {//根据坐标获取选择后的combobox的tso_value对象
    										index : rindex,//纵坐标
    										field : 'name'//横坐标
    									})
						 		console.log(aa.target)
						 	//	$(aa.target).combobox('clear');
							//	$(aa.target).combobox('loadData', [{"value":"战斗部3","text":"战斗部3"}]);
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//去重
	
	function removeDuplicatedItem(arr) {
	     for(var i = 0; i < arr.length-1; i++){
	         for(var j = i+1; j < arr.length; j++){
	             if(arr[i]==arr[j]){
	 			
	               arr.splice(j,1);//console.log(arr[j]);
	                j--;
	            }
	        }
	    }
	     console.log(arr333)
	    return arr;
	 }
	
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	//缩放功能
	/*$(function() {
			function zoomImg(o) {
				var zoom = parseInt(o.style.zoom, 10) || 100;
				zoom += event.wheelDelta / 2;
				//可适合修改  
				console.log($(".vvv").width())
				if (zoom > 0 && zoom<300) 
				o.style.zoom = zoom + '%';	
			} 
			$(document).ready(function() {
				$(".vvv").bind("mousewheel",  function() { 
					zoomImg(this);   return false; 
				});
			});
	})*/


				

	
	
	
	
	
	
	
	
	function keysrt(key,desc) {
	  return function(a,b){
	    return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
	  }
	}
	var ary=[
		{id:1,name:"b"},
		{id:2,name:"c"},
		{id:2,name:"b"},
		{id:2,name:"d"},
		{id:2,name:"e"},
		{id:2,name:"d"}
	];
	console.log(ary)
	ary.sort(keysrt('name',true));
	console.log(ary)
	