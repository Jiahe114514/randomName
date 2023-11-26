const open=document.querySelector("#change")
const modal=document.querySelector(".modal")
open.addEventListener("click",function(){
    modal.style.display="block"
})
const close=document.querySelector(".close")
close.addEventListener("click",function(){
    modal.style.display="none"
})
// 模态框



let nameList = []
function saveList(){
    localStorage.setItem('nameList', JSON.stringify(nameList));
}

function reLoad1(){
    const table1 = document.querySelector(".table1");
    const tbody1 = table1.querySelector(".tbody1");
    tbody1.innerHTML = "";
    for (let i = nameList.length - 1; i >= 0; i--) {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${nameList[i]}</td>
                      <td><button class="delete1">删除</button></td>`;
        tbody1.appendChild(tr);

        const deleteButton1 = tr.querySelector(".delete1")
        deleteButton1.addEventListener("click", function(){
            nameList.splice(i, 1);
            saveList();
            reLoad1();
        });
    }
}


const input=document.querySelector("#name");
const submit=document.querySelector("#submit");
submit.addEventListener("click",function(){
    nameList.push(input.value);
    saveList();  
    reLoad1();
    input.value="";
    input.focus();  
})
window.onload = function () {
    nameList = JSON.parse(localStorage.getItem('nameList'));
    reLoad1();
};
// ???这个不懂

const time=document.querySelector(".time")
const num=document.querySelector(".num")
function randomNum(){
    return Math.floor(Math.random()*nameList.length)
}



const start=document.querySelector(".start")
const wipe=document.querySelector("#wipe");
const tbody2=document.querySelector(".tbody2")

// 每一次的点名排在一行，第二次点名排在第二行，单个删除键删除一行，清空键清空所有
start.addEventListener("click",function(){
        tbody2.innerHTML="";
        const timeValue=parseInt(time.value);
        const numValue=parseInt(num.value);
        for(let i=0;i<timeValue;i++){
            const tr=document.createElement("tr");
            for(let j=0;j<numValue;j++){
                let Num=randomNum()
                const td=document.createElement("td")
                td.innerHTML=nameList[Num]
                const deleteButton2=document.createElement("button");
                deleteButton2.textContent="删除"
                deleteButton2.addEventListener("click",function(){
                    tr.removeChild(td);
                })
                td.appendChild(deleteButton2);
                tr.appendChild(td)
            }
            tbody2.appendChild(tr)
        }
    })

wipe.addEventListener("click",function(){
    tbody2.innerHTML="";
})
const style=document.querySelector("#style");
style.addEventListener("change",function(){
    const selected = style.value;
    if (selected==="light"){
        header.style.backgroundColor = "white";
        document.body.style.backgroundColor = "white";

    }else if (selected==="dark"){
        header.style.backgroundColor = "black";
        document.body.style.backgroundColor = "black";

    }else if (selected==="Genshin"){
        document.body.style.backgroundImage="./others/原始人.jpg"
    }
})






