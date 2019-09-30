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
var app = new Vue({
	el:'#app3',
	data:{
		message:'これは一方通行のバインドです。'
	}
})