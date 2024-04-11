import { reactive } from "vue";

export const store = reactive({
    projects: [],
    currentPage: '',
    lastPage: '',
    apiBaseUrl: 'http://localhost:8000'
})