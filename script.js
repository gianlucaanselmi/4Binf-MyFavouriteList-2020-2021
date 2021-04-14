const sites = [];

const addNewLink = function (event) {

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

  sites.push(newSite);
  console.log(sites);
  writeSiteList(sites);
}

const writeSiteList = function(site){

const aElem = $("<a>").attr("href",site[site.length-1].url).text(site[site.length -1].title);
const liElem = $("<li>").append(aElem);
$("#link-list").append(liElem);

}

const init = function () {

  $("form").submit(addNewLink);
  //$("#form-submit").on("click",addNewLink);

}

$(document).ready(init);