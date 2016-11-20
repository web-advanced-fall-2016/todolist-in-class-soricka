var tasks = require('./todolist.json');
let fs = require('fs');

var db = {
	getTaskList: function(){
		
		var tsk = tasks.slice(0);
		console.log("going");
		return tsk;
	},
	getTask: (id) => {
		for(let task of tasks){
			if(task.id == id)

				return Object.assign({}, task);
		}
		return false;
	},
	sendTask: function(newTask){

	}

};

module.exports = db;