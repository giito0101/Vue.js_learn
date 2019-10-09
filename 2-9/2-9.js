//単純なフォーム入力バインディング
var app = new Vue({
	el:'#app',
	data:{
		//初期値は当年
		year:(new Date()).getFullYear()
	}
});

//入力文字をDOMへリアルタイムに反映する
var app2 = new Vue({
	el: '#app2',
	data:{
		//初期値は当年
		year:(new Date()).getFullYear()
	},
	methods:{
		//「年」のinputイベントハンドラ
		yearInputHandler:function($event) {
			//直接データを更新する
			this.year = $event.target.value;
		}
	}
});

//一方通行のバインディング
var app3 = new Vue({
	el:'#app3',
	data:{
		message:'これは一方通行のバインドです。'
	}
})

//チェックボックスに文字列をバインドする
var app4 = new Vue({
	el:'#app4',
	data:{
		answer:'はい'
	}
});

//グループ化したチェックボックスにバインドする
var app5 = new Vue({
	el: '#app5',
	data: {
		answer: new Array()
	},
	computed: {
		//チェック内容を連結した文字列を返す算出プロパティ
		selection: function() {
			return this.answer.join();
		}
	}
});

//ラジオボタンにバインドする
var app = new Vue({
	el: '#app6',
	data: {
		answer: '選択してください'
	}
});

//単一選択のセレクトボックスにバインドする
var app7 = new Vue({
	el: '#app7',
	data: {
		answer: ''
	}
});


//複数選択のセレクトボックスにバインドする
var app = new Vue({
	el :'#app8',
	data : {
		category: []
	},
	computed: {
		//選択された分類を返す算出プロパティ
		seletectedCategory: function(){
			//1件以上選択されている場合、選択された値を連結した文字列を返す
			return this.category.length >=1 ? this.category.join():'';
		}
	}
});

//セレクトボックスの選択肢にバインドする
var app = new Vue({
	el: '#app9',
	data: {
		//回答内容(選択された値)
		answer: '',
		//選択肢に表示する配列データ
		options: [
			{code: 'ans1', label: '初めて'},
			{code: 'ans2', label: '週1回以上'},
			{code: 'ans3', label: '月2回以上'},
			{code: 'ans4', label: '半年に1回'}
		]
	}
})

//カレンダーにバインドする
var app = new Vue({
	el: '#app10',
	data:{
		arrival_date: null
	},
	created: function(){
		//初期値を設定する
		this.arrival_date = this.formatDate(new Date());
	},
	methods:{
		//日付を　YYYY-MM-DDに整形するメソッド
		formatDate: function(dt) {
			var y = dt.getFullYear();
			var m = ('00' +  (dt.getMonth() + 1)).slice(-2);
			var d = ('00' + dt.getDate()).slice(-2);
			var result = y + '-' + m + '-' + d;
			return result;
		}
	}
})