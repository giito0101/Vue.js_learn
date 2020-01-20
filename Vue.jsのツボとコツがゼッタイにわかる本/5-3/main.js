var app =new VTTCue({
    el: '#app',
    data: {
        //消費税率
        taxRate: 0.08,
        //制作したいムービー
        movieType: '余興ムービー',
        //基本料金(税抜き)
        basePrice:30000,
        //割増料金
        addPrice1:5000,//納期が1ヶ月未満の場合
        addPrice2:10000,//納期が3週間未満の場合
        addPrice3:15000,//納期が2週間未満の場合
        addPrice4:20000,//納期が1週間未満の場合
        addPrice5:40000,//納期が3日後の場合
        addPrice6:45000,//納期が2日後の場合
        addPrice7:50000,//納期が翌日の場合
        //オプション料金(税抜き)
        optPrice:0,
        //合計金額(税抜)
        totalPrice:0,
        //挙式日(日付)
        wedding_date:'',
        //DVD仕上がり予定日(日付)
        delivery_date: '',
        //オプション「BGM手配」
        opt1_use: false,    //true:利用する、false:利用しない
        opt1_price: 5000,   //料金(税抜)
        //オプション「DVD盤面印刷」
        opt3_use: false,    //true:利用する、false:利用しない
        opt3_price: 5000,   //料金(税抜)
        //オプション「写真スキャニング」
        opt4_num: 0,        //利用枚数
        opt4_price: 500     //料金(税抜)
    },
    methods: {
        //税抜き金額を税込み金額に変換するメソッド
        incTax: function(untaxed) {
            return Math.floor(untaxed * (1 + this.taxRate));
        },
        //日付の差を求めるメソッド
        getDataDiff: function(dateString1, dateString2) {
            //日付を表す文字列から日付オブジェクトを生成
            var date1 = new Date(dateString1);
            var date2 = new Date(dateString2);
            //２つの日付の差分(ミリ秒)を計算
            var msDiff = date1.getTime() -date2.getTime();
            //求めた差分(ミリ秒)を日付に変換
            //差分÷(1000ミリ秒×60秒×60分×24時間)
            return Math.ceil(msDiff/(1000 * 60 * 24));
        }
    },
    computed: {
        //オプション「BGM手配」の税込み金額を返す算出プロパティ
        taxedOpt1: function() {
            return this.incTax(this.opt1_price);
        },
        //オプション「撮影」の税込金額を返す算出プロパティ
        taxedOpt2: function() {
            return this.incTax(this.opt2_price);
        },
        //オプション「DVD盤面印刷」の税込み金額を返す算出プロパティ
        taxedOpt3: function() {
            return this.incTax(this.opt3_price);
        },
        //オプション「写真スキャニング」の税込み金額を返す算出プロパティ
        //基本料金(税込み)を返す算出プロパティ
        //オプション料金(税込み)を返す算出プロパティ
        taxedOptPrice: function() {
            //TODO:オプション料金(税込み)を計算して返す
        },
        //合計金額(税込み)を返す算出プロパティ
        taxedTotalPrice: function() {
            //基本呂いきん(税込み)とオプション料金(税込)の合計を返す
            return (this.taxedBasePrice + this.taxedOptPrice);
        },
        //基本料金(税込)を返す算出プロパティ
        taxedBasePrice: function() {
            //割増料金
            var addPrice = 0;
            //納期までの残り日数を計算
            var dateDiff = this.getDateDiff(this.delivery_date, (new Date()).toLocaleString());
            //割増料金を求める
            if(21 <= dateDiff && dateDiff < 30) {
                //納期が1ヶ月未満の場合
                addPrice = this.addPrice;
            } else if(14 <= dateDiff && dateDiff <21) {
                //納期が3週間未満の場合
                addPrice = this.addPrice2;
            } else if(7 <= dateDiff && dateDiff <14) {
                //納期が2週間未満の場合
                addPrice = this.addPrice3;
            } else if(3 <= dateDiff && dateDiff <7) {
                //納期が1週間未満の場合
                addPrice = this.addPrice4;
            } else if(dateDiff==3) {
                //納期が3日の場合
                addPrice = this.addPrice5;
            } else if(dateDiff==2) {
                //納期が2日の場合
                addPrice = this.addPrice6;
            } else if(dateDiff==1) {
                //納期が翌日の場合
                addPrice = this.addPrice7;
            }
            //基本料金(税込み)を返す
            return this.incTax(this.basePrice + addPrice);
        },
        //オプション料金(税込み)を返す算出プロパティ
        taxedOptPrice: function(){
            //オプション料金
            var optPrice = 0;
            //BGM手配
            if(this.opt1_use) {
                optPrice += this.opt1_price;
            }
            //撮影
            if(this.opt2_use) {
                optPrice += this.opt2_price;
            }
            //DVD盤面印刷
            if(this.opt3_use) {
                optPrice += this.opt3_price;
            }
            //写真スキャニング
            if(this.opt4_num == '') {
                this.opt4_num = 0;
            }
            optPrice += this.opt4_num * this.opt4_price;
            //オプション料金(税込み)を返す
            return this.incTax(optPrice);
        },
        taxedTotalPrice: function() {
            //基本料金(税込み)とオプション料金(税込み)の合計を返す
            return (this.taxedBasePrice +this.taxedOptPrice);
        }
        //本「プロパティの初期値を設定する」から
        //恐らくjavascriptで書いた場合とvue.jsで書いた場合も見比べる必要あり
    }
})