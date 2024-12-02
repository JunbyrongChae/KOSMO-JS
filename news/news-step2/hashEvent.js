const ajax = new XMLHttpRequest()
//window.addEventListener("hashchange", () => {
    ajax.open("GET", "https://api.hnpwa.com/v0/item/42130881.json", false);
    ajax.send();
    console.log(ajax.response);
//});