//セール対象
document.querySelectorAll("input[type='checkbox']")[0].addEventListener('change', function () {
    if(document.querySelectorAll("input[type='checkbox']")[0].checked == true) {
        document.querySelectorAll('.item').forEach((itemElement) => {
            status = itemElement.querySelector('.status');
            if (status == 'null') {
                console.log(1111);
                itemElement.setAttribute('style', 'display:none;');
            }
        });
    } else if(document.querySelectorAll("input[type='checkbox']")[0].checked == false){
        document.querySelectorAll('.item').forEach((itemElement) => {
            status = itemElement.querySelector('.status');
            if (status == 'null') {
                itemElement.removeAttribute('style');
            }
        });
    }
}
);

//送料無料
document.querySelectorAll("input[type='checkbox']")[1].addEventListener('change', function () {
    if(document.querySelectorAll("input[type='checkbox']")[1].checked == true) {
        document.querySelectorAll('.item').forEach((itemElement) => {
            itemElement.querySelectorAll('.shipping-fee').forEach((shippingFeeElement) => {
                if (shippingFeeElement.textContent != '送料無料') {
                    itemElement.setAttribute('style', 'display:none;');
                }
            });
        });
    } else if(document.querySelectorAll("input[type='checkbox']")[1].checked == false){
        document.querySelectorAll('.item').forEach((itemElement) => {
            itemElement.querySelectorAll('.shipping-fee').forEach((shippingFeeElement) => {
                if (shippingFeeElement.textContent != '送料無料') {
                    itemElement.removeAttribute('style');
                }
            });
        });
    }
}
);

//並び替え
document.addEventListener('change', sortCheck);

function sortCheck() {
    priceSpanElement = document.querySelectorAll('.item');
    //全アイテムを一旦削除する
    listElement = document.querySelector('.list');
    while(listElement.firstChild) {
        listElement.removeChild(listElement.firstChild);
    }

    if(document.querySelectorAll('.sort option:checked')[0].textContent == '標準') {
        //標準で表示する
        priceSpanArrayOg = new Array();
        for (let index = 0; index < priceSpanElement.length; index++) {
            priceSpanArrayOg.push(priceSpanElement[index]);
        }
        for (let index = 0; index < priceSpanArrayOg.length; index++) {
            element = priceSpanArrayOg[index];
            listElement.appendChild(element);
        }
    } else if(document.querySelectorAll('.sort option:checked')[0].textContent == '価格が安い順'){
        //最安値順に表示する
        priceSpanArray = new Array();
        for (let index = 0; index < priceSpanElement.length; index++) {
            priceSpanArray.push(priceSpanElement[index]);
        }
        priceSpanArray.sort(function(a,b){
            aValue = parseInt(a.querySelector('.price span').textContent.replace(',',''));
            bValue = parseInt(b.querySelector('.price span').textContent.replace(',',''));
            return aValue-bValue;
        });
        for (let index = 0; index < priceSpanArray.length; index++) {
            element = priceSpanArray[index];
            listElement.appendChild(element);
        }
    }
}