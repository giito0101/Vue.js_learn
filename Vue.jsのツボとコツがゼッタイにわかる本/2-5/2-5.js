//グローバルスコープにフィルターを登録する
Vue.filter('number_format', function(val){
	return val.toLocaleString();
});

var app = new Vue({
	el: '#app',
	data: {
		price: 1000
	}
})

//複数のフィルターをつなげる
var app2 = new Vue({
	el: '#app2',
	data: {
		price:1000
	},
	filters: {
		//金額を３桁カンマ編集するフィルター
		number_format: function(val) {
			return val.toLocaleString();
		}
	}
	//金額の後ろに単位をつけるフィルター
	unit: function(val) {
		return val + '円';
	}
})
