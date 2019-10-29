import instance from "./axios";

export default {
    collectqueryone(){
        return instance.get('api/collect');
    }
}