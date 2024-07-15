const alltask=document.querySelector(".alltask")

function faddsubtask(elem){
    elem.parentElement.querySelector("ul").innerHTML+="<li><p contenteditable=''>Sub task</p><button onclick='removeelem(this)' class='subtaskremovebtn'>X</button></li>"
}

function listaddbtncreation(){
    let addbtn=document.createElement("button")
    let span1=document.createElement("span")
    span1.setAttribute("class","text-container")

    let span2=document.createElement("span")
    span2.setAttribute("class","text")
    span2.innerHTML="Add SubTask"
    span1.append(span2)

    addbtn.append(span1)
    return(addbtn)
}

function taskcreation(){
    let task=document.createElement("div")
    task.setAttribute("class","task")

    let tdate=document.createElement("input")
    tdate.setAttribute("type","date")
    task.append(tdate)

    let title=document.createElement("div")
    title.setAttribute("class","title")
    
    let completebtn=document.createElement("button")
    completebtn.setAttribute("class","completebtn")
    completebtn.setAttribute("onclick","markcomplete(this)")
    let  taskinfo=document.createElement("div")
    taskinfo.setAttribute("class","taskinfo")


    let h3=document.createElement("h3")
    h3.setAttribute("contenteditable","")
    h3.innerHTML="Task Name"

    let ul=document.createElement("ul")
    ul.setAttribute("class","subtask")
    let li=document.createElement("li")
    let p=document.createElement("p")
    p.setAttribute("contenteditable","")
    p.innerHTML="Sub task"
    let btn=document.createElement("button")
    btn.setAttribute("onclick","removeelem(this)")
    btn.setAttribute("class","subtaskremovebtn")
    btn.innerHTML="X"
    li.append(p)
    li.append(btn)
    ul.append(li)

    let saddbtn=listaddbtncreation()
    saddbtn.setAttribute("onclick","faddsubtask(this)")
    saddbtn.setAttribute("class","addsubtask")
    saddbtn.classList.add("btn-17")

    taskinfo.append(h3)
    taskinfo.append(ul)
    taskinfo.append(saddbtn)


    title.append(completebtn)
    title.append(taskinfo)
    task.append(title)

    let dbtn=document.createElement("button")
    dbtn.setAttribute("class","removemaintask")
    dbtn.setAttribute("onclick","removeelem(this)")
    dbtn.innerHTML="X"
    task.append(dbtn)

    return(task)
}

function faddmaintask(elem){

    let parentelem=elem.parentElement
    console.log(parent)
    parentelem.insertBefore(taskcreation(),elem)

}



function removeelem(elem){
    elem.parentElement.remove()
}

function markcomplete(elem){
    if(elem.innerHTML=="  "){
        elem.innerHTML=" "
        elem.style.backgroundImage="url('./assets/undone.png')"
        
        console.log("single space")
    }
    else{
        elem.innerHTML="  "
        console.log("double space")
        elem.style.backgroundImage="url('./assets/done.png')"


    }
}

function addnewlist(){
    const alltask=document.querySelector(".alltask")

    let tasktype=document.createElement("div")
    tasktype.setAttribute("class","tasktype")

    let h2=document.createElement("h2")
    h2.setAttribute("contenteditable","")
    h2.innerHTML="TASK TITLE"

    let tasks=taskcreation()

    let btn=listaddbtncreation()
    btn.setAttribute("onclick","faddmaintask(this)")
    btn.setAttribute("class","btn-17")
    btn.classList.add("addmaintask")

    let dbtn=document.createElement("button")
    dbtn.setAttribute("class","removetasktype")
    dbtn.setAttribute("onclick","removeelem(this)")
    dbtn.innerHTML="X"

    tasktype.append(h2)
    tasktype.append(tasks)
    tasktype.append(btn)
    tasktype.append(dbtn)
    alltask.append(tasktype)
    
}
