const Discord = require('discord.js');

const client =new Discord.Client();

const token ="NDg5ODc0ODY5NTA1MzU5ODky.Dn5PUA.mRRPJn-aNI7u5lRyp4sFgi-bhmw";

client.on ("ready", () => {
    console.log ("ready!");

    client.user.setActivity ("hello!");
});

const prefix ="ka!";
client.on("message", (message) => {

    if(message.author.bot) return;

    if(message.content.startsWith (prefix + "hello!")) {
        message.reply ("Hi!");
    }
});

client.on('message', (message) => {
	if (message.content == prefix+'rps') {
	var rand6 = Math.round(Math.random()*3)
	switch (rand6) {

		case 0: rand6=("Piedra"); 
		
		break;

		case 1:
       		        rand6=("Papel");
       		        
 		break;
					
		case 2:
       		        rand6=("Tijeras");
       		        
 		break;

		case 3:
       		        rand6=("Tijeras");
       		        
 		break;
		}

	message.channel.send (rand6);
	}
});

client.on("message", message=> {
	if(message.content ==prefix + "avatar") {
		message.channel.send(message.author.avatarURL);
	}
});

client.on('message', (message) => {
	if (message.content == prefix+'sad') {
	var rand2 = Math.round(Math.random()*3)
	switch (rand2) {

		case 0: rand2=("https://i.imgur.com/FoHPk21.gif"); 
		
		break;

		case 1:
       		        rand2=("https://i.imgur.com/ZcSy6qT.gif");
       		        
 		break;
					
		case 2:
       		        rand2=("https://i.imgur.com/9qDl6iv.gif");
       		        
 		break;
			
		case 3:
       		        rand2=("https://i.imgur.com/WUkVXoU.gif");
       		        
 		break;
			}
	message.channel.send(rand2);
	}
});

client.on("message", (message) => {
	if (message.content =="Hola") {
		message.channel.send({files :["./hello/hello1.gif"]});
	}
});

client.on('message', (message) => {
	if (message.content == prefix+'ungry') {
	var rand3 = Math.round(Math.random()*3)
	switch (rand3) {

		case 0: 	rand3=("https://i.imgur.com/U7uNxof.gif"); 
		
		break;

		case 1:
       		        rand3=("https://i.imgur.com/FIU3hPj.gif");
       		        
 		break;
					
		case 2:
       		        rand3=("https://i.imgur.com/9KEOVNe.gif");
       		        
 		break;
		
		case 3:
       		        rand3=("https://i.imgur.com/C0ah6yi.gif");
       		        
 		break;		
			}
	message.channel.send(rand3);
	}
});

client.on('message', (message) => {
	if (message.content == prefix+'approved') {
	var rand5 = Math.round(Math.random()*3)
	switch (rand5) {

		case 0: 	rand5=("https://i.imgur.com/ogsmvmq.gif"); 
		
		break;

		case 1:
       		        rand5=("https://i.imgur.com/FIU3hPj.gif");
       		        
 		break;
					
		case 2:
       		        rand5=("https://i.imgur.com/9KEOVNe.gif");
       		        
 		break;
		
		case 3:
       		        rand5=("https://i.imgur.com/C0ah6yi.gif");
       		        
 		break;		
			}
	message.channel.send(rand5);
	}
});

client.on('message', (message) => {
	if (message.content == prefix+'fight') {
	var rand4 = Math.round(Math.random()*12)
	switch (rand4) {

		case 0: rand4=("https://i.imgur.com/cIRH0Ui.gif"); 
		
		break;

		case 1:
       		        rand4=("https://i.imgur.com/DIdOkcy.gif");
       		        
 		break;
					
		case 2:
       		        rand4=("https://i.imgur.com/bZPo1Ci.gif");
       		        
 		break;
		
		case 3:
       		        rand4=("https://i.imgur.com/k4SKDcv.gif");
       		        
 		break;	

		case 4:
       		        rand4=("https://i.imgur.com/OwsizdW.gif");
       		        
 		break;	

		case 5:
       		        rand4=("https://i.imgur.com/KYtVpyL.gif");
       		        
 		break;	

		case 6:
       		        rand4=("https://i.imgur.com/AId4uPq.gif");
       		        
 		break;

		case 7:
       		        rand4=("https://i.imgur.com/L50wNnU.gif");
       		        
 		break;

		case 8:
       		        rand4=("https://i.imgur.com/Q715lyM.gif");
       		        
 		break;

		case 9:
       		        rand4=("https://i.imgur.com/qQwMQZ7.gif");
       		        
 		break;

		case 10:
       		        rand4=("https://i.imgur.com/vo0BTLH.gif");
       		        
 		break;

		case 11:
       		        rand4=("https://i.imgur.com/wd4LOST.gif");
       		        
 		break;

		case 12:
       		        rand4=("https://i.imgur.com/fEeqSbk.gif");
       		        
 		break;

		case 13:
       		        rand4=("https://i.imgur.com/iuw0rqN.gif");
       		        
 		break;
			}
	message.channel.send(rand4);
	}
});

client.on('message', (message) => {
	if (message.content == prefix+"tails") {
	var rand7 = Math.round(Math.random()*4)
	switch (rand7) {

		case 0: rand7=("Cruz"); 
		
		break;

		case 1: rand7=("Cara"); 
		
		break;

		case 2: rand7=("Cruz"); 
		
		break;

		case 3: rand7=("Cara"); 
		
		break;
	}
		message.channel.send(rand7);
	}
	});

client.login (process.env.token);
