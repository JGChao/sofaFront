import instance from "./axios";

export default {
    myqueryone(){
        return instance.get('api/my');
    }
}