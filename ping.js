module.exports = {
name: 'ping',
description: 'code for ping command',
execute(message , args){
    message.channel.send('ping!')
}
}