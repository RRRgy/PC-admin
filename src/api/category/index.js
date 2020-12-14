import request from '@/utils/request'

export default {


  getCategorys1() {

    // 修改为request.xxx()
    return request.get('/admin/product/getCategory1')
  },


  getCategorys2(category1Id) {

    return request.get('/admin/product/getCategory2/' + category1Id)
  },


  getCategorys3(category2Id) {

    return request.get('/admin/product/getCategory3/' + category2Id)
  }
}
