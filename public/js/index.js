$(document).ready(function(){
  $(".tab").click(function(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    $(this).closest('.tab_nav').find(".current_tab").removeClass("current_tab");
    if(!$(this).hasClass("current_tab")) {
      $(this).addClass("current_tab");
      var tmp = $(this).attr("id").split("_")[0];
      var current = $("#" + tmp + "_content");

      current.closest('.viewport').find(".current_tab_content").removeClass("current_tab_content");
      current.addClass("current_tab_content");
    }
  });

  $('.tab_content').bind('scroll', function() {
    if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      alert('스크롤 끝. 새로운 카드를 불러와야 함');
    }
  });
});
