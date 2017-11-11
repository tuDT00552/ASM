    var app = angular.module("myApp", ["ngRoute"]);
      app.config(function($routeProvider) {
          $routeProvider.when("/home", {
              templateUrl : "home.html"
          }).when("/playlist", {
              templateUrl : "playlist.html"
          }).when("/login", {
              templateUrl : "login.html"
          }).when("/res", {
              templateUrl : "register.html"
          });
    });



  /*Menu-toggle*/
    $("#wrapper").toggleClass("active");
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });



      function activeh() {
        $("#activeh").addClass("active");
        $("#activep").removeClass("active");
        $("#activepp").removeClass("active");
      }
      function activep() {
        $("#activep").addClass("active");
        $("#activeh").removeClass("active");
        $("#activepp").removeClass("active");
      }
       function activepp() {
        $("#activepp").addClass("active");
        $("#activeh").removeClass("active");
        $("#activep").removeClass("active");
      }

    $("button").click(function () {
      alert("a");
    });

    $('.carousel').carousel({
        interval: 30
    });

    $(document).ready(function() {
    $('#myCarousel').carousel({
      interval: 10000
  })
});