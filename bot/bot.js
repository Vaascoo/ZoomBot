const Discord = require("discord.js");
const utils = require("./utils");
const TOKEN = process.env.TOKEN;

const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logged on as ${client.user.tag}`);
})

client.on("message", msg => {

    if (msg.content.slice(0, 4).toLowerCase() == "zoom"){
        let params = msg.content.split(' ').slice(1);
        if (params.length >= 1){
            if(params.length == 1 && params[0] == "help" || params.length > 2)
                msg.channel.send("Usage: zoom <aula> (teoricas / praticas / laboratoriais)")
            else if (params.length == 2)
                new utils.APIRequest(params[0], params[1]).do().then(json => {
                    msg.channel.send(json.data.content != "" ? json.data.content : "Nothing to report here.");
                }).catch(err => console.error(err));
        } else {
            msg.channel.send("Wrong parameters. Please try again.");
        }

    }
})

client.login(TOKEN);