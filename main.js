const Discord = require('discord.js');
const client = new Discord.Client();
const guild = client.guilds.cache.get("849196909435682826");
const prefix = '& ';
const taggedUser = message.mentions.users.first();




client.once('ready',()=> {
    console.log('Modmail.exe is online')
    client.user.setActivity('my code with SKA7' , {type:"LISTENING"}).catch(console.error);
})


client.on('message' , message =>{
if(!message.content.startsWith(prefix) || message.author.client)return;
const args = message.content.slice(prefix.length).trim().split(/ +/);
const command = args.shift().toLowerCase();

 if(command === `hello`){
    message.channel.send('Hello '+`<@${message.author.id}>`);
}
if(command === `blast`){
    if(!args.length){
        return message.channel.send(`you didn't select anyone to blast , ${message.author} !`)
    }else if(args[0]=== taggedUser ){
      message.channel.send(`You want to blast: ${taggedUser.username}`)
    }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
}
if(command === `punish`){
    
    message.channel.send(`<@${taggedUser.id}>`+'was whipped by his dog until he behaved like a good boi :head_bandage:')
}
});


client.on('message' , (message)=>{
    if(message.author.bot){
        return;
    }
    var msg = message.content;
    var A = message.author.username;
    var D = message.author.discriminator;
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(A)
    .setDescription('**Your report was registered**')
    .setFooter(A + "#" + D)
    .setTimestamp()
    // var ez= '@'+message.author.username
    if(message.channel.type == 'dm'){
        client.users.fetch(message.author.id).then(user=>user.send(embed).catch(err => console.log(err)))
    }
   
})
// client.on("message", message => {
//     let xhannel = client.channels.cache.find(channel => channel.id === '859976932782374944');
//     if (message.channel.type == "dm" && message.author.id !== '859742200049172480'){
//         xhannel.send( `<@${message.author.id}>` + ' said ' + message.content); 
//     } 
//   });




client.on("message", message => {
    let xhannel = client.channels.cache.find(channel => channel.id === '859976932782374944');
    if (message.channel.type == "dm" && message.author.id !== '859742200049172480'){
        let jambed = new Discord.MessageEmbed() //Ver 11.5.1 of Discord.js
        .setColor("RANDOM")
        .setTitle(`${message.author.username}`+"'s Moderation Concern / Server problem")
        .setDescription(message.content)
        .setTimestamp()
        .addField("The Code","https://github.com/silentkarambit7/modmail")
        .setFooter("Modmail v1.2")
        // .setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
        .setThumbnail("https://cdn.discordapp.com/attachments/849632345363447829/860013627644575754/report_icon.jpg")
        xhannel.send(jambed);  
    } 
  });


client.login(process.env.BOT_KEY);
 
