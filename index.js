const temp=document.getElementById("key")
        const temp2=document.getElementById("key2")
        const dis=document.getElementsByClassName("lowerdiv")[0]
       
        var h=document.createElement("h1")
        document.addEventListener("keypress",(event)=>{
            console.log(event);
            dis.style.display="flex"
            temp.innerHTML=`You Pressed <div class="name" > ${event.key}</div>`
           
            temp2.innerText=`${event.keyCode}`
        })