//ウォッチャの登録
var app = new Vue({
	el: '#app',
	data: {
		message: '',
		stock: 10
	},
	methods: {
		//削除ボタンのクリックイベントハンドラ
		onDeleteItem: function(){
			this.stock--;
		}
	},
	watch: {
		//在庫数が変化したとき呼び出されるハンドラ
		stock: function(newStock, oldStock) {
			if(newStock == 0) {
				this.message = '売り切れ';
			}
		}
	}
});

//算出プロパティとウォッチャの使い分け
var app2 = new Vue({
	el: '#app2',
	data: {
		message: '',
		stock: 10
	},
	methods: {
		//削除ボタンのクリックイベントハンドラ
		onDeleteItem: function() {
			this.stock--;
		}
	},
	computed: {
		//加工したメッセージを返す算出プロパティ
		statusMessage: function(){
			if(this.stock == 0) {
				return '売り切れ';
			}
			return '';
		}
	}
})

//ウォッチャで算出プロパティを監視する
var app3 = new Vue({
	el: '#app3',
	data: {
		message: '',
		stock: 10
	},
	methods: {
		//削除ボタンのクリックイベントハンドラ
		onDeleteItem: function() {
			this.stock--;
		}
	},
	computed: {
		//加工したメッセージを返す算出プロパティ
		statusMessage: function(){
			if(this.stock == 0) {
				return '売り切れ';
			}
			return '';
		}
	},
	watch: {
		//ステータスの変化を関しするウォッチャ
		statusMessage: function(){
			console.log('商品のステータスが変化しました。');
		},
		stock: function(){
			console.log('ストックが変更されました。');
		}
	}
})