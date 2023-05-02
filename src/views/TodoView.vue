<template>
    <div> <v-text-field v-model="taskTitle" class="pa-3" variant="outlined" clearable="true" hide-details label="Add Tasks"
            append-inner-icon="mdi-plus" @click:append-inner="addTask()" @keyup.enter="addTask()"></v-text-field>
        <v-list lines="two" select-strategy="classic">
            <div v-for="task in tasks" :key="task.id">
                <v-list-item @click="doneTask(task.id)" :class="{ 'blue-lighten-5': classColor }">
                    <template v-slot:prepend>
                        <v-list-item-action>
                            <v-checkbox-btn :model-value="task.status"></v-checkbox-btn>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-text :class="{ 'text-decoration-line-through': task.status }">{{ task.title
                            }}</v-list-item-text>
                        </v-list-item-content>
                    </template>
                    <template v-slot:append>
                        <v-btn @click.stop="deleteTask(task.id)" color="red-lighten-1" icon="mdi-delete"
                            variant="text"></v-btn>
                    </template>
                    <!-- <v-spacer></v-spacer> -->
                </v-list-item>
                <v-divider></v-divider>
            </div>
        </v-list>
    </div>
</template>
<script setup>
import { ref } from "vue";
let tasks = ref([
    {
        id: 1,
        title: 'This is task 1',
        createdAt: Date.now(),
        status: true
    },
    {
        id: 2,
        title: 'This is task 1',
        createdAt: Date.now(),
        status: false
    },
    {
        id: 3,
        title: 'This is task 1',
        createdAt: Date.now(),
        status: true
    }
]);
let taskTitle = ref("");
let colorClass = ref(false)
const doneTask = function (id) {
    let task = this.tasks.filter(task => task.id === id)[0]
    // console.log(task);
    task.status = !task.status
    colorClass.value = task.status
}
const deleteTask = function (id) {
    this.tasks = this.tasks.filter(task => task.id !== id)
}
const addTask = function () {
    // console.log(this.taskTitle);
    let newTask = {
        id: this.tasks.length + 1,
        title: this.taskTitle,
        createdAt: Date.now(),
        status: false
    }
    this.tasks.push(newTask)
    this.taskTitle = ""
}

</script>