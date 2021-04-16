
var token = undefined;

export function getToken(request) {

    if(request == null && token != undefined){
        return token;
    }

    else if(request != null) {
        token = request
    }

    else  {
        return false
    }
}
