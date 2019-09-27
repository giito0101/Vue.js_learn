var app = new Vue({
	el: '#app',
	data: {
		stock: 10
	},
	methods: {
		//削除ボタンのクリックイベントハンドラ
		onDeleteItem: function(){
			this.stock--;
		}
	}
});

//クリックイベントの使用例
//頻繁にアクセスする要素を事前に取得する
var app2 = document.querySelector('#app2');
var btn = app2.querySelector('.btn');
var num = app2.querySelector('.num');

//在庫数の初期化
var stock = 10;

//ボタンにイベントハンドラを割り当てる
btn.addEventListener('click', onDeleteItem);

//削除ボタン
function onDeleteItem() {
	stock--;	//在庫数を減らす
	updateStock();	//表示を更新する
}

//在庫数の表示を更新するメソッド
function updateStock() {
	if(stock >=1){
		num.textContent = '残り' + stock + '個';
	} else {
		app2.removeChild(btn);	//ボタンを削除する
		num.textContent = '在庫切れ'
	}
}

//在庫数の初期値を表示する
updateStock();

//resiezeイベントのハンドリング
var app3 = new Vue({
	el: '#app3',
	data: {
		//ウィンドウサイズ
		width: window.innerWidth,
		height: window.innerHeight
	},
	created:function(){
		//イベントハンドラを登録
		addEventListener('resize', this.resizeHandler);
	},
	beforeDestroy: function(){
		//イベントハンドラを解除
		removeEventListener('resize', this.resizeHandler);
	},
	methods: {
		//イベントハンドラ
		resizeHandler: function($event) {
			//現在のウィンドウサイズでプロパティを更新
			this.width = $event.target.innerWidth;
			this.height = $event.target.innerHeight;
		}
	}
});

//イベントハンドラが受け取る引数
var app4 = new Vue({
	el: '#app4',
	data: {
		point: {x:0, y:0}
	},
	created: function(){
		//イベントハンドラを登録
		addEventListener('mousemove', this.mousemoveHandler);
	},
	beforeDestroy: function() {
		//イベントハンドラを解除
		removeEventListener('mousemove', this.mousemoveHandler);
	},
	methods: {
		//mousemoveイベントハンドラ
		mousemoveHandler: function($event) {
			console.log($event);
			this.point.x = $event.clientX;
			this.point.y = $event.clientY;
		}
	}
})