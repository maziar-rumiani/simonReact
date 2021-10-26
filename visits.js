let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.countapi.xyz/hit/rumiani.ir/visits");
xhr.responseType = "json";
xhr.onload = function() {
    document.getElementById('visits').innerText = 'bezoeken: '+this.response.value;
}
xhr.send();