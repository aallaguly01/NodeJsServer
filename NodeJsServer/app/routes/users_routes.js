module.exports = function (app) {
    app.get('/users', (request, response) => {
        var result = [{
            "id": 1,
            "name": "Ahmedov Allaguly Ahmedovich"
        }];
        response.send(JSON.stringify(result));
    });
};
