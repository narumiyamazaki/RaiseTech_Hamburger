/*pc以外の時はdisplay noneにしておき、PCになった時は表示させる。
//tb 768px pc 1024px

//メニューの開閉
//メニューの開閉は、breakpoinをmixinで定義しているので、include使えばjsなくても実装できそうな気がするため、コメントアウトする
$(window).resize(function(){
let x = $(window).width();
let y = 1024;
//windowサイズがpcサイズの1024px以上になったら
if (x >= y) {
$('.p__nav--body').addClass('p__nav--bodyopen').removeClass('p__nav--body');
//windowサイズがpcサイズの1024未満になったら
}else if(x < y){
//class名がp__nav--bodyopenの時、windwサイズが1024px未満になったらp__nav--bodyに変更する
$('.p__nav--bodyopen').addClass('p__nav--body').removeClass('p__nav--bodyopen');
}
})
else;
});

*/
