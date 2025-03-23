const { Client } = require("discord.js-selfbot-v13");

const client = new Client();
const delay = 0.1; // 1 saniye gecikme (isteğe göre azaltıp artırabilirsin)

client.on("ready", () => {
  console.log(`${client.user.username} olarak giriş yapıldı.`);
});

client.on("messageCreate", async (message) => {
  if (message.author.id !== client.user.id) return; // Sadece kendi mesajlarını algılar
  if (!message.content.startsWith(".f")) return; // Komut kontrolü

  const content = message.content.slice(3).trim(); 
  const words = content.split(" "); // Mesajı kelimelere böl

  if (words.length === 0) return;

  await message.delete(); // Komutu yazan mesajı sil

  for (const word of words) {
    await message.channel.send(word); // Her kelimeyi ayrı mesaj olarak gönder
    await new Promise((resolve) => setTimeout(resolve, delay)); // Belirtilen süre kadar bekle
  }
});

client.login(""); // TOKEN YAPISTIRRSSS
