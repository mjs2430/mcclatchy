$(document).ready(function(){
  //Jays code
  var f = document.querySelector('url-form');
  f.addEventListener('url-form-changed', function(e) {

  //Setup color and badge name variables
    var navDropdownColor = $("#dropdown-nav-hex").val();
    var navDropdownHoverColor = $("#dropdown-nav-hover-hex").val();
    var navStaticColor = $("#static-nav-hex").val();
    var navStaticHoverColor = $("#static-nav-hover-hex").val();
    var highlightColor = $("#highlight-color-hex").val();
    var badgeColor = $("#badge-color-hex").val();
    var badgeName1 = $("#badge-name-1").val();
    var badgeName2 = $("#badge-name-2").val();
    var badgeName3 = $("#badge-name-3").val();
    var badgeName4 = $("#badge-name-4").val();
    var badgeName5 = $("#badge-name-5").val();
    var badgeName6 = $("#badge-name-6").val();
    //Live update options panel color glyphs
    $(".color-input").each(function() {
      var elem = $(this);

      // Save current value of element
      elem.data("oldVal", elem.val());

      // Look for changes in the value
      elem.bind("propertychange change click keyup input paste", function(event) {
        // If value has changed...
        if (elem.data("oldVal") != elem.val()) {
          // Updated stored value
          elem.data("oldVal", elem.val());
          //Do stuff
          var newColor = $(this).val();
          $(this).siblings("i").css("color", newColor);
        }
      });
    });

    //Show/Hide Logo Panel
    if($('#logo-radio1').is(':checked')) {
      $('#upload-logo-section').css('display','none');
    }else if($('#logo-radio2').is(':checked')) {
      $('#upload-logo-section').css('display','block');
    }

    //Change Logo in options panel
    var logoImg = $("#logo-img-url").val();
    $("#option-logo-img").attr("src", logoImg);
    //Logo IMG Live
    $("#logo-live").attr("src", logoImg);

    //Show/Hide Color Palette Panel
    if($('#color-radio1').is(':checked')) {
      $('#color-palette').css('display','none');
    }else if($('#color-radio2').is(':checked')) {
      $('#color-palette').css('display','block');
    }

    //Dropdown color and hover
    $(".dropdown").css("background", navDropdownColor);
    $(".dropdown")
      .mouseover(function() {
        $(this).css("background-color", navDropdownHoverColor);
      })
      .mouseout(function() {
        $(this).css("background-color", navDropdownColor);
      });

    //Static color and hover
    $(".static").css("background", navStaticColor);
    $(".static")
      .mouseover(function() {
        $(this).css("background-color", navStaticHoverColor);
      })
      .mouseout(function() {
        $(this).css("background-color", navStaticColor);
      });

    //Link color and hover
    $(".content a").css("border-color", highlightColor);
    $(".content a").css("box-shadow", "inset 0 -4px 0" + " " + highlightColor);
    $(".content a")
      .mouseover(function() {
        $(this).css("background-color", highlightColor);
      })
      .mouseout(function() {
        $(this).css("background-color", "#EEF1F3");
      });

    //Badge Names and color
    $("#badge-1-text").html(badgeName1);
    $("#badge-2-text").html(badgeName2);
    $("#badge-3-text").html(badgeName3);
    $("#badge-4-text").html(badgeName4);
    $("#badge-5-text").html(badgeName5);
    $("#badge-6-text").html(badgeName6);
    $(".badge").css("fill", badgeColor);

    //Headline Fonts
    if ($("#light-radio").is(':checked')) {
      $('.headline').css('font-weight', '300');
    }else if ($("#demi-radio").is(':checked')) {
      $('.headline').css('font-weight', '600');
    };

    if ($("#uppercase-radio").is(':checked')) {
      $('.headline').css('text-transform', 'uppercase');
    }else if ($("#sentence-radio").is(':checked')){
      $('.headline').css('text-transform', 'none');
    };



function fileSelect(evt) {
	if (window.File && window.FileReader && window.FileList && window.Blob) {
		var files = evt.target.files;

		var result = '';
		var file;
		for (var i = 0; file = files[i]; i++) {
			// if the file is not an image, continue
			if (!file.type.match('image.*')) {
				continue;
			}

			reader = new FileReader();
			reader.onload = (function (tFile) {
				return function (evt) {
          $("#option-logo-img").attr("src", evt.target.result);
          $("#logo-live").attr("src", evt.target.result);
          var name = $('#filesToUpload').val().split('\\').pop();
  	      $("#logo-img-url").val("https://template-customizer-mjs2430.c9users.io/uploads/" + name);
				};
			}(file));
			reader.readAsDataURL(file);
		}
	} else {
		alert('The File APIs are not fully supported in this browser.');
	}
}

document.getElementById('filesToUpload').addEventListener('change', fileSelect, false);



  }); /****
  End Jay's function
  *****/


//Save Logo Panel hide/show options and activate on page load
  if($('#logo-radio1').is(':checked')) {
    $('#upload-logo-section').css('display','none');
  }else if($('#logo-radio2').is(':checked')) {
    $('#upload-logo-section').css('display','block');
  }

//Save Color Panel hide/show options and activate on page load
  if($('#color-radio1').is(':checked')) {
    $('#color-palette').css('display','none');
  }else if($('#color-radio2').is(':checked')) {
    $('#color-palette').css('display','block');
  }


     //Save Logo in options panel
    var logoImg = $("#logo-img-url").val()
    $("#option-logo-img").attr("src", logoImg);
    $("#logo-img-url").val(logoImg);
  //Logo IMG Live
    $("#logo-live").attr("src", logoImg);

//Save materialize icon colors in options panel
  $(".color-input").each(function() {
var newColor = $(this).val();
$(this).siblings("i").css("color", newColor);
});

//***Save  Colors in Live Preview***
    var navDropdownColor = $("#dropdown-nav-hex").val();
    var navDropdownHoverColor = $("#dropdown-nav-hover-hex").val();
    var navStaticColor = $("#static-nav-hex").val();
    var navStaticHoverColor = $("#static-nav-hover-hex").val();
    var highlightColor = $("#highlight-color-hex").val();
    var badgeColor = $("#badge-color-hex").val();
    //Dropdown color and hover
    $(".dropdown").css("background", navDropdownColor);
    $(".dropdown")
      .mouseover(function() {
        $(this).css("background-color", navDropdownHoverColor);
      })
      .mouseout(function() {
        $(this).css("background-color", navDropdownColor);
      });
    //Static color and hover
    $(".static").css("background", navStaticColor);
    $(".static")
      .mouseover(function() {
        $(this).css("background-color", navStaticHoverColor);
      })
      .mouseout(function() {
        $(this).css("background-color", navStaticColor);
      });
    //Link color and hover
    $(".content a").css("border-color", highlightColor);
    $(".content a").css("box-shadow", "inset 0 -4px 0" + " " + highlightColor);
    $(".content a")
      .mouseover(function() {
        $(this).css("background-color", highlightColor);
      })
      .mouseout(function() {
        $(this).css("background-color", "#EEF1F3");
      });
    //Badge color
    $(".badge").css("fill", badgeColor);


    //Save Badge Names for live preview on page load
        var badgeName1 = $("#badge-name-1").val();
        var badgeName2 = $("#badge-name-2").val();
        var badgeName3 = $("#badge-name-3").val();
        var badgeName4 = $("#badge-name-4").val();
        var badgeName5 = $("#badge-name-5").val();
        var badgeName6 = $("#badge-name-6").val();
    		$("#badge-1-text").html(badgeName1);
        $("#badge-2-text").html(badgeName2);
        $("#badge-3-text").html(badgeName3);
        $("#badge-4-text").html(badgeName4);
        $("#badge-5-text").html(badgeName5);
        $("#badge-6-text").html(badgeName6);

  //Save Headline Fonts
        if ($("#light-radio").is(':checked')) {
          $('.headline').css('font-weight', '300');
        }else if ($("#demi-radio").is(':checked')) {
          $('.headline').css('font-weight', '600');
        };

        if ($("#uppercase-radio").is(':checked')) {
          $('.headline').css('text-transform', 'uppercase');
        }else if ($("#sentence-radio").is(':checked')){
          $('.headline').css('text-transform', 'none');
        };

//Initialize Materilize select
$('select').material_select();
$('.modal').modal();

//Copy Code Button
new Clipboard('#copy-code');


//Save/Share Button Generate Url
    /*!
    * GoogleURLShortener ver 0.1
    * by Zzbaivong <http://devs.forumvi.com/>
    */
$('.save-share').click(function() {
  function get_short_url(long_url, login, api_key, func)
{
    $.getJSON(
        "http://api.bitly.com/v3/shorten?callback=?",
        {
            "format": "json",
            "apiKey": api_key,
            "login": login,
            "longUrl": long_url
        },
        function(response)
        {
            func(response.data.url);
        }
    );
}

    var longURL = $(location).attr('href');

    var login = "o_57ukhk7olk";
    var api_key = "R_9a900732854536e39740e8c136bd47e4";
    var long_url = longURL;

    get_short_url(long_url, login, api_key, function(short_url) {
        console.log(short_url);
        $('#share-input').val(short_url);

    });

  });


/*Remove empty for elements on submit
    $("form").submit(function(){
        $("input").each(function(index, obj){
            if($(obj).val() == "") {
                $(obj).remove();
            }
        });
    }); */






}); //End docready
