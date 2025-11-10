import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useTaskStore = defineStore("TaskStore", () => {

    const loading = ref(false);
    const error = ref(null);

    const apiURL = "http://localhost:5000/tasks";

    const getTasks = async (params = {}) => {
        loading.value = true;
        error.value = null;
        try {
            const res = await axios.get(apiURL, { params });
            return res.data;
        } catch (err) {
            console.error("Error fetching tasks:", err);
            error.value =
                err.response?.data?.message ||
                "تعذر تحميل قائمة المهام. تحقق من الاتصال أو السيرفر.";
            return [];
        } finally {
            loading.value = false;
        }
    };

    const fetchTasks = () => getTasks();

    const fetchTaskById = async (taskId) => {
        return getTasks({ id: taskId });
    };

    const fetchTaskByUserId = async (userId) => {
        return getTasks({ user_id: userId });
    };

    const fetchTaskDayByUserId = async (userId, taskDate) => {
        const tasks = await getTasks({ user_id: userId, type: "day" });
        const targetDate = new Date(taskDate);
        return tasks.filter((task) => {
            const d = new Date(task.date);
            return (
                d.getDate() === targetDate.getDate() &&
                d.getMonth() === targetDate.getMonth() &&
                d.getFullYear() === targetDate.getFullYear()
            );
        });
    };

    const fetchTaskMonthByUserId = async (userId, taskDate) => {
        const tasks = await getTasks({ user_id: userId, type: "month" });
        const targetDate = new Date(taskDate);
        return tasks.filter((task) => {
            const d = new Date(task.date);
            return (
                d.getMonth() === targetDate.getMonth() &&
                d.getFullYear() === targetDate.getFullYear()
            );
        });
    };

    const fetchTaskYearByUserId = async (userId, taskDate) => {
        const tasks = await getTasks({ user_id: userId, type: "year" });
        const targetDate = new Date(taskDate);
        return tasks.filter((task) => {
            const d = new Date(task.date);
            return d.getFullYear() === targetDate.getFullYear();
        });
    };

    return {
        loading,
        error,
        fetchTasks,
        fetchTaskById,
        fetchTaskByUserId,
        fetchTaskDayByUserId,
        fetchTaskMonthByUserId,
        fetchTaskYearByUserId,
    };
});
