const Discord = require("discord.js")
const bot = new Discord.Client();

const { prefix, token } = require("./Data/config.json");

bot.on("ready", () => {
    console.log("Bot is on!");
    bot.channels.cache.get("719639298495873024").send("Bot is on!");
})

bot.on("message", message => {
    let args = message.content.substring(prefix.length).split(" ");
    if(message.author.bot) return;

    if(message.content.toLowerCase() === "test"){
        message.reply("Test complete!");
    }
    if(message.content.toLowerCase().includes("msg")){
        const array = [
            "1",
            "2",
            "3",
            "4",
            "5"
        ]
        const Random = Math.floor(Math.random() * array.length)

        message.channel.send(array[Random])
    }

    if(!message.content.startsWith(prefix)) return;

    switch(args[0]){
        case "ping":
        message.channel.send("Pong. :ping_pong:")
        break;
    case "clear":
        if(!args[1]) return message.channel.send("How many messages do you want to clear? (You provided none!)")
        if(isNaN(args[1])) return message.channel.send("${args[1]} is not a number!");
        message.channel.bulkDelete(args[1]);
        break;
    case "say":
        if(!args[1]) return message.channel.send("What do you want to say?");
        let say = args.splice.apply(1).join(" ")

        const channel = bot.channels.cache.get("717524386730737674");
        message.channel.bulkDelete(1);
        channel.send(say)
        break;
    case "attach":
        const embed = new Discord.MessageEmbed()
        .setTitle("Poleyz_Playz")
        .setDescription("Subsribe")
        .setAuthor(message.member.displayName)
        .setThumbnail(message.author.avatarURL())
        .setColor("BLURPLE")
        .setURL("https://www.youtube.com/channel/UCV0wWHP_7yaRDfnhNbFjPlQ")
        .addField("Channel", "Watch his videos.")
        .addFields(
            
            { name: "Subscribe", value: "Subscribe", inline: true },
            { name: "Like", value: "Like", inline: true },
            { name: "Notifacations", value: "Turn on the notifacations so you dont miss any videos", inline: true }
        )
        .setTimestamp()
        .setFooter("Subscribe to Poley_Playz")
        message.channel.send(embed);
        break;
    }   
})

bot.login(token)