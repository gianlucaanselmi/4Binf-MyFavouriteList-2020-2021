const addNewLink = function() {
console.log("inside addNewLink");
const url = $("#form-url").val();
const title = $("#form-title").val();
const category = $("#form-category").val();
console.log(url);
console.log(title);
console.log(category);
}

const init = function() {

  $("#form-submit").on("click",addNewLink);

}

$(document).ready(init);