const { createApp } = Vue
const app = createApp({
    data() {
        return{
            tasks,
        }
    },
});
console.log(tasks)
app.mount('#root')
