const basicInfo = require('./basicInfo');
const components = require('./components');
const tasks = require('../routes/tasks'); 

module.exports = {
    ...basicInfo,
    ...components,
    ...tasks,
};