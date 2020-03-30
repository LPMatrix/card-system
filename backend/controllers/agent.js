const User = require("../models/users");   // Fetch the Users Database Model
const bcrypt = require("bcryptjs")      // To encrypt password
const crypto = require("crypto");
// Add a new User
exports.postAddUser = (req, res, next) => {
    const firstname = req.body.firstname;
    const middlename = req.body.middlename;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const gender = req.body.gender;
    const dob = req.body.dob;
    const zone = req.body.zone;
    const unit = req.body.unit;
    const phone_no = req.body.phone_no;
    const state = req.body.state;
    const vehicle_no = req.body.vehicle_no;
    const password = "12345678";

    crypto.randomBytes(5, (err, Buffer)=>{
        if(err) {
            return res.status(401).json({
                message: 'An unknown error occured!'
            });
        }
        const uniqueId = "usr-" + Buffer.toString('hex');
        return bcrypt.hash(password, 12)
        .then(hashedPassword => {
            return User.findOne({email:email})
            .then(user => {
                if(user) {
                    return res.status(401).json({
                        message: "Email already exist!"
                    })
                }
                const newUser = new User({
                    firstname : firstname,
                    middlename : middlename,
                    lastname : lastname,
                    email : email,
                    gender : gender,
                    dob : dob,
                    zone : zone,
                    unit : unit,
                    phone_no : phone_no,
                    state : state,
                    vehicle_no : vehicle_no,
                    uniqueId : uniqueId,
                    password : hashedPassword,
                    agentId : req.user._id
                    
                });
                newUser.save()
                .then(result => {
                    console.log(result);
                    res.status(200).json({
                        user : result
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        message : err
                    });
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                message : err
            })
        })

    })
    
}

// Get all users

exports.getUsers = (req, res, next) => {
    User.find().populate('agentId').sort({_id : -1})
    .then(users => {
        // console.log(users);
        res.status(200).json({
            users : users
        })
    })
    .catch(err => {
        res.status(500).json({
            message : err
        })
    })
}
