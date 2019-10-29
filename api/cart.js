import instance from "./axios";

export default {
    addGoods(obj){
        return instance.post('api/shopcart',obj);
    },
    getCart(){
        return instance.get('api/shopcart');
    },
    //商品增加  减
    upGoodsCount(gid,price,type){
        return instance.put('api/shopcart'+"/1",{
            gid,
            price,
            type
        })
    },
}