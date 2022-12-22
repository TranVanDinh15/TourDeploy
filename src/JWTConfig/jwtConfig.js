const sign = require('jwt-encode');
const secret = 'dinhpro153';
const data = {
    email: 'vandinh410807@gmail.com',
    password: '123456',
};
const jwt = sign(data, secret);
console.log(jwt);