import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import Button from "primevue/button";
import {createPinia} from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

createApp(App)
    .component('Button', Button)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .use(VueAxios, axios).use(createPinia()).use(PrimeVue).use(router).mount('#app')
