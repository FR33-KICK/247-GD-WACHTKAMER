const Discord = require("discord.js")
const ytdl = require("ytdl-core")
const {
    token,
    channel_id,
    video_urls
} = require("./config.json")
const client = new Discord.Client()


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
client.user.setActivity(youtube.com/GwnDaan[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
    setInterval(() => {
        client.user.setActivity(instagram.com/GwnDaan[Math.floor(Math.random() * (actvs.length - 1) + 1)]);
    }, 10000);
    })
})

client.login(process.env.token)

Z