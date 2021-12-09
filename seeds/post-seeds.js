const { Post } = require('../models');

const postData = [
    {
        title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        post_content: "Enim aliquam perspiciatis saepe. Ratione eos, maiores libero repellendus adipisci, vel labore sapiente fugit ullam facere animi temporibus nulla odio nihil suscipit!",
        user_id: 5
    },
    {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        post_content: "Earum culpa minus quos aliquam nostrum, corporis itaque sit error fuga. Dolorem voluptatum maiores facere reprehenderit ipsum iste pariatur natus asperiores voluptates!",
        user_id: 2
    },
    {
        title: "Velit debitis rerum distinctio aspernatur",
        post_content: "Cumque fugiat, voluptates asperiores ipsum excepturi saepe repudiandae ipsa. Facere minus cupiditate quaerat, molestiae sunt natus minima tenetur rerum cumque unde architecto.",
        user_id: 1

    },
    {
        title: "Coding is fun!",
        post_content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi deserunt laboriosam odio rem perferendis repudiandae, molestiae minus optio. , excepturi nisi. Maiores unde exercitationem nemo!",
        user_id: 4
    },
    {
        title: "Eveniet, et.",
        post_content: "Voluptates illum harum, atque facere magni itaque esse. Rem ducimus nobis recusandae repellendus pariatur magni aliquid ab ipsum commodi quasi. At quam culpa labore eveniet beatae, illo fuga inventore laborum quae ipsam.",
        user_id: 3
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;