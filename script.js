const sites = [];

const writeSiteList = function(sites){


}

const addNewLink = function() {
event.preventDefault();
const url = $("#form-url").val();
const title = $("#form-title").val();
const category = $("#form-category").val();
console.log(url);
console.log(title);
console.log(category);

const newSite = {
  url: url,
  title: title,
  category: category

};

sites.append(newSite);

}

const init = function() {

   $("form").submit(addNewLink);
 //$("#form-submit").on("click",addNewLink);

}

$(document).ready(init);