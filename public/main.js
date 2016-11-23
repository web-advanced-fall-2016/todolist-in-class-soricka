let url = "http://localhost:3000";
var taskList = document.getElementById('taskList');

var i = 0;

window.onload=function(){
	$.ajax({
		method:"GET",
		url: url + `/tasks`
	}).done(function(response){
		console.log('asd');
		console.log(response.length);

		for(i = 0; i < response.length; i++){
			var count = i;

			console.log(response[i]);

			var div = document.createElement('div');
			div.className = "task";
			div.id=i;
			taskList.appendChild(div);

			var description = document.createElement('p');
			description.className = "taskName";
			description.innerHTML = response[i].description;

			var details = document.createElement('div');
			details.className="details";

			var completed = document.createElement("div");
			completed.className ="completeButton button";
			completed.innerHTML = "&#x2714;";
			completed.id = response[i].id;

			var deleteButton = document.createElement('span');
			deleteButton.className = "deleteTask button";
			deleteButton.innerHTML = "&#x2715;";

			
			div.appendChild(description);
			div.appendChild(details);
			details.appendChild(deleteButton);
			details.appendChild(completed);

			// $.ajax({
			// 	method:"GET",
			// 	url: url+'/tasks/'+response[i].id

			// }).done(function(response){
			// 	console.log("yes")
			// 	var desc = document.createElement('p');
			// 	desc.id = 'task-' + response.id;

			// 	taskList.appendChild(desc);
			// })

			

		}
	})

};

function sendTask(data){
	$.ajax({
		type: "POST",
		url: url + '/tasks',
		data: data,
		success: console.log("sent")
	})

	let config = {
		method: "GET",
		headers: new Headers({})
	}

	let request = new Request(`${url}/tasks`, config);
	  fetch(request)
        .then(function(res) {
            if (res.status == 200)
                return res.json();
            else
                throw new Error('Something went wrong on api server!');
        })
        .then(function(res) {
            console.log("The result is" + res);
            saveTask();
            // res.json(res);
        })

    .catch(function(err) {
        console.warn("Couldn't fetch info list");
        console.log(err);
    });


}

var xdelete = document.getElementsByClassName("deleteTask");
console.log(xdelete);

for(var i = 0; i < xdelete.length; i++){
	xdelete[i].addEventListener('click', function(){
		deleteTask();
	});
}



function deleteTask(){
	console.log("delete")

}


function saveTask(){
	// console.log("running");

	var taskForm = document.getElementById("taskForm"); 
	var submitButton = document.getElementById("button");

	

	var taskInput = document.getElementById("taskInput");
	var task = taskInput.value;

	if(task){
		newTask = { description: task, id: i};
		sendTask(newTask);

	}

	var taskDiv = document.createElement('div');
	taskDiv.classList.add('task');
	console.log(task);
	taskDiv.innerHTML += `<p class='taskName'>${task}</p><span class='deleteTask'>x</span>`;

	// taskDiv.id = i++;
	// taskList.appendChild(taskDiv);
	// taskInput.value = "";
}



function deleteTask(){
	var deleteButton = document.querySelectorAll("deleteTask");
	console.log(deleteButton);
}

var button = document.getElementById("button");

button.addEventListener('click', function(e){
		e.preventDefault();
		// console.log("clicked");

		// runs save task function if clicked
		saveTask();

	});