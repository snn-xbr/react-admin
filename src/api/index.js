import sendRequest from './ajax.js'

const reqLogin = (username, password) => sendRequest('/login', { username, password }, 'POST')
const reqAddUser = (username, password, address) => sendRequest('/user/add', { username, password, address }, 'POST')
export {
    reqLogin, reqAddUser
}