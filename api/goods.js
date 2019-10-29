import instance from "./axios";

export default {
    queryCoodss: function(params) {
        return instance.get('api/goods',{
            params
        });
    },
    getCoodsLevel1(){
        return instance.get('api/goods'+'/create')
    },
    deleteCoods($gid) {
        return instance.delete('api/goods'+ '/'+$gid);
    }
    ,
    insertCoods(obj){
        return instance.post('api/goods',obj);
    },
    updateCoods(obj){
        obj = Object.assign({},obj);
        let cid = obj.cid;
        delete obj.cid;
        return instance.put('api/goods'+'/'+cid,obj);
    },
//    获取一条数据
    queryGood(gid){
        return instance.get('api/goods'+"/"+gid);
    },

//    推荐商品
    RecommendGoods(typeid,gid){
        return instance.get('api/recommendgoods',{
            params:{
                typeid,gid
            }
        })
    },

//    购物车总条数
    getTotal(){
        return instance.get('api/shopcart/1');
    }

}