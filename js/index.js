var bookmarkName=document.getElementById('bookmarkName');
var bookmarkURL=document.getElementById('bookmarkURL');

var siteList;
if (localStorage.getItem("sitelist") === null){
  siteList = [];
}else{
  siteList = JSON.parse(localStorage.getItem("sitelist"));
  dispalysites(siteList);
}

function createbookmark(){

  if(validatebookmarkURL() && validatebookmarkName() == true){
    var site={
      name : bookmarkName.value,
      url : bookmarkURL.value,
  };
  siteList.push(site);
  dispalysites(siteList);
  localStorage.setItem("sitelist", JSON.stringify(siteList));
  clearform();
  }
else{
  alert('url is valide or site name is valide')
}
   
}


function dispalysites(list) {
  var cartona = "";
  for (var i = 0; i < list.length; i++) {
    cartona += `<tr>
      <td>${i + 1}</td>
      <td>${list[i].name}</td>              
      <td>
        <a class="btn btn-success" href="${list[i].url}" target="_blank">
          <i class="fas fa-eye"></i> Visit
        </a>
      </td>
      <td>
        <button class="btn btn-danger" onclick='deletesite(${i})'>
          <i class="fas fa-trash-alt"></i> Delete
        </button>
      </td>
    </tr>`;
  }
  document.getElementById('tableContent').innerHTML = cartona;
}



function deletesite(index){
  siteList.splice(index, 1);
  dispalysites(siteList);
  localStorage.setItem("sitelist", JSON.stringify(siteList));
}

function clearform(){
  bookmarkName.value = ' ';
  bookmarkURL.value = ' ';
}

function validatebookmarkURL(){
  var Regex = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/;
  if(Regex.test(bookmarkURL.value) == true){
    return true;
  }
  else{
    return false;
  }
}
function validatebookmarkName(){
  var Regex = /^\w{3,}(\s+\w+)*$/;
  if(Regex.test(bookmarkName.value) == true){
    return true;
  }
  else{
    return false;
  }
}
console.log(siteList[i].url);