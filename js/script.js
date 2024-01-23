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
                id: new Date().toISOString(),
                done: false,
                text: this.newTaskText,
            }

            this.tasks.push(newTask)

            this.newTaskText = ''
        }
    }
});

app.mount('#root')
