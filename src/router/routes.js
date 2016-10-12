import App from '../components/App.vue'
import Qrpage from '../components/Qrpage.vue'
import Teamvs from '../components/Teamvs.vue'
import Garage from '../components/Garage.vue'
import Detail from '../components/Detail.vue'

// route map
export default [
  { path: '', component: App },
  { path: '/team', component: Teamvs},
  { path: '/qrcode', component: Qrpage},
  { path: '/garage', component: Garage},
  { path: '/detail', component: Detail}
]