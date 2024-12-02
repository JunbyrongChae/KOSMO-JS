const view=[]
view.push("<hl>");
view.push("<오늘의 날씨>");
view.push("</hl>");
const response=view.join("")
console.log(view)
console.log(response)
console.log(view.toString())

const container = document.querySelector("#root");
container.innerHTML = response;












