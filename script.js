document.addEventListener("DOMContentLoaded", getMenu)


let menu = []



function getMenu (){
    fetch("https://my-json-server.typicode.com/mohammedsalad123/phase-1-project/menu")
    .then(res=>res.json())
    .then(data=>{
        menu=[...data]
        displayMenu (menu)
        
        
    })
}


function displayMenu (menuData){
    const menuList=document.getElementById("menu-list")
    menuData.forEach((menu) => {
        const menuItem = document.createElement("li")
        menuItem.textContent=menu.title
    
        menuItem.addEventListener("click",()=>{
            dispalaymenuList(menu)
        })
        menuList.appendChild(menuItem)
    });

}



function dispalaymenuList (menu){
    const menuDetails = document.querySelector("#menu-details")
    menuDetails.innerHTML=`
    
    <div class="card" style="width: 18rem;">
    <img src="${menu.image}"class="card-img-top">
    <h2> Menu-Title:${menu.title}</h2>
    <p> Price:${menu.price}</p>
    <p> quantity available:${menu.qnty}</P>
    <button id="btn-buy">BUY</button>
  </div>`

  const button = document.querySelector("#btn-buy")
  button.addEventListener("click", ()=>{

      const item = {...menu};
      item.qnty = menu.qnty - 1;
      fetch(`https://my-json-server.typicode.com/mohammedsalad123/phase-1-project/menu${item.id}`,{
        method:"PATCH",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            qnty: item.qnty
        })
    })
    
  });

    }


 

