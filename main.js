let org = document.getElementById("orgs");
let baseUrl;
let url = document.location.toString().split('/');
url.pop();
baseUrl = url.join('/');

function orgOnC() {
    document.location = baseUrl + "/orgs/index.html";
}

function homeOnC() {
    document.location = baseUrl + "/index.html";
}