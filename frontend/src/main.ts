import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dialog from 'primevue/dialog'
import Toolbar from 'primevue/toolbar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'
import Dropdown from 'primevue/dropdown'

import 'primevue/resources/themes/aura-light-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)
app.use(PrimeVue)
app.use(ToastService)

app.component('Button', Button)
app.component('InputText', InputText)
app.component('Dialog', Dialog)
app.component('Toolbar', Toolbar)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Toast', Toast)
app.component('Dropdown', Dropdown)


app.mount('#app')
