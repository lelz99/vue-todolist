const { createApp } = Vue
const app = createApp({
    data() {
        return{
            tasks,
            newTaskText: ''
        }
    },
    methods: {
        deleteTask(id){
            const newTasks = this.tasks.filter( task => id !== task.id)
            this.tasks = newTasks
        },
        addNewTask(){
            const newTask = {
                id: 5,
                done: false,
                text: this.newTaskText,
            }

            this.tasks.push(newTask)

            this.newTaskText = ''
        },
        checkAll(value){
            this.tasks.forEach(task => {
                task.done = value
            })        
        },
        deleteAllCheck(){
            this.tasks = []
        }
    }
});

app.mount('#root')
console.log(tasks)
