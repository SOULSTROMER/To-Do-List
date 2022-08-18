let inputField = document.getElementById("inputField");
let mainContainer = document.querySelector(".mainContainer");
let Add = document.getElementById("Add");

Add.addEventListener("click", function(){
    let TAG = document.createElement("div");
    TAG.setAttribute("class",`taskContainer${mainContainer.childElementCount}` )

    let Task = document.createTextNode(`${inputField.value}`);
    let forButtons = document.createElement("div");
    forButtons.setAttribute("class",`Button${mainContainer.childElementCount}`)

    let done = document.createElement("button");
    let delet = document.createElement("button");
    
    TAG.appendChild(Task);
    forButtons.appendChild(done);
    forButtons.appendChild(delet);
    TAG.appendChild(forButtons);
    mainContainer.appendChild(TAG);

    TAG.style.border = "1px solid white"
    TAG.style.display = "flex"
    TAG.style.justifyContent = "space-between"
    TAG.style.width = "80%"
    done.innerText = "DONE"
    delet.innerText = "DELETE"
    inputField.value = ""
});

window.addEventListener("click",function(e){
    if(e.target.innerText === "DONE"){
        e.target.parentNode.parentNode.style.textDecoration = "line-through"
        e.target.innerText = "UNDO"
    }else if (e.target.innerText === "UNDO"){
        e.target.parentNode.parentNode.style.textDecoration = "none"
        e.target.innerText = "DONE"
    }else if (e.target.innerText === "DELETE"){
        e.target.parentNode.parentNode.remove()
    }
});