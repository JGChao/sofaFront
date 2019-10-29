import instance from "./axios";

export default {
    placeOrder(){
        return instance.post('api/orders');
    },
    getOrdersDetail(ordernum){
        return instance.get('api/orders'+'/'+ordernum)
    },
    orderState(state){
        return instance.get('api/orders'+'?state='+state);
    }
}