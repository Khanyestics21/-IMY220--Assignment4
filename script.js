$(document).ready(function() {
  // this is added to help distingiush which send button was clicked on
  $("#left").on("click", function() {
    send("lightpurple");
  });

  $("#right").on("click", function() {
    send("lightgreen");
  });

  //recieve color as param and then display message using that color
  function send(color) {
    
    const userMessage = $("#message").val().trim();
      //error checking for "empty message"
    if (userMessage !== "") {
  //new message div is created with necessary color and text
      const messageDiv = $("<div>").addClass("col-4 offset-4 mb-2 rounded").css("background-color", color).text(userMessage);
      $(".messages").append(messageDiv);
      $("#message").val("");
       // Task 2- check if the message contains a yt link if it does, create iframe - else nothing but print
      if (containsYoutubeLink(userMessage)) {
        const iframe = YTIFrameFunc(userMessage);
        messageDiv.append(iframe);
      }
    }
  }

  
  function containsYoutubeLink(message) {
    const youtubeRegex = /https:\/\/www\.youtube\.com\/watch\?v=[A-Za-z0-9_-]{11}/;
    return youtubeRegex.test(message);
  }

  
  function YTIFrameFunc(youtubeLink) {
    const videoId = youtubeLink.match(/[A-Za-z0-9_-]{11}/)[0];
    const iframe = $("<iframe>").attr({
      src: `https://www.youtube.com/embed/${videoId}`,
      frameborder: 0,
      allowfullscreen: true,
      width: "100%",
      height: "315"
    });
    return iframe;
  }
});
