$(document).ready(function() {
	$("div#form1").append(
//			Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
			$("<h3/>").text("Create redirect link"), $("<form/>", {
//				action: '#',
//				method: '#'
			}).append(
//					Create <form> Tag and Appending in HTML Div form1.
					$("<input/>", {
						type: 'text',
						id: 'vimageurl',
						name: 'imageurl',
						placeholder: 'Custom og:image URL'
					}), // Creating Input Element With Attribute.
					$("<input/>", {
						type: 'text',
						id: 'vredirectto',
						name: 'redirectto',
						placeholder: 'Linked page URL'
					}), $("<br/>"), $("<input/>", {
						type: 'submit',
						id: 'submit',
						value: 'Create link'
					}), $("<br/>"), $("<textarea/>", {
						rows: '5px',
						cols: '27px',
						type: 'text',
						id: 'submitdata',
						name: 'submitdata'
						})))
});

$(document).ready(function() {
	function get_short_url(long_url, func)
	{
	    $.getJSON(
	        "https://api.bitly.com/v3/shorten?callback=?", 
	        { 
	            "format": "json",
	            "apiKey": "f32d3b239ec08dcbcb26a119f4aa82207a569b08",
	            "login": "chrispetsos",
	            "longUrl": long_url
	        },
	        function(response)
	        {
	            func(response.data.url);
	        }
	    );
	}
	
	$("#submit").click(function(e) {
		e.preventDefault();
		var vimageurl = $("#vimageurl").val();
		var vredirectto = $("#vredirectto").val();
		if (!(vimageurl == '' || vredirectto == '')) {
			var long_url = "https://ogimageredirector.herokuapp.com/redirect.jsp?imageURL=" + vimageurl + "&redirectURL=" + vredirectto;
			var link = get_short_url(long_url, function(short_url) {
				$("#submitdata").empty();
				$("#submitdata").append(link);
			});
		} else {
			alert("Please Fill All Fields.");
		}
	});
});