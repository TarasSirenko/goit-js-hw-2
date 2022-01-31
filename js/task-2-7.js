const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
    // console.log(login.length);
    if (4 <= login.length && login.length < 18) {
       return true
   }
    return false
};
// console.log(isLoginValid('Ajax'));

const isLoginUnique = function (allLogins, login) {
    return !allLogins.includes(login)
};
// console.log(isLoginUnique(logins, 'Poly'));

const addLogin = function (allLogins, login) {
    if (!isLoginValid(login)) {
        console.log('Ошибка! Логин должен быть от 4 до 16 символов');
        return
    }
        
    if (!isLoginUnique(allLogins, login)) {
        console.log('Такой логин уже используется!');
        return
    }
    logins.push(login) 
    
    return console.log('Логин успешно добавлен!');
    
  // твой код
};


addLogin(logins, 'Ajax')
addLogin(logins, 'robotGoogles')
addLogin(logins, 'Zod')
addLogin(logins, 'jqueryisextremelyfast')  