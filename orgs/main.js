let org = document.getElementById("orgs");
let url = document.location.toString().split('/');
url.pop();
url.pop();
const baseUrl = url.join('/');

function orgOnC() {
    document.location = baseUrl + "/orgs/index.html";
}

function homeOnC() {
    document.location = baseUrl + "/index.html";
}

function orgone() {
    document.location = "https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi";
}

function orgtwo() {
    document.location = "https://www.razomforukraine.org//donate/";
}

function orgthree() {
    document.location = "https://helpukraine22.org/";
}