const { Client } = require("discord.js");

const client = new Client({ intents: ["Guilds", "GuildMessages"] });
const TOKEN =
  "MTAwNTgzMzA4MDYwMDI3NzA3Mg.Gme0Lc.xuFbk2ipcK7XRVoL08g9FN7cTb3xrJvt1PPHyE";

client.login(TOKEN);
