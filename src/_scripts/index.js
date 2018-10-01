// @codekit-prepend 'vendor/jquery.js'

$(document).ready(function() {

  // console.log("Look ma, no errors!\n\nBuuuuuut.... if you see something crazy or just plain wrong though, please reach out. I only half know what I'm doing here. A DM or public reply is perfectly acceptable.\n\n🖤\n—MDS\nhttp://twitter.com/mds\n\n");
  console.log("Thanks for popping open the inspector.\nIf you see something wrong, please let me know!\nA DM or public reply is perfectly acceptable.\n\n—MDS\nhttp://twitter.com/mds\n\n");

  function get_views() {
    var URL = "https://gdata.youtube.com/feeds/api/videos/"+aXsizGMW85w+"?v=2&alt=json";
    $.ajax({
        type: "GET",
        url: URL,
        cache: false,
        dataType:'jsonp',
        success: function(data){
          // Add your logic here. As an example it just logs it on the console
          console.log(data.entry.yt$statistics.viewCount);
       }
    });
  }

});

