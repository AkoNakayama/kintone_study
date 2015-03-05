(function () {
	"use strict";
	window.alert("ようこそ！kintone!");
	
	kintone.events.on('app.record.index.show',function(event){

		if (document.getElementById('my_index_button') !== null ){
			return;
		}

		var myIndexButton = document.createElement('button');
		myIndexButton.id = 'my_index_button';
		myIndexButton.innerHTML = '一覧のボタン';
		
		myIndexButton.onclick = function() {
			var myHeaderSpace = kintone.app.getHeaderSpaceElement();
			var myListHeaderDiv = document.createElement('div');
			myListHeaderDiv.style.width = '100%';
			myListHeaderDiv.style.height = '35px';
			myListHeaderDiv.style.textAlign = 'center';
			myListHeaderDiv.style.fontSize = '30px';
			myListHeaderDiv.style.fontWeight = 'bold';
			myListHeaderDiv.style.backgroundColor = '#ffd78c';
			myListHeaderDiv.innerHTML = 'つかれた　がんばれ';

			myHeaderSpace.innerHTML = null;			
			myHeaderSpace.appendChild(myListHeaderDiv);			


		}
		
		kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
	});
	
	kintone.events.on('app.record.detail.show',function(event){
		var updateAt = '';
		if (event) {
			updateAt = event["record"]["editDate"]["value"];
		}
		var mySpaceField = kintone.app.record.getSpaceElement('my_space_field');
		mySpaceField.parentNode.style.width = '400px';
		mySpaceField.innerHTML = updateAt;

	});
	
	kintone.events.on('app.record.create.show',function(event){
		window.alert('レコード作成イベント');
	});
	
	kintone.events.on('app.record.edit.show',function(event){
		window.alert('レコード修正イベント');
	})
	
	kintone.events.on('app.report.show',function(event){
		window.alert('グラフ表示イベント');
	})
	
})();
