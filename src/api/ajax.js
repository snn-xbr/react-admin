const axios = require('axios');

class Ajax {
    constructor(url, params={}, method="GET"){
        this.baseUrl = "http://localhost:3002";
        this.method = method;
        this.url = this.baseUrl + url;
        this.params = params;
        this.sendRequest();
    }

    sendRequest(){
        let promise;
        if(this.method === "GET") {
            console.log(this.url, this.params);
            promise = axios.get(this.url, this.params);
        } else if(this.method === "POST") {
            promise = axios.post(this.url, this.params);
        }
        return promise;
    }
}

export default Ajax;