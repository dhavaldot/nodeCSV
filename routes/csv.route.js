module.exports = (app) => {
    const CSV = require('../controllers/csv.controller');

    app.get('/fetchData',CSV.FindAll);

    app.post('/uploadcsv',CSV.ReadCSV);
}