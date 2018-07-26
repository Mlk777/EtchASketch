$(document).ready(function () {
  $("#newQuote").on("click", function () {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function (json) {
      (() => {
        $(".btn").prop("disabled", true);
        $("#quote").empty();
        $(".message").empty();
        $("#quote").fadeIn("slow");
        $(".message").fadeIn("slow");
      })();
      Object.keys(json).forEach(function (key) {
        var quote = new Typed('#quote', {
          strings: [json.quoteText],
          typeSpeed: -10,
          fadeOut: true,
          loop: false,
          showCursor: false
        });
        $("#twitterButton").attr("href", 'https://twitter.com/intent/tweet?text=Quote of the day :' + json.quoteText + '%0a' + json.quoteAuthor);
        setTimeout(() => {
          var author = new Typed('.message', {
            strings: [json.quoteAuthor],
            typeSpeed: 10,
            fadeOut: true,
            loop: false,
            showCursor: false
          });
        }, 1800);
      });
      setTimeout(() => {
        (() => {
          $(".btn").prop("disabled", false);
          $(".etchBorder").effect("shake");
          $("#quote").fadeOut("slow");
          $(".message").fadeOut("slow");
        })();
      }, 6500);
    });
  });
});
