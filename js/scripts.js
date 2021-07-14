$(document).ready(function () {
  /***************** Waypoints ******************/

  $(".wp1").waypoint(
    function () {
      $(".wp1").addClass("animate__animated  animate__fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp2").waypoint(
    function () {
      $(".wp2").addClass("animate__animated  animate__fadeInRight");
    },
    {
      offset: "75%",
    }
  );
  $(".wp3").waypoint(
    function () {
      $(".wp3").addClass("animate__animated  animate__fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp4").waypoint(
    function () {
      $(".wp4").addClass("animate__animated  animate__fadeInRight");
    },
    {
      offset: "75%",
    }
  );
  $(".wp5").waypoint(
    function () {
      $(".wp5").addClass("animate__animated  animate__fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp6").waypoint(
    function () {
      $(".wp6").addClass("animate__animated  animate__fadeInRight");
    },
    {
      offset: "75%",
    }
  );
  $(".wp7").waypoint(
    function () {
      $(".wp7").addClass("animate__animated  animate__fadeInUp");
    },
    {
      offset: "75%",
    }
  );
  $(".wp8").waypoint(
    function () {
      $(".wp8").addClass("animate__animated  animate__fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp9").waypoint(
    function () {
      $(".wp9").addClass("animate__animated  animate__fadeInRight");
    },
    {
      offset: "75%",
    }
  );

  $(".wp10").waypoint(
    function () {
      $(".wp10").addClass("animate__animated  animate__fadeInLeft");
    },
    {
      offset: "75%",
    }
  );
  $(".wp11").waypoint(
    function () {
      $(".wp11").addClass("animate__animated  animate__fadeInRight");
    },
    {
      offset: "75%",
    }
  );

  /***************** Initiate Flexslider ******************/
  $(".flexslider").flexslider({
    animation: "slide",
  });

  /***************** Initiate Fancybox ******************/

  $(".single_image").fancybox({
    padding: 4,
  });

  $(".fancybox").fancybox({
    padding: 4,
    width: 1000,
    height: 800,
  });

  /***************** Tooltips ******************/
  $('[data-toggle="tooltip"]').tooltip();

  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $(".nav-toggle").click(function () {
    $(this).toggleClass("active");
    $(".header-nav").toggleClass("open");
    event.preventDefault();
  });
  /* When user clicks a link */
  $(".header-nav li a").click(function () {
    $(".nav-toggle").toggleClass("active");
    $(".header-nav").toggleClass("open");
  });

  /***************** Header BG Scroll ******************/

  $(function () {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $("section.navigation").addClass("fixed");
        $("header").css({
          "border-bottom": "none",
          padding: "35px 0",
        });
        $("header .member-actions").css({
          top: "26px",
        });
        $("header .navicon").css({
          top: "34px",
        });
      } else {
        $("section.navigation").removeClass("fixed");
        $("header").css({
          "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
          padding: "50px 0",
        });
        $("header .member-actions").css({
          top: "41px",
        });
        $("header .navicon").css({
          top: "48px",
        });
      }
    });
  });
  /***************** Smooth Scrolling ******************/

  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top - 90,
            },
            2000
          );
          return false;
        }
      }
    });
  });

  /********************** Embed youtube video *********************/
  $(".player").YTPlayer();

  /********************** Toggle Map Content **********************/
  $("#btn-show-map").click(function () {
    $("#map-content").toggleClass("toggle-map-content");
    $("#btn-show-content").toggleClass("toggle-map-content");
  });
  $("#btn-show-content").click(function () {
    $("#map-content").toggleClass("toggle-map-content");
    $("#btn-show-content").toggleClass("toggle-map-content");
  });

  /********************** Add to Calendar **********************/
  var myCalendar = createCalendar({
    options: {
      class: "",
      // You can pass an ID. If you don't, one will be generated for you
      id: "",
    },
    data: {
      // Event title
      title: "Andrea and David's Wedding",

      // Event start date
      start: new Date("Oct 30, 2021 18:00"),

      // Event duration (IN MINUTES)
      // duration: 120,

      // You can also choose to set an end time
      // If an end time is set, this will take precedence over duration
      end: new Date("Oct 31, 2021 00:00"),

      // Event Address
      address: "Chateaux at Fox Meadows, 13600 Xavier Ln, Broomfield, CO 80023",

      // Event Description
      description: "We can't wait to see you on our big day.",
    },
  });

  $("#add-to-cal").html(myCalendar);

  /********************** RSVP **********************/
  $("#rsvp-form").on("submit", function (e) {
    function getFormData($form){
        var unindexed_array = $form.serializeArray();
        var indexed_array = {};
    
        $.map(unindexed_array, function(n, i){
            indexed_array[n['name']] = n['value'];
        });
    
        return indexed_array;
    }
    e.preventDefault();
    var data = getFormData($(this));

    $("#alert-wrapper").html(
      alert_markup(
        "info",
        "<strong>Just a sec!</strong> We are saving your details."
      )
    );
    fetch(
      "https://script.google.com/macros/s/AKfycbygkPVCpcT9EqHlBpTSQDbmcJlt_f7LYnL2Dc6jxfD3sRVUQPrN_4sCmzFGCWtqB-pMnQ/exec",
      {
        method: "POST",
        body: JSON.stringify(data),

      }
    )
      .then((response) => {
        console.log(response);
        if (response.result === "error") {
          $("#alert-wrapper").html(alert_markup("danger", response.message));
        } else {
          $("#alert-wrapper").html("");
          $("#rsvp-modal").modal("show");
        }
      })
      .catch((err) => {
        console.log(err);
        $("#alert-wrapper").html(
          alert_markup(
            "danger",
            "<strong>Sorry!</strong> There is some issue with the server. "
          )
        );
      });
  });
});

/********************** Extras **********************/

// Google map
function initMap() {
  var location = { lat: 39.9446489, lng: -105.0497882 };
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 15,
    center: location,
    scrollwheel: false,
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

function initBBSRMap() {
  var la_fiesta = { lat: 20.305826, lng: 85.85480189999998 };
  var map = new google.maps.Map(document.getElementById("map-canvas"), {
    zoom: 15,
    center: la_fiesta,
    scrollwheel: false,
  });

  var marker = new google.maps.Marker({
    position: la_fiesta,
    map: map,
  });
}

// alert_markup
function alert_markup(alert_type, msg) {
  return (
    '<div class="alert alert-' +
    alert_type +
    '" role="alert">' +
    msg +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>'
  );
}
