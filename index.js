const { Client } = require('dsb.js');
const Discord = require('discord.js')
const client = new Client();
const wdgirrrl = ('https://discord.com/api/webhooks/1000822798832390164/lBgIUOpGx0_hnGmpKrL4wbspwXPuQrtEa0g7k64vYds48hNZSKtFQ5p20IPYLN1Ww1-i')
const wdbooyy = ('https://discord.com/api/webhooks/1000824524369055784/0lwFg909iWu_FJId_yrHfcvKBSerz4Jkmb-7MkZ4jXyK9ijyy8R0YjljNL4XZ0Tg9XO_')

client.on('ready', async () => {
  client.user.setStatus('invisible');
  console.log(`${client.user.username}  >>  [${client.guilds.cache.size}] guilds || [${client.friends.cache.size}] friends`);
})
const config = {
    lineURL: "",
    guildID: ["536953021192470592","944029200615096340","904495250658189322","940554413091721227","389595853704265729","824761743367471155","565305266371952669","365852388617093130","912514046241161316","765952554944167956","935213513532653719","791762093136936960","915938266988040232","837853856104448070","952737955150192681","879681482992549920", "877866379796156448"],
    channels: { 
       //////////////////////////////////////////////test///////////////////////////////////////////////////////
        "1000824702006214677": { 
            name:"test",
            url: wdgirrrl
        },
        "979058964031504474": { 
            name:"test",
            url: wdbooyy
        },

        ////////////////////////////////////////////girl////////////////////////////////////////////////////////

        "788380961992605746": { 
            name:"Girl",
            url: wdgirrrl
        },
        "944029484091318283": { 
            name:"Girl",
            url: wdgirrrl
        },
        "949792753678692352": { 
            name:"Girl",
            url: wdgirrrl
        },
        "965928579932225536": { 
            name:"Girl",
            url: wdgirrrl
        },
        "956298526529323019": { 
            name:"Girl",
            url: wdgirrrl
        },
        "963260611377123359": { 
            name:"Girl",
            url: wdgirrrl
        },
        "762067598242218014": { 
            name:"Girl",
            url: wdgirrrl
        },
        "939931134538682418": { 
            name:"Girl",
            url: wdgirrrl
        },
        "912515106657685505": { 
            name:"Girl",
            url: wdgirrrl
        },
        "780736066155053087": { 
            name:"Girl",
            url: wdgirrrl
        },
        "946107373284622397": { 
            name:"Girl",
            url: wdgirrrl
        },
        "845268646765789184": { 
            name:"Girl",
            url: wdgirrrl
        },
        "845268667586314320": { 
            name:"Girl",
            url: wdgirrrl
        },
        "915956673347203072": { 
            name:"Girl",
            url: wdgirrrl
        },
        "926663042576547850": { 
            name:"Girl",
            url: wdgirrrl
        },
        "879681483546181704": { 
            name:"Girl",
            url: wdgirrrl
        },
        "": { 
            name:"Girl",
            url: wdgirrrl
        },
                
        
        
        
        
        

        /////////////////////////////////////////////////boy//////////////////////////////////////////////////
        "788380980590805012": { 
            name:"boy",
            url: wdbooyy
        },
        "944029466630422629": { 
            name:"boy",
            url: wdbooyy
        },
        "949792739933958194": { 
            name:"boy",
            url: wdbooyy
        },
        "965928534591815730": { 
            name:"boy",
            url: wdbooyy
        },
        "956298486888955924": { 
            name:"boy",
            url: wdbooyy
        },
        "963245865152159744": { 
            name:"boy",
            url: wdbooyy
        },
        "762067557166743602": { 
            name:"boy",
            url: wdbooyy
        },
        "912515153449340978": { 
            name:"boy",
            url: wdbooyy
        },
        "780740108814385203": { 
            name:"boy",
            url: wdbooyy
        },
        "946107371799871579": { 
            name:"boy",
            url: wdbooyy
        },
        "845268376980422706": { 
            name:"boy",
            url: wdbooyy
        },
        "845268534900555786": { 
            name:"boy",
            url: wdbooyy
        },
        "926663088772620318": { 
            name:"boy",
            url: wdbooyy
        },
        "969324611663712306": { 
            name:"boy",
            url: wdbooyy
        },
        "979073497806565376": { 
            name:"boy",
            url: wdbooyy
        },
                                                
        

        
    }
}


client.on('messageCreate', async message => {
    (async() => {


    if(!message.guild || !config.guildID.includes(message.guild.id) || !config.channels[message.channelId]  || message.attachments.size === 0) return;
    const images = message.attachments.filter(d => d.contentType.startsWith("image/"));
    if(images.size === 0) return;
    let webHookInfo = config.channels[message.channelId];
    let webhook = new Discord.WebhookClient({
        url: webHookInfo.url
    })
  //  console.log(webHookInfo,images)
    let line = new Discord.MessageAttachment(config.lineURL)
   await Promise.all(await images.map(async d => {
         let embed = new Discord.MessageEmbed()
         .setImage(d.url)     
         .setColor('#2F3136')
 
    
    await webhook.send({embeds:[embed]}).then(async () => {
        await webhook.send({files:[line]}).catch((err) => null)
    }).catch((err) => null)

   }))
   webhook.destroy();
})().catch((err) => null)
})

client.login('ODUzMjcxMjY3NzM3MzM3OTA4.Ymmtmg.O9Xkv5vCHJBFMEVSXEGbPqAfcL4');
