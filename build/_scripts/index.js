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

  // start video
  $(".cta-video").on('click', function() {
    startVideo();
    return false; // stops URL from loading
  });

  // stop video
  $(".video-overlay").on('click', function() {
    stopVideo();
  });

  // stop video with escape key
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      stopVideo();
    }
  });

  function startVideo() {
    $(".video-overlay").fadeIn();
    var videoURL = $('#trailer').prop('src');
    videoURL += "&autoplay=1";
    $('#trailer').prop('src',videoURL);
  }

  function stopVideo() {
    $(".video-overlay").fadeOut();
    var videoURL = $('#trailer').prop('src');
    videoURL = videoURL.replace("&autoplay=1", "");
    $('#trailer').prop('src','');
    $('#trailer').prop('src',videoURL);
  }

  // lesson variables
  var sprint_1_1_ID = "aXsizGMW85w";
  var sprint_1_2_ID = "yu1y9p-mxYM";
  var sprint_1_3_ID = "J-QV70gKNmI";
  var sprint_1_4_ID = "OrQsszHSJBA";
  var sprint_1_5_ID = "VIK6L75tpAY";

  var sprint_2_1_ID = "lY-rxXkstYc";
  var sprint_2_2_ID = "FRIC-NElvTE";
  var sprint_2_3_ID = "nYnqidO8hcc";
  var sprint_2_4_ID = "CHtxVdFRV9s";
  var sprint_2_5_ID = "m1jNnlagSTc";

  var sprint_3_1_ID = "kEnYZCWT0GQ";
  var sprint_3_2_ID = "yxPeRqfQqGM";
  var sprint_3_3_ID = "rORSSVs9De4";
  var sprint_3_4_ID = "aC8-tqEa0bs";
  var sprint_3_5_ID = "U4JZjjOle5E";

  var sprint_4_1_ID = "krdzxYg90gg";
  var sprint_4_2_ID = "i66BZP_Ig5M";
  var sprint_4_3_ID = "PWejlHaekmg";
  var sprint_4_4_ID = "yskfyysQCSs";
  var sprint_4_5_ID = "uBBujZJi840";
  var sprint_4_6_ID = "1SOaobzx-eg";
  var sprint_4_7_ID = "Kv6nVk8zG_s";

  var sprint_1_1_title = "1.1 – Prototype walkthrough";
  var sprint_1_2_title = "1.2 – Simple UI animation";
  var sprint_1_3_title = "1.3 – Duplicating and modifying interactions";
  var sprint_1_4_title = "1.4 – Exploring Swipe interactions ";
  var sprint_1_5_title = "1.5 – Advanced time-based animations ";

  var sprint_2_1_title = "2.1 – Keep these things in mind before you design an app";
  var sprint_2_2_title = "2.2 – Design an iOS tab bar";
  var sprint_2_3_title = "2.3 – Card-based UI design";
  var sprint_2_4_title = "2.4 – Interior detail screen design";
  var sprint_2_5_title = "2.5 – Using existing components for additional screens";

  var sprint_3_1_title = "3.1 – Detailed inspection of app animations";
  var sprint_3_2_title = "3.2 – Level up your animations using Masks";
  var sprint_3_3_title = "3.3 – Layer your animations for rich interactions";
  var sprint_3_4_title = "3.4 – Ways to refactor and enhance your animations";
  var sprint_3_5_title = "3.5 – Duplicating and repurposing animations";

  var sprint_4_1_title = "4.1 – The secret sauce for new design projects";
  var sprint_4_2_title = "4.2 – Low-fidelity animation overview";
  var sprint_4_3_title = "4.3 – Sketch to InVision Studio";
  var sprint_4_4_title = "4.4 – Combining Tap and Timing interactions";
  var sprint_4_5_title = "4.5 – Animating User Input";
  var sprint_4_6_title = "4.6 – Creating subtle and refined animations";
  var sprint_4_7_title = "4.7 – Nail the tiny details of your animated prototype";

  var sprint_1_1_desc = "Welcome to Switch to Studio series! Let's take a look at the first prototype we'll design and build together in this first sprint. <a href='https://projects.invisionapp.com/prototype/Studio-Sprint-1-cjnao3oth007emj01gonbpewn/play/''>View the live prototype.</a>";
  var sprint_1_2_desc = "Learn the fastest possible way to animate objects between artboards. Take a look at the different types easing functions built into InVision Studio. <a href='https://projects.invisionapp.com/prototype/Studio-Sprint-1-cjnao3oth007emj01gonbpewn/play/''>View the live prototype.</a>";
  var sprint_1_3_desc = "We'll build out the prototype's core functionality by using existing interactions and building on top of them. <a href='https://projects.invisionapp.com/prototype/Studio-Sprint-1-cjnao3oth007emj01gonbpewn/play/''>View the live prototype.</a>";
  var sprint_1_4_desc = "Here we'll extend the interactivity of the app by adding swiping functions directly onto artboards. <a href='https://projects.invisionapp.com/prototype/Studio-Sprint-1-cjnao3oth007emj01gonbpewn/play/''>View the live prototype.</a>";
  var sprint_1_5_desc = "Let's wrap up this prototype by adding some polished, time-based animations for really fluid transitions. <a href='https://projects.invisionapp.com/prototype/Studio-Sprint-1-cjnao3oth007emj01gonbpewn/play/''>View the live prototype.</a>";

  var sprint_2_1_desc = "Let's walkthrough the iOS running app concept we'll design and talk about things to keep in mind when starting off your design projects. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a> Find the Google font used in the project <a href='https://fonts.google.com/specimen/Teko'>here.</a>";
  var sprint_2_2_desc = "Here we'll design some of the initial global elements like the title bar and the nav bar. We'll also go over how to design a few icons with the basic shapes and the pen tool. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a>";
  var sprint_2_3_desc = "In this video we'll design the card-based interface for the home screen. We'll go over implied grids and typographic choices. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a>";
  var sprint_2_4_desc = "Here we'll design the interior detail screen by reusing some of the elements from the home screen. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a>";
  var sprint_2_5_desc = "You made it to the last video of this sprint! Now we're going to reuse the interior detail screen for a color theme variation of the final screens. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a>";

  var sprint_3_1_desc = "Let's walkthough all of the little animations that are happening inside of this prototype. This is a first look at everything we'll animate in this series. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a>";
  var sprint_3_2_desc = "Here we'll create our very first animation with our running app. We'll also explore animating masked elements for some special effects. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a>";
  var sprint_3_3_desc = "It's easy to link every animation to happen at once, but the magic comes when we start to offset the timing and really dig into the details. Let's dive in. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a>";
  var sprint_3_4_desc = "There are no rules about going back and refactoring what you've already done. Sometimes you don't really know what's best until you've gotten started. In this video we'll change some of our existing work and add an additional animation in the interior screens. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a>";
  var sprint_3_5_desc = "In this final video, we'll go over what to watch out for when duplicating animations. <a href='https://projects.invisionapp.com/prototype/d86e4750-b6ea-49cf-50f5-694e0c63279c/play'>View the live prototype.</a>";

  var sprint_4_1_desc = "The secret sauce isn't very secret. It's simply making a list, but there are some very important things to keep in mind. You can grab this list and the design files below. <a href='https://projects.invisionapp.com/prototype/cjkd22m98002tls01901h557e/play'>View the live prototype.</a>";
  var sprint_4_2_desc = "This is a quick walkthrough of the design and animation we'll make over the next few videos. <a href='https://projects.invisionapp.com/prototype/cjkd22m98002tls01901h557e/play'>View the live prototype.</a>";
  var sprint_4_3_desc = "There are lots of ways to get started with designs, but in this video we'll focus on quick, low-fidelity designs. <a href='https://projects.invisionapp.com/prototype/cjkd22m98002tls01901h557e/play'>View the live prototype.</a>";
  var sprint_4_4_desc = "Let's take a look at linking multiple animation triggers for a rich interactive prototype. <a href='https://projects.invisionapp.com/prototype/cjkd22m98002tls01901h557e/play'>View the live prototype.</a>";
  var sprint_4_5_desc = "Here, we'll animate a faux user input and design the search results list. <a href='https://projects.invisionapp.com/prototype/cjkd22m98002tls01901h557e/play'>View the live prototype.</a>";
  var sprint_4_6_desc = "Alrighty, now we're animating a fake load screen to happen right before our search results come in. <a href='https://projects.invisionapp.com/prototype/cjkd22m98002tls01901h557e/play'>View the live prototype.</a>";
  var sprint_4_7_desc = "Last video of this series!! What subtle details an we add to really take our projects to the next level? Here, we're going to add in an often overlooked interaction. <a href='https://projects.invisionapp.com/prototype/cjkd22m98002tls01901h557e/play'>View the live prototype.</a>";

  // sprint 1 lessons
  // ------------------------------------
  if ((dynamicContent == '1') || (dynamicContent == '1.1')) {
    updateSprint(1);
    updateEmbedTitle(sprint_1_1_title);
    updateNowPlaying(sprint_1_1_ID, 1);
    updateDesc(sprint_1_1_desc);
  }
  else if (dynamicContent == '1.2') {
    updateSprint(1);
    updateEmbedTitle(sprint_1_2_title);
    updateNowPlaying(sprint_1_2_ID, 2);
    updateDesc(sprint_1_2_desc);
  }
  else if (dynamicContent == '1.3') {
    updateSprint(1);
    updateEmbedTitle(sprint_1_3_title);
    updateNowPlaying(sprint_1_3_ID, 3);
    updateDesc(sprint_1_3_desc);
  }
  else if (dynamicContent == '1.4') {
    updateSprint(1);
    updateEmbedTitle(sprint_1_4_title);
    updateNowPlaying(sprint_1_4_ID, 4);
    updateDesc(sprint_1_4_desc);
  }
  else if (dynamicContent == '1.5') {
    updateSprint(1);
    updateEmbedTitle(sprint_1_5_title);
    updateNowPlaying(sprint_1_5_ID, 5);
    updateDesc(sprint_1_5_desc);
  }
  // sprint 2 lessons
  // ------------------------------------
  else if ((dynamicContent == '2') || (dynamicContent == '2.1')) {
    updateSprint(2);
    updateEmbedTitle(sprint_2_1_title);
    updateNowPlaying(sprint_2_1_ID, 1);
    updateDesc(sprint_2_1_desc);
  }
  else if (dynamicContent == '2.2') {
    updateSprint(2);
    updateEmbedTitle(sprint_2_2_title);
    updateNowPlaying(sprint_2_2_ID, 2);
    updateDesc(sprint_2_2_desc);
  }
  else if (dynamicContent == '2.3') {
    updateSprint(2);
    updateEmbedTitle(sprint_2_3_title);
    updateNowPlaying(sprint_2_3_ID, 3);
    updateDesc(sprint_2_3_desc);
  }
  else if (dynamicContent == '2.4') {
    updateSprint(2);
    updateEmbedTitle(sprint_2_4_title);
    updateNowPlaying(sprint_2_4_ID, 4);
    updateDesc(sprint_2_4_desc);
  }
  else if (dynamicContent == '2.5') {
    updateSprint(2);
    updateEmbedTitle(sprint_2_5_title);
    updateNowPlaying(sprint_2_5_ID, 5);
    updateDesc(sprint_2_5_desc);
  }
  // sprint 3 lessons
  // ------------------------------------
  else if ((dynamicContent == '3') || (dynamicContent == '3.1')) {
    updateSprint(3);
    updateEmbedTitle(sprint_3_1_title);
    updateNowPlaying(sprint_3_1_ID, 1);
    updateDesc(sprint_3_1_desc);
  }
  else if (dynamicContent == '3.2') {
    updateSprint(3);
    updateEmbedTitle(sprint_3_2_title);
    updateNowPlaying(sprint_3_2_ID, 2);
    updateDesc(sprint_3_2_desc);
  }
  else if (dynamicContent == '3.3') {
    updateSprint(3);
    updateEmbedTitle(sprint_3_3_title);
    updateNowPlaying(sprint_3_3_ID, 3);
    updateDesc(sprint_3_3_desc);
  }
  else if (dynamicContent == '3.4') {
    updateSprint(3);
    updateEmbedTitle(sprint_3_4_title);
    updateNowPlaying(sprint_3_4_ID, 4);
    updateDesc(sprint_3_4_desc);
  }
  else if (dynamicContent == '3.5') {
    updateSprint(3);
    updateEmbedTitle(sprint_3_5_title);
    updateNowPlaying(sprint_3_5_ID, 5);
    updateDesc(sprint_3_5_desc);
  }
  // sprint 4 lessons
  // ------------------------------------
  else if ((dynamicContent == '4') || (dynamicContent == '4.1')) {
    updateSprint(4);
    updateEmbedTitle(sprint_4_1_title);
    updateNowPlaying(sprint_4_1_ID, 1);
    updateDesc(sprint_4_1_desc);
  }
  else if (dynamicContent == '4.2') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_2_title);
    updateNowPlaying(sprint_4_2_ID, 2);
    updateDesc(sprint_4_2_desc);
  }
  else if (dynamicContent == '4.3') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_3_title);
    updateNowPlaying(sprint_4_3_ID, 3);
    updateDesc(sprint_4_3_desc);
  }
  else if (dynamicContent == '4.4') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_4_title);
    updateNowPlaying(sprint_4_4_ID, 4);
    updateDesc(sprint_4_4_desc);
  }
  else if (dynamicContent == '4.5') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_5_title);
    updateNowPlaying(sprint_4_5_ID, 5);
    updateDesc(sprint_4_5_desc);
  }
  else if (dynamicContent == '4.6') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_6_title);
    updateNowPlaying(sprint_4_6_ID, 6);
    updateDesc(sprint_4_6_desc);
  }
  else if (dynamicContent == '4.7') {
    updateSprint(4);
    updateEmbedTitle(sprint_4_7_title);
    updateNowPlaying(sprint_4_7_ID, 7);
    updateDesc(sprint_4_7_desc);
  }

  // if no URL paramenters exist revert to the first sprint and first lesson
  else {
    $(".sprint--one").show();
    updateSprint(1);
    document.title = 'Switch to Studio by MDS';
    updateEmbedTitle(sprint_1_1_title);
    updateNowPlaying(sprint_1_1_ID, 1);
    updateDesc(sprint_1_1_desc);
  }



  // updates video title on video embed
  function updateEmbedTitle(vidTitle){
    $(".title-link h2").html(vidTitle);
  }

  // updates visibility of sprint group and updates <h1> page title
  function updateSprint(sprintNum) {
    if (sprintNum == '1') {
      document.title = 'Studio Sprint 01 – Switch to Studio';
      $(".sprint--one").show();
      $(".main--sprint .head-container h1").html('<a href="/">&larr;</a> <em>01 – </em> Get Started Fast with InVision Studio');
    }
    else if (sprintNum == '2') {
      document.title = 'Studio Sprint 02 – Switch to Studio';
      $(".sprint--two").show();
      $(".main--sprint .head-container h1").html('<a href="/">&larr;</a> <em>02 – </em> Designing an iOS app with InVision Studio');
    }
    else if (sprintNum == '3') {
      document.title = 'Studio Sprint 03 – Switch to Studio';
      $(".sprint--three").show();
      $(".main--sprint .head-container h1").html('<a href="/">&larr;</a> <em>03 – </em> Animating an iOS app with InVision Studio');
    }
    else if (sprintNum == '4') {
      document.title = 'Studio Sprint 04 – Switch to Studio';
      $(".sprint--four").show();
      $(".main--sprint .head-container h1").html('<a href="/">&larr;</a> <em>04 – </em> Low Fidelity Prototyping with InVision Studio');
    }
  }

  // updates the correct video to be loaded in iframe and have the now-playing feature in playlist
  function updateNowPlaying(lessonID, lessonNum) {
    $(".video-playlist li a").removeClass("now-playing");
    $(".sprint .video-wrap").html('<iframe width="560", height="315", src="https://www.youtube.com/embed/'+lessonID+'?rel=0&controls=0?modestbranding=1&showinfo=0", frameborder="0", allow="autoplay; encrypted-media", allowfullscreen="" />');
    $(".video-playlist li:nth-child("+lessonNum+") a .vid-info h3").append("<p class='now-playing'>Now Viewing</p>");
    $(".video-playlist li:nth-child("+lessonNum+") a").addClass("now-playing");
  }

  // updates description of now playing
  function updateDesc(lessonDesc) {
    $(".sprint .video p").html(lessonDesc);
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



