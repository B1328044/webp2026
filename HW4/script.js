var openUrl =
    "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

var dataset = [];
var filteredData = [];
var currentPage = 1;
var pageSize = 9;

var xhr = new XMLHttpRequest();
xhr.open('GET', openUrl, true);
xhr.send();

xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        dataset = JSON.parse(this.responseText);
        filteredData = dataset;
        renderTable();
    }
};

function renderTable(){
    delOldData();

    var myTable = document.getElementById("csie");
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = startIndex + pageSize;
    var pageData = filteredData.slice(startIndex, endIndex);

    pageData.forEach(function(data){
        var row = myTable.insertRow(-1);

        var info = {};
        if(data.showInfo && data.showInfo.length > 0) {
            info = data.showInfo[0];
        }

        row.insertCell(0).innerHTML = data.title || "";
        row.insertCell(1).innerHTML = info.location || "";
        row.insertCell(2).innerHTML = info.price || "";
    });

    updatePageInfo();
}

function delOldData(){
    var myTable = document.getElementById("csie");

    while(myTable.rows.length > 1){
        myTable.deleteRow(1);
    }
}

function updatePageInfo(){
    var totalPages = Math.ceil(filteredData.length / pageSize);

    if(totalPages === 0){
        document.getElementById("pageInfo").textContent = "0 / 0 頁";
    } else {
        document.getElementById("pageInfo").textContent = currentPage + " / " + totalPages + " 頁";
    }
}

function prevPage(){
    if(currentPage > 1){
        currentPage--;
        renderTable();
    }
}

function nextPage(){
    var totalPages = Math.ceil(filteredData.length / pageSize);

    if(currentPage < totalPages){
        currentPage++;
        renderTable();
    }
}

function searchData(){
    var keyword = document.getElementById("searchInput").value.trim();

    if(keyword === ""){
        filteredData = dataset;
    } else {
        filteredData = dataset.filter(function(data){
            return data.title && data.title.includes(keyword);
        });
    }

    currentPage = 1;
    renderTable();
}