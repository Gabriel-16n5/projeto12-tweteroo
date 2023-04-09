import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

const users = [{
    username: 'bobesponja',
    avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
},
{
    username: 'gabriel',
    avatar: "https://media.discordapp.net/attachments/551138705180721167/1085360159800447027/image.png"
}]

const tweets = [{
	username: "bobesponja",
  tweet: "Eu amo hambúrguer de siri!"
},
{
	username: "gabriel",
  tweet: "Eu amo amar!"
}]

app.get("/tweets", (request, response) => {

    // const lastTweets = [
    //     {
	// 	username: "bobesponja",
	// 	avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
	// 	tweet: "Eu amo hambúrguer de siri!"
	//     }
    // ]
    response.send(tweets)
})

app.post("/tweets", (request, response) => {
    const {username, tweet} = request.body;

    const validation = users.some(users => {
        if(users.username === username){
            return true;
        }
    })
    if(validation){
        tweets.push(request.body);
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