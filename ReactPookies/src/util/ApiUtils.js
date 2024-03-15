import { API_BASE_URL } from '../constants';

const ACCESS_TOKEN = 'accessToken'; 

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    
    const token = localStorage.getItem(ACCESS_TOKEN);
    if(token) {
        headers.append('Authorization', 'Bearer ' + token);
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}
