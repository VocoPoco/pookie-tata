import { API_BASE_URL } from '../constants';

const ACCESS_TOKEN = '123';

interface RequestOptions {
    url: string;
    method: string;
    body?: string;
    headers?: Headers;
}

const request = (options: RequestOptions): Promise<any> => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
        headers.append('Authorization', `Bearer ${token}`);
    }

    const defaults = { headers: headers };
    const requestOptions = { ...defaults, ...options };

    return fetch(requestOptions.url, requestOptions)
        .then(response =>
            response.json().then(json => {
                if (!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};

interface LoginRequest {
    usernameOrEmail: string;
    password: string;
}

interface SignupRequest {
    username: string;
    email: string;
    password: string;
}

export const login = (loginRequest: LoginRequest): Promise<any> => {
    return request({
        url: API_BASE_URL + "/auth/signin",
        method: 'POST',
        body: JSON.stringify(loginRequest),
    }).then(data => {
        if (data.accessToken) {
            localStorage.setItem(ACCESS_TOKEN, data.accessToken);
        }
        return data;
    });
};

export const signup = (signupRequest: SignupRequest): Promise<any> => {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest),
    });
};
