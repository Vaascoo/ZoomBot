const axios = require("axios").default;
const path = process.env.API_PATH;


class APIRequest {
    constructor(name, type){
        this._name = name;
        this._type = type;
    }
    async do(){
        return axios.get(path, {
            params : { 
                name : this._name, 
                type : this._type 
            }
        })
    }
}

module.exports.APIRequest = APIRequest;