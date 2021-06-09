import Toast from './Toast'

const toast = {
  install(vue) {
    vue.component('toast', Toast)
  }
}
  
export default toast