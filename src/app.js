import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

let avatar = "";

const users = []

// {
//     username: 'gabriel',
//     avatar: "https://media.discordapp.net/attachments/551138705180721167/1085360159800447027/image.png"
// }

const tweets = []

app.get("/tweets", (request, response) => {

    if(tweets.length > 10){
        const maxTweets = tweets.slice(tweets.length -10);
        return response.send(maxTweets)
    }

    response.send(tweets)
})

app.post("/tweets", (request, response) => {
    const {username, tweet} = request.body;

    const validation = users.some(users => {
        if(users.username === username){
            avatar = users.avatar;
            return true;
        }
    })
    if(validation){
        const lastTweet = {
		username: username,
		avatar: avatar,
		tweet: request.body.tweet
	    }
            
        tweets.push(lastTweet);
        return response.send("ok")
    }
    response.status(401).send("deu ruim");
})

app.post("/sign-up", (request, response) => {
    const user = request.body;
    users.push(user)
    response.send("ok");

})

app.listen(5000, () => console.log("servidor rodando na porta 5000"))