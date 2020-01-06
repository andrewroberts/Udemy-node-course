const tasks = {
    tasks: [{
        text: 'T1',
        completed: true
    },{
        text: 'T2',
        completed: false
    },{
        text: 'T3',
        completed: false
    }],
    getTasksTodo() {
        return this.tasks.filter((task) => !task.completed)
    }
}

console.log(tasks.getTasksTodo())