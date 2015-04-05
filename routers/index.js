/**
 * Created by lena on 24.03.15.
 */
module.exports = function(app){
    var PostGre = apt.get('PostGre')
    var User = PostGre.Model.extend({
        tablename: 'users'
    });

    console.log('-------index.js loaded success--------');
    app.get('/', function(reg, res, next) {
        res.status(200).send({success:'root folder'})
    });

    app.post('/user', function(reg, res, next) {
        var data = req.body;
        var user = new User(data);
        user
            .save()
        var data = req.body;

        var user = new User(data);
        user
            .save()
            .then(function (_user) {
                res.status(201).send(_user);
            })
            .otherwise(function (err) {
                res.status(200).send({success: 'root folder'})
            });
    });
}