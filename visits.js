let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/rumiani.ir/visits");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('visits').innerHTML = `<span data-inner> visits: </span> <span>${this.response.value}</span>`;
}
xhr.send();