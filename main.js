const Discord = require('discord.js');
const client = new Discord.Client();
const guild = client.guilds.cache.get("849196909435682826");
const prefix = '& ';





client.once('ready',()=> {
    console.log('Modmail.exe is online')
    client.user.setActivity('my code with SKA7' , {type:"LISTENING"}).catch(console.error);
})


client.on('message' , message =>{
 if(!message.content.startsWith(prefix) || message.author.bot) return;
 const args =  message.content.slice(prefix.length).split(/ +/);
 const command = args.shift().toLowerCase();
 if(command === 'food'){
     message.channel.send('Dont you think srivats is a gay ? :dog2:')
 }
 if(command === 'hello'){
    message.channel.send('Hello '+`<@${message.author.id}>`);

}
if(command === 'rembed'){
     let jambed = new Discord.MessageEmbed() //Ver 11.5.1 of Discord.js
    .setTitle("Modmail_Report")
    .setDescription(message.content)
    .setTimestamp()
    .setFooter('The code'+`https://github.com/silentkarambit7/modmail`)
    .setAuthor(`<@${message.author.id}>`+"'s report")
    // .setImage("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
    // .setThumbnail("https://cdn.discordapp.com/avatars/449250687868469258/1709ab4f567c56eaa731518ff621747c.png?size=2048")
    message.channel.send(jambed)
    
    message.channel.send();

}
if(command === 'punish srivats'){
   message.channel.send('srivats was whipped by his dog until he behaved like a good boi :head_bandage: ')
}
if(command === 'punish'){
    message.reply('please mention a user to punish');
}else if(command === 'punish srivats'){
    message.reply('srivats was whipped by his dog until he behaved like a good boi :head_bandage: ')
}

if(command === 'punish ' +`<@${message.mentions.users.first}>` ){
    message.reply(`<@${message.mentions.users.first}>`+'was whipped by his dog until he behaved like a good boi :head_bandage:')
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
 
