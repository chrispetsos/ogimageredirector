$(document).ready(function() {
$("div#form1").append(
// Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
$("<h3/>").text("Create redirect link"), $("<form/>", {
//action: '#',
//method: '#'
}).append(
// Create <form> Tag and Appending in HTML Div form1.
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
}), $("<br/>"), $("<button/>", {
type: 'button',
id: 'submit',
value: 'Create link'
})))
});