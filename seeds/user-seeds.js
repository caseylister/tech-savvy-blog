const { User } = require('../models');

const userData = [
    {
        username: "b_ryce",
        email: "b_ryce@gmail.com",
        password: "secretpw1"
    },
    {
        username: "meimei_queen",
        email: "queen@gmail.com",
        password: "secretpw2"
    },
    {
        username: "dogefather",
        email: "doge@gmail.com",
        password: "secretpw3"
    },
    {
        username: "c_list",
        email: "clist@gmail.com",
        password: "secretpw4"
    },
    {
        username: "sydthekid",
        email: "syd_squid@gmail.com",
        password: "secretpw5"
    },
    {
        username: "brother11",
        email: "bro_master@gmail.com",
        password: "secretpw6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;