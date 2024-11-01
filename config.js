const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349023134805";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_19_50_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc2LFxuICAgICAgICA4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM4LFxuICAgICAgICAzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMCxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICA2MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNixcbiAgICAgICAgNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICA1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDMwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjIxLFxuICBcImFkdlNlY3JldEtleVwiOiBcImRjTjE0SStWS2VlVkdCNWZyZmpzSlN2eUFXZENVS2tYOUZ2WmdBdXpBWE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJIQ1FWbURUUWVPMXFRTjRSR2lDV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOThmZjEwOGQtNTk4NC00MTlhLTkzYzUtNzZjY2Y0Yjk5MGEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDEwNSxcbiAgICAgIDIyOSxcbiAgICAgIDUzLFxuICAgICAgMTYyLFxuICAgICAgMzcsXG4gICAgICAxMzEsXG4gICAgICAxMTgsXG4gICAgICAyNTQsXG4gICAgICA1NyxcbiAgICAgIDEzNixcbiAgICAgIDY3LFxuICAgICAgMjA5LFxuICAgICAgMjA5LFxuICAgICAgMTc2LFxuICAgICAgMTY2LFxuICAgICAgMzksXG4gICAgICA0MSxcbiAgICAgIDQwLFxuICAgICAgODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODIsXG4gICAgICAyMTgsXG4gICAgICAxNzEsXG4gICAgICAxNDYsXG4gICAgICAxMjEsXG4gICAgICAyOSxcbiAgICAgIDEyNSxcbiAgICAgIDk3LFxuICAgICAgNTMsXG4gICAgICA2MCxcbiAgICAgIDcxLFxuICAgICAgMTA4LFxuICAgICAgNzIsXG4gICAgICAyMjgsXG4gICAgICA3OSxcbiAgICAgIDI0MixcbiAgICAgIDEzOSxcbiAgICAgIDEyOCxcbiAgICAgIDIwNCxcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktQUjFHOVhEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIzMTM0ODA1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiUGFzY2FsIEJ1c2luZXNzIENvbnN1bHQgKEVtbWFudWVsKVwiLFxuICAgIFwibGlkXCI6IFwiMTkxMzE1NTQzMzg4MjAyOjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xTVXBZY0hFUHpobExrR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSmN2d2RBaDEzZ01uZ1FjK3IzcGRSZ1NtVlA2V3lvK2IvZ1ZsUjJNUFZ6TT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4Z1g4WnJxaVcwV1J6VkZxQ1pmS2FqSDBPZVJIVXlQdzVlbW52bFRWcFdIekNlYmkvS3NVOE1BZWdsQjMxcmxwNEV0cjA0OTVUZVVCeFFia2lUVDJEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYWjJpZVQybnk5MlEwdjM0eUExbk84a1lyV1JqRWVINWN3ZGFJZ3Y5cUVmOEhvNVVOVVhWd0ovbDJybFZTVm5LSTZnMzVaNzNiSURVUzlhcW1oWXFoQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDIzMTM0ODA1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDkwNjI1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFdsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQV2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrTUJqVlQ2UDBlSEFNb2Nmdmw1Y2NGenhtOEJ3cFI4TC82Q05BU3lBa3FvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTQzMzcwNzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY4MzQ0MzA3MzJcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
