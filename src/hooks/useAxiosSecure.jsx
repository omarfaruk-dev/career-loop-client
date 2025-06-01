import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
    baseURL: 'https://career-loop-server.vercel.app'
})

const useAxiosSecure = () => {

    const { user, signOutUser } = useAuth();

    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    });

    //response interceptor
    axiosInstance.interceptors.response.use(response => {
        return response;
    },
        error => {
            if(error.status === 401 || error.status === 403) {
                signOutUser()
                .then(()=>{
                    console.log('signout for 401');
                })
                .catch(error => console.log(error))
            }
            console.log('error in interceptor', error);
            return Promise.reject(error)
        }
)

    return axiosInstance;
};

export default useAxiosSecure;