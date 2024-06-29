const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349030989003";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349030989003";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349030989003,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349030989003,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349030989003,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_40_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDksXG4gICAgICAgIDM4LFxuICAgICAgICAyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyLFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICA4OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICA5OCxcbiAgICAgICAgMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQzLFxuICAgICAgICA0MCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTAsXG4gICAgICAgIDc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgxLFxuICAgICAgICA5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIit6TW5mdi9qalFQdWRkOUdlUWc3TGRUMzhSb1QwcXFwcGJkVEtjaHFYUGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzMDk4OTAwM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FERTgwMzkyOUFDMUZGMjFDMzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NjY0ODM2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIllMN0oyeklZVGptYU5DMTJZZGs5SFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzE3MjQ1ZGYtYTMzYy00MzY4LWE3NGQtNWIyNzE1ZTAxOGI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDI3LFxuICAgICAgMTI0LFxuICAgICAgNjgsXG4gICAgICAzMSxcbiAgICAgIDc4LFxuICAgICAgMTIwLFxuICAgICAgMTA3LFxuICAgICAgNCxcbiAgICAgIDEyMCxcbiAgICAgIDIzMixcbiAgICAgIDY5LFxuICAgICAgOTksXG4gICAgICAxNDcsXG4gICAgICAyNDIsXG4gICAgICAxMzUsXG4gICAgICAyMTAsXG4gICAgICAxODMsXG4gICAgICAyMzQsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAxODAsXG4gICAgICAxOTksXG4gICAgICA0OCxcbiAgICAgIDMzLFxuICAgICAgODIsXG4gICAgICAyMixcbiAgICAgIDExOSxcbiAgICAgIDE3LFxuICAgICAgMzgsXG4gICAgICA2OSxcbiAgICAgIDc4LFxuICAgICAgMTgsXG4gICAgICA5MCxcbiAgICAgIDI1MyxcbiAgICAgIDEwNixcbiAgICAgIDI0NyxcbiAgICAgIDIzMSxcbiAgICAgIDUzLFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZLSDVSWkI1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDMwOTg5MDAzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjgzMjM2NDkyMDg4NToxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNb29yZfCflqRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdlZoSVVORUx1QmdMUUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNkcnZSY3VpNlhjMndaU2VLM0hLWkdXZlhyL3hiT3E4cDVOQ05ZR3hneGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidEhxdncvVEFkRC8xSkd1aUFDMDA2WmkvRE80eW1FL1NRUU8zRE5zV1NHMnd1VTdHV0dpMVRvRHpzenEyNTFVWmRFMGowbFRvenArVHhmMVE3RU9pQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidWdiY2QxY3ZIM0oyeDFESkhlaUdJZWxDcGN4L0ZhUFBoa0EyeEk4WmplK2NwRkJqeXlmYWFlWG13S3Qxc09YUE50R2JrWTJac0xDaEl4TnlTekRZRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzMDk4OTAwMzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjY0ODMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQTZvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBNm8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiT2liTXI3OHBNTDBPMjdkTExXUXpSYVhneThMN3E4S1VtNkNUWnBDUFRzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM1MDAyMjMxNDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODYzNTk2OTc2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
