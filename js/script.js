console.log('Vue ok', Vue)

const { createApp } = Vue
const app = createApp({
    data() {
        return{
            tasks,
        }
    },
});
app.mount('#root')