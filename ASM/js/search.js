    $("#btn").hide();
    $("#btn").click(function (argument) {
      VideoSearch()
      $('#inputsearch').val("");
    });;

    function VideoSearch(YOUTUBE_API) {
	  var key = $('#inputsearch').val();
	  var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q="+ key +"&type=video&maxResults=20&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
	    $.ajax({
	    url: YOUTUBE_API, 
	    type: "GET",
	    data: {},
	    success: function(response){
	      var content = '';   
	      for (var i = 0; i < response.items.length; i++) {
	        var videoId = response.items[i].id.videoId;
	        var videoTitle = response.items[i].snippet.title;
	        var videoThumb = response.items[i].snippet.thumbnails.medium.url;
	        content += '<div class="col-md-3">';
	          content += '<a>';
	            content += '<img onclick="showvideosearch(\''+ videoId +'\')" src="' + videoThumb + '" alt="Cover Image">';
	          content += '</a>';
	          content += '<div class="text-center"><strong><div class="titlevideo">' + videoTitle + '</div></strong></div>';
	        content += '</div>';
	      }
	      $('#my-content').html(content);
	    },
	    error: function(a, b, c){

	    }
	  });
	}