export const API_URL = 'http://localhost:4000';

export function USER_LOGIN(body){
    return {
        url: API_URL + '/login',
        options: {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}

export function USER_REGISTER(body){
    return {
        url: API_URL + '/user/cadaster',
        options: {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }
}