(function() {
	"use strict";
	
	kintone.events.on('app.record.detail.show',function(event){
		var myHeaderMenuSpace = kintone.app.record.getHeaderMenuSpaceElement();
		var startButton = document.createElement('button');
		startButton.id = 'janken_start_button';
		startButton.innerHTML = 'じゃんけんに挑戦';
		myHeaderMenuSpace.innerHTML = '';
		
		var jankenItems = new Array("ぐー","ちょき","ぱー");
		startButton.onclick = function() {
			var jankenSpace = kintone.app.record.getSpaceElement('my_space_field');
			jankenSpace.innerHTML = 'さいしょはぐー<br>じゃんけん…</br>';
			jankenSpace.style.widht = '400px';
			jankenSpace.parentNode.style.width = '400px';
			
			for (var i = 0; i < jankenItems.length; i++) {
				var tmpButton = document.createElement('button');
				tmpButton.id = 'j_button' + i;
				tmpButton.innerHTML = jankenItems[i] + '!!';
				tmpButton.onclick = function(){
					var you = this.id.replace('j_button','');
					var com = (you + 2) % jankenItems.length;
					jankenSpace.innerHTML = "あなた：" + jankenItems[you] + "<br>じゃんけんキング：" + jankenItems[com] + "<br>もっかいやる？";
				}
				jankenSpace.appendChild(tmpButton);
			}			

		}
		myHeaderMenuSpace.appendChild(startButton);
	});
})()