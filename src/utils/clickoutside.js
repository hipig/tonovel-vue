const clickoutsideContext = '@@clickoutsideContext';

export default {
  /*
   @param el 指令所绑定的元素
   @param binding {Object}
   @param vnode vue编译生成的虚拟节点
   */
  bind (el, binding, vnode) {
    const documentHandler = function(e) {
      if(!vnode.context || el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        vnode.context[el[clickoutsideContext].methodName](e)
      } else {
        el[clickoutsideContext].bindingFn(e);
      }
    }
    el[clickoutsideContext] = {
      documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    }
    setTimeout(() => {
      document.addEventListener('click', documentHandler);
    }, 0)
  },
  update (el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
    el[clickoutsideContext].bindingFn = binding.value;
  },
  unbind(el) {
    document.removeEventListener('click', el[clickoutsideContext].documentHandler);
  }
}
