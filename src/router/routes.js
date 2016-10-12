import App from '../components/App.vue'
import Qrpage from '../components/Qrpage.vue'
import Teamvs from '../components/Teamvs.vue'
import Garage from '../components/Garage.vue'
import Detail from '../components/Detail.vue'
import List from '../components/List.vue'

// route map
export default [
  { path: '', component: App },
  { path: '/team', component: Teamvs},
  { path: '/qrcode', component: Qrpage},
  { path: '/garage', component: Garage},
  { path: '/detail', component: Detail},
  { path: '/list', component: List}
]