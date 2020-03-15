import Toast from './Toast'
const toast = {}
toast.install = Vue => {
    // 扩展 vue 插件
    const ToastCon = Vue.extend(Toast)
    const ins = new ToastCon()
    // 挂载 dom
    ins.$mount(document.createElement('div'))
    document.body.appendChild(ins.$el)
    Vue.prototype.$toast = (message, config) => {
        ins.message = message
        ins.show()
        ins.propsData = config
    }
}
export default toast
