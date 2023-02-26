function postToGoogle() {
    var field1 = $("#Name").val();
    var field2 = $("#Email").val();
    var field3 = $("#Message").val();

    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdPg0_xFoW2It9UBZv40wA8aPTwR05u9MzUuszlx2QZf3EM1Q/formResponse",
        
      //add your google form generated numbers below which are also the 'names' of your inputs     
      data: {
        "entry.352931399": field1,
        "entry.1287098885": field2,
        "entry.75384403": field3
      },
      type: "POST",
      dataType: "xml",
      success: function (d) {
        $('#contact').trigger('reset');
      },
      error: function (x, y, z) {
        $('#contact').trigger('reset');
      }
    });
    return false;
  }