
//windowサイズによってheader画像を切り替える。

//const { on } = require("gulp");??

$(function() {
    // 置換の対象とするclass属性。
    var $elem = $('.p__header--image--js--iswitch');
    // 置換の対象とするsrc属性の末尾の文字列。
    var sp = '_sp';
    var tbpc = '_tbpc';
    // 画像を切り替えるウィンドウサイズ。
    var replaceWidth = 768;
  
    function imageSwitch() {
      // ウィンドウサイズを取得する。
      var windowWidth = parseInt(window.innerWidth);
  
      // ページ内にあるすべての`.js-image-switch`に適応される。
      $elem.each(function() {
        var $this = $(this);
        // ウィンドウサイズが768px以上であれば_spを_pcに置換する。
        if(windowWidth >= replaceWidth) {
          $this.attr('src', $this.attr('src').replace(sp, tbpc));
  
        // ウィンドウサイズが768px未満であれば_pcを_spに置換する。
        } else {
          $this.attr('src', $this.attr('src').replace(tbpc, sp));
        }
      });
    }
    imageSwitch();
  
    // 動的なリサイズは操作後0.1秒経ってから処理を実行する。
    var resizeTimer;
    $(window).on('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        imageSwitch();
      }, 100);
    });
  });

  //menuの開閉
  $(function( ) {
    $(".p__header--menu").on("click",function() {
    $(".p__nav").addClass("p__nav-is-open").removeClass("p__nav");
    $(".p__sidemenu--backgroundcolor").addClass("p__sidemenu--backgroundcolor-is-active").removeClass("p__sidemenu--backgroundcolor");
    $(".p__nav--container").addClass("p__nav--container-is-open").removeClass("p__nav--container");
    });
    $(".p__nav--btn").on("click",function() {
    $(".p__nav-is-open").addClass("p__nav").removeClass("p__nav-is-open");
    $(".p__sidemenu--backgroundcolor-is-active").addClass("p__sidemenu--backgroundcolor").removeClass("p__sidemenu--backgroundcolor-is-active");
    $(".p__nav--container-is-open").addClass("p__nav--container").removeClass("p__nav--container-is-open");
  });
});