const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Great job!"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "This is so cool!"
    },
    {
        user_id: 5,
        post_id: 4,
        comment_text: "Awesome sauce!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Fantastic work!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Go YOU!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Loving this."
    },
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Very clever."
    },
    {
        user_id: 5,
        post_id: 1,
        comment_text: "Love this application! Will be using it more often! :-)"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;