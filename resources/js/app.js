require('./bootstrap');

import Swal from "sweetalert2";
window.Swal = Swal;
const toast = Swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false,
    timer:3000,
    timerProgressBar:true,
})
window.toast = toast

import { createApp } from "vue";
import router from "./router";
import App from "./components/App.vue"
import {Vue3ProgressPlugin} from '@marcoschulte/vue3-progress';

createApp(App)
.use(Vue3ProgressPlugin)
.use(router)
.mount("#app")
