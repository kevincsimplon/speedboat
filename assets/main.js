function mainLoop() {
    requestAnimationFrame(mainLoop);
    DEMO.update();
}

$(function() {
	WINDOW.initialize();

  // Start game
  $('#start').on('click',function(){
    $('.menu').addClass('hide');
        // Init score
        $("#score")
        .css(
        {
          "background":"rgba(0,0,0,0)", "opacity":"0.9",
          "font-size":"50px",
          "position":"absolute","bottom":0,"right":"10px",
          "color":"#ff8808",
          "text-shadow": "3px 2px 8px #051e14",
          "padding": '1%',
        });
        $("#sval")
          .text("0/10")
        .css(
        {
          "background":"rgba(0,0,0,0)", "opacity":"0.9",
          "font-size":"50px",
          "position":"relative", "right":"-2px"
        });

    // Init timer
    $("#timer")
      .text("45")
    .css(
    {
      "background":"rgba(0,0,0,0)", "opacity":"0.9",
      "font-size":"60px",
      "color":"#7edfa8",
      "text-shadow": "3px 2px 8px #051e14",
      "position":"absolute","bottom":2,"left":"10px",
      "padding": '1%',
    });
  });

	DEMO.initialize('canvas-3d');

	WINDOW.resizeCallback = function(inWidth, inHeight) { DEMO.resize(inWidth, inHeight); };
	DEMO.resize(WINDOW.ms_Width, WINDOW.ms_Height);

  mainLoop();
});
