export default {
  addCart (context, payload) {
    return new Promise((resovle, reject) => {
      let product = context.state.cartList.find(item => item.iid === payload.iid)
      if (product) {
        context.commit('addCounter', product)
        resovle('当前商品数量+1')
      } else {
        payload.count = 1
        context.commit('addToCart', payload)
        resovle('添加新的商品')
      }
    })
  }
}