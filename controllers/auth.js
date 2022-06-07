const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

var users = [
    {
        username: 'thao',
        password: '$2b$08$vN0G2DuhZjBgDi0.MXzEVO1/qPbzQV4gRpF1a41tiAKeb8lYxXe3e',
        email: 'thaovu@miu.edu',
        phone: '12345',
        role: 'admin',//admin or user
        address: 'Fairfield, IA'
    },

]

let PRIVATE_KEY = "CS569-2022"
exports.login = async (req, res) => {
    
    const { username, password } = req.body;
    console.log('body: ', req.body)
    if (username && password) {
        const user = users.find(x => x.username = username);
        console.log(user)
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                //Create access token here
                const accessToken = jwt.sign(
                    { username, role: user.role, id: user._id },
                    PRIVATE_KEY, { expiresIn: 4 * 60 * 60 });
                res.send({success: true, token: accessToken});
            } else {
                res.send({success: false, message: 'Wrong password'})
            }

        } else {
            res.send({success: false, message: 'The user is not found'})
        }
    } else {
        res.send({success: false, message: 'Please provide the username and password'})
    }
}

exports.authorize = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, PRIVATE_KEY, (err, user) => {
            req.user = user;
            if (err) {
                if (err.message.includes('expired')) {
                    res.send({success: false, message: 'Token is expired, please login again'})
                } else {
                    res.status(403).send({success: false, message: 'Forbidden'});
                }
            }
            else {
                next();
            }
        })
    } else {
        res.status(401).send({success: false, message: 'Unauthenticated'});
    }
}

exports.adminAuthorize = (req, res, next) => {
    if (req.user.role === 'admin') {
        next();
    } else {
        res.send({success: false, message: "Unauthorized. Only admin can change product"})
    }
}

exports.add = async (req, res) => {
    console.log("add new: ", req.body)
    let data = {...req.body};
    data.password = bcrypt.hashSync(data.password, 8);//hashing
    data.id = users.length;
    users.push(data)
    res.send({success: true, data: data})
}


exports.getAll = (req, res) => {
    res.send({success: true, data: users})
}