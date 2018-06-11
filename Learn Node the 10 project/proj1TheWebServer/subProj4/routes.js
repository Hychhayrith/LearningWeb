let user = {
    name: 'Hy Chhayrith',
    age: 12
}
const App = require('./app');

module.exports =  (app) => {
    app.post('/subscribe',user);
}