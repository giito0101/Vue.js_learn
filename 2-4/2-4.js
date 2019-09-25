//テキストの入力
var app = new Vue({
    el: '#app',
    data: {
        message: 'こんにちは！'
    }
});

//式を使った出力
var app2 = new Vue({
	el: '#app2',
	data: {
		message_en: 'Hello',
		message_ja: 'こんにちは',
		lang: 'ja'
	}
})

//属性にバインドする
var app3 = new Vue({
	el: '#app3',
	data: {
		message: 'こんにちは!'
	}
});

//スタイル属性にバインドする
var app4 = new Vue({
	el: '#app4',
	data: {
		pSize: '40px',
		pColor: 'red',
	}
});

//クラス属性にバインドする
var app5 = new Vue({
	el: '#app5',
	data: {
		isCapital: true
	}
});