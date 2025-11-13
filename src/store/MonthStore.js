import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useMonthStore = defineStore("MonthStore", () => {
  const loading = ref(false);
  const error = ref(null);
  const apiURL = "http://localhost:5000/months";

  const fetchMonth = async () => {
    loading.value = true;
    error.value = null;
    try {
      const res = await axios.get(apiURL);
      return res.data;
    } catch (err) {
      console.error("Error fetching months:", err);
      error.value =
        err.response?.data?.message ||
        "تعذر تحميل الجدول. تحقق من الاتصال أو السيرفر.";
      return [];
    } finally {
      loading.value = false;
    }
  };

  const fetchMonthById = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      const res = await axios.get(`${apiURL}?id=${id}`);
      return res.data[0];
    } catch (err) {
      console.error("Error fetching month:", err);
      error.value =
        err.response?.data?.message ||
        "تعذر تحميل الشهر. تحقق من الاتصال أو السيرفر.";
      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    fetchMonth,
    fetchMonthById,
  };
});
