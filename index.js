const textbtn = document.getElementById("btn");
let i = 1;
let n;
textbtn.addEventListener("click", function(){
    const place = document.getElementById("TaskContainer");

    const inputbar = document.createElement("input");
    inputbar.type = "text";
    inputbar.setAttribute("id", "inputbar");
    inputbar.placeholder = "Enter your Task..."

    place.appendChild(inputbar);

    const Addbutton = document.createElement("button");
    Addbutton.textContent = "Add Task";
    Addbutton.setAttribute("id", "AddButton");
    place.appendChild(Addbutton);
    document.getElementById("btn").style.display = "none";
    document.getElementById("dummy").style.display = "none";

    Addbutton.addEventListener("click", function(){
        const Taskholder = document.createElement("div");
        document.getElementById("Taskdiv").append(Taskholder);
        const labelTask = document.createElement("label");
        let tasknum = "task" + i;
        labelTask.htmlFor = tasknum;
        labelTask.setAttribute("id", tasknum);
        labelTask.textContent = inputbar.value; 
        const inputTask = document.createElement("input");
        inputTask.type = "checkbox";
        inputTask.setAttribute("id", tasknum);
        inputTask.setAttribute("name", tasknum);

        Taskholder.appendChild(inputTask);
        Taskholder.appendChild(labelTask);
        inputbar.value = "";
        document.getElementById("inputbar").remove();
        document.getElementById("AddButton").remove();
        document.getElementById("btn").style.display = "inline";
        i++;
        n=i;
        
        labelTask.addEventListener("click",function(){
            this.classList.toggle("strike");
        })
        
    });
});



