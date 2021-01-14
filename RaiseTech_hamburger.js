//pc以外の時はdisplay noneにしておき、PCになった時は表示させる。
//tb 768px pc 1024px

//メニューの開閉
<script type="text/javascript">
$(window).resize(function(){
var x = $(window).width();
var y = 1024;
//windowサイズがpcサイズの1024px以上になったら
if (x >= y) {
$('p__nav--body').addClass('p__nav--bodyopen').removeClass('p__nav--body');
}else{
$('p__nav--body').addClass('p__nav--body').removeClass('p__nav--body');
}
});
</script>
