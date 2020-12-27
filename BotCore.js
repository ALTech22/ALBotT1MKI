/*
const express = require("express")
const app = express();
app.get("/", (request, response) =>{
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds}`);
  response.sendStatus(200);
})
app.listen(process.env.PORT)
*/
const Discord = require("discord.js");

const canvas = require("canvas")

const client = new Discord.Client();
const config = require("./info/config.json");

const jimp = require("jimp")

const commands = require("./CommandsReader.js")(config.prefix);
const commandsUnknow = require("./unknowCommand.js");


client.login(config.token);



//on bot starts
client.on("ready", () =>{
    console.log(`Logado com o bot  ${client.user.tag} em ${client.guilds.cache.size} servidores, ajudando um total de ${client.users.cache.size} pessoas`)
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores, yeee`);
    if(config.debug){ console.log(config.prefix);
    console.log(commands); 
    }
})
//on bot add to a server
client.on("guildCreate", () => {
    console.log(`Bot entrou no server ${guild.name}`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores, yeee`);
})
//on bot removed of a server
client.on("guildDelete", () => {
    console.log(`Bot saiu no server ${guild.name}`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores, yeee`);
})
client.on("guildMemberAdd", async member =>{
    member.send(` Opa você é acaba de entrar no ALServer :D, seja muito bem vindo e leia as regras em <#699771931062304778> para evitar ser banido`)
    member.send(`Por favor, também selecione o canal do Andrey que desejas: jogos(:video_game:) tutoriais/criação( :computer: ) ou os dois(:100:)`)
})
//chat interations
client.on("message", (msg) => {  

    if(!msg.author.bot && msg.guild){
    console.log(`${msg.author.username} : ${msg.content} `);

    const args = msg.content.split(" ");
    
    if(commands[args[0]]){ commands[args[0]](client,msg);} 
    else if(args[0].split("")[0] == config.prefix){ commandsUnknow(client, msg);}
    }
})
/*
// welcome message
client.on("guildMemberAdd", async member =>{

    //define the channel to send the message with ChannelID
    const enterch = await client.channels.cache.get(config.enterchannel);

    //configure the canvas (type 2D, weith[700] and height[250] and define the dir of background image)
    const canva = canvas.createCanvas(700, 250); //define the  weith(700) and height(250) of the canvas
    const ctx = canva.getContext('2d')// set/define the context of image, in this case 2D
    const background = await canvas.loadImage("./assets/img/fundoentrada.png") //load the background image in the dir

    //draw the background image
    ctx.drawImage(background, 0, 0, canva.width, canva.height)

    //Create a stroke(border) for the message
    ctx.strokeStyle = '#ffffff'; //define the border color, in this case the color is white
    ctx.strokeRect(0,0, canva.width, canva.height); //define the locale of message receive the stroke

    //text configuration
    ctx.font = '50px sans-serif'; //define the size and the font of textsd
    ctx.fillStyle = '#000000' //define the text collor, in this case is white
    ctx.fillText(member.displayName, canva.width /3.5, canva.height - 50); //define the content of the text(name of new server member) and the locale of the text in the message

    //"mask" this commands configure the avatar imagem of member, for make a circle like avatar drawning
    ctx.beginPath(); //starts the transformation
    ctx.arc(110, 110, 100, 0, Math.PI * 2, true) //define the size of avatar
    ctx.closePath(); //end of the transformation
    ctx.clip(); //Clip off the region you drew on

    const avatar = await canvas.loadImage(member.user.displayAvatarURL({format: 'jpg'})); //create a const with avatar icon

    ctx.drawImage(avatar, 10, 10, 200, 200); //draws the avatar

    const attachment = new Discord.MessageAttachment(canva.toBuffer(), 'welcome.png') //create the "welcome.png", the welcome message with png format
    enterch.send(`wellcome to the server, ${member}, you are the ${client.users.cache.size}º member in this server :D yeeeh`, attachment) //send the message

})

// member exit message
client.on("guildMemberRemove", async member => {
    //define the channel to send the message with ChannelID
    const exitch = await client.channels.cache.get(config.exitchannel);

    //configure the canvas (type 2D, weith[700] and height[250] and define the dir of background image)
    const canva = canvas.createCanvas(700, 250); //define the  weith(700) and height(250) of the canvas
    const ctx = canva.getContext('2d')// set/define the context of image, in this case 2D
    const background = await canvas.loadImage("./assets/img/fundosaida.png") //load the background image in the dir

    //draw the background image
    ctx.drawImage(background, 0, 0, canva.width, canva.height)

    //Create a stroke(border) for the message
    ctx.strokeStyle = '#ffffff'; //define the border color, in this case the color is white
    ctx.strokeRect(0,0, canva.width, canva.height); //define the locale of message receive the stroke

    //text configuration
    ctx.font = '50px sans-serif'; //define the size and the font of textsd
    ctx.fillStyle = '#000000' //define the text collor, in this case is white
    ctx.fillText(member.displayName, canva.width /3.5, canva.height - 50); //define the content of the text(name of new server member) and the locale of the text in the message

    //"mask" this commands configure the avatar imagem of member, for make a circle like avatar drawning
    ctx.beginPath(); //starts the transformation
    ctx.arc(110, 110, 100, 0, Math.PI * 2, true) //define the size of avatar
    ctx.closePath(); //end of the transformation
    ctx.clip(); //Clip off the region you drew on

    const avatar = await canvas.loadImage(member.user.displayAvatarURL({format: 'jpg'})); //create a const with avatar icon

    ctx.drawImage(avatar, 10, 10, 200, 200); //draws the avatar

    const attachment = new Discord.MessageAttachment(canva.toBuffer(), 'welcome.png') //create the "welcome.png", the welcome message with png format
    exitch.send(`goodbye ${member}`, attachment) //send the message
})

*/
//welcome message with jimp(error)
/*client.on("guildMemberAdd", async member => {
    const canal = await client.channels.cache.get(config.enterchannel);
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK);
    let mask = await jimp.read("./assets/img/mascara.png")
    let fundo = await jimp.read("./assets/img/fundo.png")

    jimp.read(user.avatar.url).then(avatar => {
        avatar.resize(130,130);
        mask.resize(130,130);
        avatar.mask(mask);
        fundo.print(fonte, 170, 175, member.user.username);
        fundo.composite(avatar,40,90).write("welcome.png");
        canal.send(``, {files: ["welcome.png"]});
        if(config.debug) console.log("tudo certo");
    }).catch(err => {
        if(config.debug) console.log("erro ao carregar a imagem");
    })
}) */