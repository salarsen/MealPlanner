const User = require('mongoose').model('User');

module.exports = {
    login(request, response){
        User.findOne({ email : request.body.email })
            .then(user => {
                if(!user) { throw new Error(); }

                return User.validatePassword(request.body.password, user.password)
                    .then(() => {
                        completeLogin(request, response, user);
                    });
            })
            .catch(error => {
                response.status(401).json('Email/password combo does not exist.');
            });
    },
    register(request, response){
        console.log('Registering: ',request.body)
        User.create(request.body)
            .then(user => {
                completeLogin(request, response, user);
            })
            .catch(error => {
                console.log(error);
                response.json(422).json(
                    Object.keys(error.errors).map(key => error.errors[key].message)
                );
            });
    },
    logout(request, response){
        console.log('Logout');

        request.session.destroy();
        response.clearCookie('userId');
        response.clearCookie('expiration');
        response.json(true);
    }
};

function completeLogin(request, response, user){
    console.log('Completing Login');
    request.session.user = user.toObject();

    delete request.session.user.password;

    response.cookie('userId', user._id.toString());
    response.cookie('expiration', Date.now() + 86400 * 1000);

    response.json(user);
}
