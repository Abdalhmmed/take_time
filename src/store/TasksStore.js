import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useUserStore = defineStore("UserStore", () => {
    const loading = ref(false);
    const error = ref(null);
    const apiURL = "http://localhost:5000/tasks";

    const fetchTasks = async () => {
        loading.value = true;
        error.value = null;
        try {
            const res = await axios.get(apiURL);
            return res.data;
        } catch (err) {
            console.error("Error fetching tasks:", err);
            error.value = "Failed to load tasks list.";
        } finally {
            loading.value = false;
        }
    };

    const fetchTaskById = async (taskId) => {
        loading.value = true;
        error.value = null;
        try {
            const res = await axios.get(`${apiURL}/${taskId}`);
            return res.data;
        } catch (err) {
            console.error("Error fetching task:", err);
            error.value = "Failed to load task list.";
        } finally {
            loading.value = false;
        }
    };

    

    const fetchTaskByUserId = async (userId, day) => {
        loading.value = true;
        error.value = null;
        try {
            const res = await axios.get(apiURL, {
                params: { user_id: userId}
            });

            return res.data;
        } catch (err) {
            console.error("Error fetching task:", err);
            error.value = "Failed to load task list.";
        } finally {
            loading.value = false;
        }
    };

    const fetchTaskDayByUserId = async (userId) => {
        loading.value = true;
        error.value = null;
        try {
            const res = await axios.get(apiURL, {
                params: { user_id: userId}
            });
            const tasks = res.data

            const targetDate = new Date(); 
            const filteredTasks = tasks.filter(task => { const d = new Date(task.date);
            return ( d.getDate() === targetDate.getDate() && d.getMonth() === targetDate.getMonth() && d.getFullYear() === targetDate.getFullYear() ); });

            return filteredTasks;
        } catch (err) {
            console.error("Error fetching task:", err);
            error.value = "Failed to load task list.";
        } finally {
            loading.value = false;
        }
    };

    
    return {
        loading,
        error,
        fetchTasks,
        fetchTaskById,
        fetchTaskByUserId,
        fetchTaskDayByUserId,
    };
});
