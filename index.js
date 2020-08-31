const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong!');
	}
	else if (command === 'blah') {
		message.channel.send('Meh. Go away!');
		message.channel.send('This is pretty cool!');
	}
});

client.login(config.token);