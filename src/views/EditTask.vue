<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="6" offset-md="3">
                    <v-card>
                        <v-card-title>
                            <h1 class="text-center">Edit Task</h1>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field v-model="taskTitle" label="Task Title"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" @click="editTask(task.id)">Edit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { API_URL } from '../api'
import { useRouter } from "vue-router"
let task = ref(
    {
        id: 0,
        title: "",
        createdAt: "",
        status: false
    });
const router = useRouter()
let taskTitle = ref("");
onMounted(async () => {
    let res = await axios.get(`${API_URL}tasks/` + router.params.id)
    task.value = res.data
    // console.log(res.data);
})
const editTask = function (id) {
    let task = this.tasks.filter(task => task.id === id)[0]
    // console.log(task);
    taskTitle.value = task.title
    axios.put(`${API_URL}tasks/${id}`, {
        title: taskTitle.value,
        status: task.status
    }).then(res => {
        console.log(res.data);
        taskTitle.value = ""
    })
}
</script>