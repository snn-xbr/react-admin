import Ajax from './ajax.js';

const loginAjax = (userName, Password) => {
    new Ajax("/login", {userName: userName, password: Password});
};

export default loginAjax;