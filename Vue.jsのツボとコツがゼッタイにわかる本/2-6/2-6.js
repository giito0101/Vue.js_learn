//算出プロパティとは
var app = new Vue({
	el: '#app',
	data: {
		year: new Date().getFullYear()
	},
	computed: {
		//今年がうるう年かどうかを判定する算出プロパティ
		isUrudoshi: function() {
			//「4で割り切れて100で割り切れない」または「400で割り切れる」場合
			if((this.year%4 == 0) && 
				(this.year%100 != 0) || 
				(this.year%400 == 0)){
				//うるう年
				return true;
			} else {
				//うるう年ではない
				return false;
			}
		}
	}
});

//算出プロパティはキャッシュされる
//app2.show=false; app2.show=true;
var app2 = new Vue({
	el: '#app2',
	data: {
		show: true
	},
	methods: {
		//現在日時を返すメソッド
		now1: function() {
			return (new Date()).toLocaleString();
		}
	},
	computed: {
		//現在日時を返す算出プロパティ
		now2: function() {
			return (new Date()).toLocaleString();
		}
	}
});