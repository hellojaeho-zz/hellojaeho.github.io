$(document).ready(function(){


      function setFocus() {
        if (window.innerWidth > 600)
            $("#password").focus();
    }

    setFocus();

    $(".initial").removeClass("initial");

    if ((location.hash === "#access")) {
          $(".right-work.home.initial").removeClass("initial");
          console.log("wtf?")

    } else {
          $(".right-work.home").remove();
          $(".right-work.no-access.hidden").removeClass("hidden");
    }

    // var yo = $('input[name=password]').val();

    $(document).keypress(function(e) {
        if(e.which == 13) {
            if($("#password").val() == "batman") {
                console.log("lit")
            }
            else {
                console.log("WRONG")
            }
        }
    });
    //
    // var caseImages = document.getElementsByClassName("case-images");
    //
    // var rect = caseImages.getBoundingClientRect();
    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    var top = ($('.case-study').height() - 800);


    console.log(top);

    var windw = this;

    $.fn.followTo = function ( pos ) {
        var $this = this,
            $window = $(windw);

        $window.scroll(function(e){
            if ($window.scrollTop() > pos) {
                $this.css({
                    position: 'absolute',
                    top: pos
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 0
                });
            }
        });
    };

    $('.work .left-info').followTo(top);

});
