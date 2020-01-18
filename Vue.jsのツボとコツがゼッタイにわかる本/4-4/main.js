//JSONPのURL(サーバーに配置する)
var url='products.js'
//非同期通信でJSONを読み込む
$.ajax({
    url : url,//通信先URL
    type: 'GET',//使用するHTTPメソッド(デフォルトがGETなので省略可能)
    dataType: 'jsonp',//レスポンスデータ
    jsonp: 'callback',//クエリパラメータの名前
    jsonpCallback: 'products'//コールバック関数の名前
})
.done(function(data, textStatus, jqXHR){
    //ここに通信成功時の処理を記述する
    console.log(data);
    console.log('通信が成功しました');
})
.fail(function(jqXHR, textStatus, errorThrown){
    //ここに通信失敗時の処理を記述する
    console.log('通信が失敗しました');
});