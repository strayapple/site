function getApiAddress(){
  return "http://api.btlike.com"
}


function onSearch(id, page, order) {

    var keyword = $(id).val();
    console.log(keyword,1);
    if (keyword === "") {
        return
    }
    console.log("list.html?keyword=" + keyword + "&page=" + page + "&order=" + order);
    window.location.href = "list.html?keyword=" + keyword + "&page=" + page + "&order=" + order
}

function getSize(size) {
    if (size > 1024 * 1024 * 1024) {
        return (size / 1024 / 1024 / 1024).toFixed(2) + "GB"
    }
    if (size > 1024 * 1024) {
        return (size / 1024 / 1024).toFixed(2) + "MB"
    }
    if (size > 1024) {
        return (size / 1024).toFixed(2) + "KB"
    }
    return size.toFixed(2) + "Byte"
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


$('#search').keydown(function (e){
  console.log('Enter was pressed');
    if(e.keyCode == 13){
        console.log('Enter was pressed');
    }
})
