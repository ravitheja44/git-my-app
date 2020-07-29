import axios from 'axios';

export const register = newUser => {
    return axios.post('users/register',{
        first_name:newUser.first_name,
        last_name:newUser.last_name,
        email:newUser.email,
        password:newUser.password
    })
    .then(Response => {
        console.log("Registered")
    })
}

export const login = user => {
    return axios.post('users/login', {
        email:user.email,
        password:user.password
    })
    .then(Response => {
        localStorage.setItem('usertoken',Response.data)
        return Response.data
    })
    .catch(err => {
        console.log(err)
    })
}