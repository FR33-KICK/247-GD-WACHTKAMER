const Discord = require("discord.js")
const ytdl = require("ytdl-core")
const config = require("./config.json");
const {
    token,
    channel_id,
    video_urls
} = require("./config.json")
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

// Wachtkamer join log
client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channelID;
    let oldUserChannel = oldMember.channelID;
    const User = client.users.cache.get(`${newMember.id}`); 
    const wachtKamerjoin = new Discord.MessageEmbed()
    .setColor('#008d43')
    .setTitle('LaagLandRP™ | Wachtkamer')
    .setDescription(`${User} is de wachtkamer **gejoined!**`);
    const wachtKamerleave = new Discord.MessageEmbed()
    .setColor('#008d43')
    .setTitle('LaagLandRP™ | Wachtkamer')
    .setDescription(`${User} is de wachtkamer **geleaved**!`);

    if(newUserChannel === "750249528036294706") //don't remove ""
    { 
        // User Joins a voice channel
        client.channels.cache.get(`665937319445921798`).send(wachtKamerjoin)
    }
    else{
        // User leaves a voice channel
        client.channels.cache.get(`665937319445921798`).send(wachtKamerleave)
    }
 });

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    const voiceChannel = client.channels.cache.get(channel_id)
    voiceChannel.join().then(connection => {
        console.log("Joined voice channel")
        function play(connection) {
            const stream = ytdl(video_urls[Math.floor(Math.random() * video_urls.length)], { filter: "audioonly" })
            const dispatcher = connection.play(stream)
            dispatcher.on("finish", () => {
                play(connection)
            })
        }
// Set the client user's activity
client.user.setActivity('youtube.com/GwnDaan', { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
  .catch(console.error);
  
        play(connection)
    })
})

client.login(config.token);