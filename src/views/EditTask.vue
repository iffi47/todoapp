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
                            <v-text-field v-model="task.title" label="Task Title"></v-text-field>
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
import { useRoute, useRouter } from "vue-router"
const route = useRoute()
const router = useRouter()
const task = ref(
    {
        id: 0,
        title: "",
        createdAt: "",
        status: false
    });


onMounted(async () => {
    console.log(route.params + " from edit");
    let res = await axios.get(`${API_URL}tasks/` + route.params.id)
    task.value = res.data
    console.log(res.data);
})
const editTask = function (id) {
    axios.put(`${API_URL}tasks/${id}`, {
        title: this.task.title,
        createdAt: this.task.createdAt,
        status: this.task.status
    }).then((res) => {
        console.log(res);
        router.push("/")
    }).catch((err) => {
        console.log(err);
    })

    // let newTask = {
    //     id: this.tasks.length + 1,
    //     title: this.taskTitle,
    //     createdAt: Date.now(),
    //     status: false
    // }
    // this.tasks.push(newTask)
}
</script>