// console.log("Look ma, no errors!\n\nBuuuuuut.... if you see something crazy or just plain wrong though, please reach out. I only half know what I'm doing here. A DM or public reply is perfectly acceptable.\n\n🖤\n—MDS\nhttp://twitter.com/mds\n\n");
console.log("Thanks for popping open the inspector.\nIf you see something wrong, please let me know!\nA DM or public reply is perfectly acceptable.\n\n—MDS\nhttp://twitter.com/mds\n\n");


// Parse the URL parameter
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var dynamicContent = getParameterByName('s');

// Do this after page is loaded and ready
$(document).ready(function() {

  // show/hide video overlay
  $(".video-overlay").on('click', function() {
    $(".video-overlay").fadeOut();
  });

  $(".cta-video").on('click', function() {
    $(".video-overlay").fadeIn();
    return false; // stops URL from loading
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      $(".video-overlay").fadeOut();
    }
  });

  // lesson variables
  var sprint_1_1_ID = "aXsizGMW85w";
  var sprint_1_2_ID = "yu1y9p-mxYM";
  var sprint_1_3_ID = "J-QV70gKNmI";
  var sprint_1_4_ID = "QamUv4PdzQg";
  var sprint_1_5_ID = "VIK6L75tpAY";

  var sprint_2_1_ID = "lY-rxXkstYc";
  var sprint_2_2_ID = "FRIC-NElvTE";
  var sprint_2_3_ID = "m1jNnlagSTc";
  var sprint_2_4_ID = "cUYSGojUuAU"; //needs to be uploaded by InVision (makin' bacon pancakes)
  var sprint_2_5_ID = "4r7wHMg5Yjg"; //needs to be uploaded by InVision (honey badger)

  var sprint_3_1_ID = "kEnYZCWT0GQ";
  var sprint_3_2_ID = "yxPeRqfQqGM";
  var sprint_3_3_ID = "O_eiE0YkIkk";
  var sprint_3_4_ID = "aC8-tqEa0bs";
  var sprint_3_5_ID = "U4JZjjOle5E";

  var sprint_4_1_ID = "krdzxYg90gg";
  var sprint_4_2_ID = "i66BZP_Ig5M";
  var sprint_4_3_ID = "PWejlHaekmg";
  var sprint_4_4_ID = "yskfyysQCSs";
  var sprint_4_5_ID = "uBBujZJi840";
  var sprint_4_6_ID = "1SOaobzx-eg";
  var sprint_4_7_ID = "Kv6nVk8zG_s";

  var sprint_1_1_title =  "1.1 – Prototype walkthrough";
  var sprint_1_2_title =  "1.2 – Simple UI animation";
  var sprint_1_3_title =  "1.3 – Duplicating and modifying interactions";
  var sprint_1_4_title =  "1.4 – Exploring Swipe interactions ";
  var sprint_1_5_title =  "1.5 – Advanced time-based animations ";

  var sprint_2_1_title =  "2.1 – Keep these things in mind before you design an app";
  var sprint_2_2_title =  "2.2 – Design an iOS tab bar";
  var sprint_2_3_title =  "2.3 – Card-based UI design";
  var sprint_2_4_title =  "2.4 – Interior detail screen design";
  var sprint_2_5_title =  "2.5 – Using existing components for additional screens";

  var sprint_3_1_title =  "3.1 – Detailed inspection of app animations";
  var sprint_3_2_title =  "3.2 – Level up your animations using Masks";
  var sprint_3_3_title =  "3.3 – Layer your animations for rich interactions";
  var sprint_3_4_title =  "3.4 – Ways to refactor and enhance your animations";
  var sprint_3_5_title =  "3.5 – Duplicating and repurposing animations";

  var sprint_4_1_title =  "4.1 – LISTS – the secret sauce for new design projects";
  var sprint_4_2_title =  "4.2 – Low-fidelity animation overview";
  var sprint_4_3_title =  "4.3 – Sketch to InVision Studio";
  var sprint_4_4_title =  "4.4 – Combining Tap and Timing interactions";
  var sprint_4_5_title =  "4.5 – Animating User Input";
  var sprint_4_6_title =  "4.6 – Creating subtle and refined animations";
  var sprint_4_7_title =  "4.7 – Nail the tiny details of your animated prototype";

  // sprint 1 lessons
  // ------------------------------------
  if (dynamicContent == '1.1') {
    updateSprint(1);
    updateEmbedTitle(sprint_1_1_title);
    addNowPlaying(sprint_1_1_ID, 1);
  }
  else if (dynamicContent == '1.2') {
    updateSprint(1);
    updateEmbedTitle(sprint_1_2_title);
    addNowPlaying(sprint_1_2_ID, 2);
  }
  else if (dynamicContent == '1.3') {
    updateSprint(1);
    updateEmbedTitle(sprint_1_3_title);
    addNowPlaying(sprint_1_3_ID, 3);
  }
  else if (dynamicContent == '1.4') {
    updateSprint(1);
    updateEmbedTitle(sprint_1_4_title);
    addNowPlaying(sprint_1_4_ID, 4);
  }
  else if (dynamicContent == '1.5') {
    updateSprint(1);
    updateEmbedTitle(sprint_1_5_title);
    addNowPlaying(sprint_1_5_ID, 5);
  }
  // sprint 2 lessons
  // ------------------------------------
  else if (dynamicContent == '2.1') {
    updateSprint(2);
    updateEmbedTitle(sprint_2_1_title);
    addNowPlaying(sprint_2_1_ID, 1);
  }
  else if (dynamicContent == '2.2') {
    updateSprint(2);
    updateEmbedTitle(sprint_2_2_title);
    addNowPlaying(sprint_2_2_ID, 2);
  }
  else if (dynamicContent == '2.3') {
    updateSprint(2);
    updateEmbedTitle(sprint_2_3_title);
    addNowPlaying(sprint_2_3_ID, 3);
  }
  else if (dynamicContent == '2.4') {
    updateSprint(2);
    updateEmbedTitle(sprint_2_4_title);
    addNowPlaying(sprint_2_4_ID, 4);
  }
  else if (dynamicContent == '2.5') {
    updateSprint(2);
    updateEmbedTitle(sprint_2_5_title);
    addNowPlaying(sprint_2_5_ID, 5);
  }
  // sprint 3 lessons
  // ------------------------------------
  else if (dynamicContent == '3.1') {
    updateSprint(3);
    updateEmbedTitle(sprint_3_1_title);
    addNowPlaying(sprint_3_1_ID, 1);
  }
  else if (dynamicContent == '3.2') {
    updateSprint(3);
    updateEmbedTitle(sprint_3_2_title);
    addNowPlaying(sprint_3_2_ID, 2);
  }
  else if (dynamicContent == '3.3') {
    updateSprint(3);
    updateEmbedTitle(sprint_3_3_title);
    addNowPlaying(sprint_3_3_ID, 3);
  }
  else if (dynamicContent == '3.4') {
    updateSprint(3);
    updateEmbedTitle(sprint_3_4_title);
    addNowPlaying(sprint_3_4_ID, 4);
  }
  else if (dynamicContent == '3.5') {
    updateSprint(3);
    updateEmbedTitle(sprint_3_5_title);
    addNowPlaying(sprint_3_5_ID, 5);
  }
  // sprint 4 lessons
  // ------------------------------------
  else if (dynamicContent == '4.1') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_1_title);
    addNowPlaying(sprint_4_1_ID, 1);
  }
  else if (dynamicContent == '4.2') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_2_title);
    addNowPlaying(sprint_4_2_ID, 2);
  }
  else if (dynamicContent == '4.3') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_3_title);
    addNowPlaying(sprint_4_3_ID, 3);
  }
  else if (dynamicContent == '4.4') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_4_title);
    addNowPlaying(sprint_4_4_ID, 4);
  }
  else if (dynamicContent == '4.5') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_5_title);
    addNowPlaying(sprint_4_5_ID, 5);
  }
  else if (dynamicContent == '4.6') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_6_title);
    addNowPlaying(sprint_4_6_ID, 6);
  }
  else if (dynamicContent == '4.7') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_7_title);
    addNowPlaying(sprint_4_7_ID, 7);
  }

  // if no URL paramenters exist
  else {
    $(".sprint--one").show();
    addNowPlaying(sprint_1_1_ID, 1);
  }

  // updates video title on video embed
  function updateEmbedTitle(vidTitle){
    $(".title-link h2").html(vidTitle);
  }

  // updates visibility of sprint group and updates <h1> page title
  function updateSprint(sprintNum) {
    if (sprintNum == '1') {
      $(".sprint--one").show();
      $(".head-container h1").html('<a href="/">&larr;</a> <em>01 – </em> Get Started Fast with InVision Studio');
    }
    else if (sprintNum == '2') {
      $(".sprint--two").show();
      $(".head-container h1").html('<a href="/">&larr;</a> <em>02 – </em> Designing an iOS app with InVision Studio');
    }
    else if (sprintNum == '3') {
      $(".sprint--three").show();
      $(".head-container h1").html('<a href="/">&larr;</a> <em>03 – </em> Animating an iOS app with InVision Studio');
    }
    else if (sprintNum == '4') {
      $(".sprint--four").show();
      $(".head-container h1").html('<a href="/">&larr;</a> <em>04 – </em> Low Fidelity Prototyping with InVision Studio');
    }
  }

  // updates the correct video to be loaded in iframe and have the now-playing feature in playlist
  function addNowPlaying(lessonID, lessonNum) {
    $(".video-playlist li a").removeClass("now-playing");
    $(".sprint .video-wrap").html('<iframe width="560", height="315", src="https://www.youtube.com/embed/'+lessonID+'?rel=0&controls=0?modestbranding=1&showinfo=0", frameborder="0", allow="autoplay; encrypted-media", allowfullscreen="" />');
    $(".video-playlist li:nth-child("+lessonNum+") a .vid-info h3").append("<p class='now-playing'>Now Viewing</p>");
    $(".video-playlist li:nth-child("+lessonNum+") a").addClass("now-playing");
  }

  // check form
  function checkForm(form)
  {
    if(!form.checkbox_1.checked) {
      alert("Please acknowledge that your information may be shared with InVision");
      form.checkbox_1.focus();
      return false;
    }
    return true;
  }

});



