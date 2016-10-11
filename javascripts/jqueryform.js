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
					})))
});

$(document).ready(function() {
	$("#submit").click(function(e) {
		e.preventDefault();
		/*var name = $("#name").val();
		var email = $("#email").val();
		var msg = $("#msg").val();
		if (!(name == '' || email == '' || msg == '')) {
		$("#submitdata").empty();
		$("#submitdata").append("Name: " + name + "<br/>Email: " + email + "<br/>Message: " + msg);
		} else {
		alert("Please Fill All Fields.");
		}*/
	});
});