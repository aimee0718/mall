import { request } from './request'

export function getDetail (iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend () {
  return request({
    url: '/recommend'
  })
}


export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.lowPrice = itemInfo.lowPrice
    this.newPrice = itemInfo.price
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.score = shopInfo.score
    this.shopLogo = shopInfo.shopLogo
    this.shopGoods = shopInfo.cGoods
    this.shopSells = shopInfo.cSells
  }
}

export class DetailInfo {
  constructor(detailInfo) {
    this.desc = detailInfo.desc
    this.detailImage = detailInfo.detailImage
  }
}