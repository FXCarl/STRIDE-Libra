import App from '../components/App.vue'
import Qrpage from '../components/Qrpage.vue'
import Teamvs from '../components/Teamvs.vue'
import Garage from '../components/Garage.vue'

// route map
export default [
  { path: '', component: App },
  { path: '/team', component: Teamvs},
  { path: '/qrcode', component: Qrpage},
  { path: '/garage', component: Garage}
]