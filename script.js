const sites = [];

const site2li = (site) => {
  const aElem = $("<a>").attr("href", site.url).text(site.title);
  const trashElem = $("<img>")
    .addClass("trash-icon")
    .attr("src", "trash.jpg")
    .attr("alt", "trash i")
    .data("id",site.id);
  const liElem = $("<li>")
    .append(aElem)
    .append(trashElem);
  console.log("trashElem id: "+ trashElem.data("id"));
  return liElem;
}

const li2list = (newList, li) => newList.append(li)

const writeSiteList = (listElement, sites) => 
  sites
    .map(site2li)
    .reduce(li2list, listElement.html(""));

const generateId = () => Math.floor(Math.random()*100000);


const addNewLink = function (event) {

  event.preventDefault();
  console.log("inside addNewSite");
  const url = $("#form-url").val();
  const title = $("#form-title").val();
  const category = $("#form-category").val();

  console.log(url);
  console.log(title);
  console.log(category);

  const newSite = {
    id: generateId(),
    url: url,
    title: title,
    category: category
  };

  console.log("new site with ID: "+newSite.id)
  sites.push(newSite);
  writeSiteList($("#link-list"),sites);

}

const deleteSite = function(){

  const id = $(this).data("id");

}


const init = function () {
  $("form").submit(addNewLink);
  //$("#form-submit").on("click",addNewLink);
  $("link-list").on("click",".trash-icon",deleteSite);
}

$(document).ready(init);