<?php
//定数定義：データベースの識別情報、ユーザー名、パスワード
define('DSN', 'mysql:host=localhost;dbname=sample_shop');
define('DB_USER', 'root');
define('DB_PASSWORD', '');

//エラー通知レベル設定
error_reporting(E_ALL & ~E_NOTICE);

//データベースに接続する
$pdo = new PDO(DSN, DB_USER, DB_PASSWORD);

//商品リストを取得する
$stmt = $pdo->prepare("SELECT * FROM products");

$stmt->execute();

//商品レコードをPHPの配列に積み込む
$products = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $products[] = array(
        'id'    => (int)$row['id'],
        'name'  => $row['name'],
        'price' => (int)$row['price'],
        'image' => $row['image'],
        'delv'  => (int)$row['delv'],
        'isSale'=> (boolean)$row['isSale']
    );
}

//PHPの配列をJSONに変換
$json = json_encode($products, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);

//JSONを出力
header("Content-Type: application/json");
echo $json;