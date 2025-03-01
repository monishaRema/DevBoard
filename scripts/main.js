
   


const today = new Date();
const currentYear = today.getFullYear();
const day = today.getDate();
let hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;


const dayName = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

const todayDay = dayName[today.getDay()];
const thisMonth = monthName[today.getMonth()];


document.getElementById("day-name").innerText = todayDay + ",";
document.getElementById("date").innerText = thisMonth + " " + day + " " + currentYear;

//  All html elements

const completedTaskElement = document.getElementById("completed-task");
const assignedTaskElement = document.getElementById("assigned-task");
const triggerBtn = document.querySelectorAll('.completed-btn');
const activityLog = document.getElementById("activity-log");
const clearBtn = document.getElementById("clear-btn");
const cardBox = document.querySelectorAll(".card-box");
const colorPicker = document.getElementById("color-picker");
const body = document.getElementsByTagName("body")[0];


colorPicker.addEventListener("click", function(){
    const red = Math.floor(Math.random()  * 255);
    const green = Math.floor(Math.random()  * 255);
    const blue = Math.floor(Math.random()  * 255);
    const alpha = Math.random();
    body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    console.log(alpha);

});


    

let assignedTask = cardBox.length;
assignedTaskElement.innerText = assignedTask;



function getValueFromElement(element){
    if(!element){
        return;
    }
    const value = element.innerText;
    let convertedValue = parseInt(value);
    return convertedValue;
}

function setValueToElement(element, value){
    element.innerText = value;
}

function createNotification(notificationName, notificationContainer){
    if(!notificationContainer || !notificationName){
        return;
    }
   const notificationPrefix = "You have completed the task ";
   const completedTime = hours + ":" + minutes + ":"+ seconds + " " + ampm;
   const notification = document.createElement('p');
   notification.innerText = notificationPrefix + notificationName + " at " + completedTime;
   notification.classList.add('activity-notifications');
   notificationContainer.appendChild(notification);
}



let completedTask = getValueFromElement(completedTaskElement);
// let assignedTask = getValueFromElement(assignedTaskElement);




triggerBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
     alert( "Board udpated successfully");

    //  update the task status
     completedTask++;
     assignedTask--;
     setValueToElement(completedTaskElement, completedTask);
     setValueToElement(assignedTaskElement, assignedTask);
     this.setAttribute('disabled', '');


    //  get task name
     const taskName = this.parentElement.parentElement.childNodes[1].nextElementSibling.innerText;
     createNotification(taskName,  activityLog)
    

    //  check all task are completed
     if(assignedTask <=0){
        alert("Congratulations!!!! You have completed all assigned tasks.")
     }

    });
});

clearBtn.addEventListener('click',function(){
    activityLog.innerHTML = '';
})



 