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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_41_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkzLFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgOTksXG4gICAgICAgIDkwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5MixcbiAgICAgICAgMTgyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMyLFxuICAgICAgICA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYyLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgNixcbiAgICAgICAgNzcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA1OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICA0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImxqcHgwbUVnT1VxcGhsWjZoVkN6WVRXNWhxZ3hiMUlIb1FZR2JBYThFUlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhvY2FlVkUwVC1HbnVOVk45ekVVYXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWMyYWNiZTEtZTM1OS00MmJmLWIzOTgtODc0OWEwZTU3M2EzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTY2LFxuICAgICAgMTc2LFxuICAgICAgMTgxLFxuICAgICAgMjI4LFxuICAgICAgMTE5LFxuICAgICAgMjQzLFxuICAgICAgODYsXG4gICAgICAyMTksXG4gICAgICAyNTMsXG4gICAgICA3MixcbiAgICAgIDEzOSxcbiAgICAgIDEwOCxcbiAgICAgIDMxLFxuICAgICAgMTI3LFxuICAgICAgMjM0LFxuICAgICAgODUsXG4gICAgICAxMDIsXG4gICAgICAxNjAsXG4gICAgICA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk5LFxuICAgICAgMTY4LFxuICAgICAgODYsXG4gICAgICA0MCxcbiAgICAgIDE3NixcbiAgICAgIDczLFxuICAgICAgMjI4LFxuICAgICAgNDUsXG4gICAgICAxNDcsXG4gICAgICAxNDIsXG4gICAgICAxNDksXG4gICAgICAxODksXG4gICAgICAxNTgsXG4gICAgICAxNzksXG4gICAgICAxMzcsXG4gICAgICAyMDYsXG4gICAgICA1MCxcbiAgICAgIDE1MixcbiAgICAgIDksXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRjhBQ1dGVkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzA5ODkwMDM6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyODMyMzY0OTIwODg1OjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pEOTIvb0pFTWlJaGJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ2RydlJjdWk2WGMyd1pTZUszSEtaR1dmWHIveGJPcThwNU5DTllHeGd4Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHenZVNVkvVklGUHBGSkllSWNqL1pLaC9vSzAxYmlzZ2hyOXpOYkxYdmVVZ2JyVjV4WnVOSE1HQkRacjJlTjE3cmYrT21OM2pHT01Mb1psOE81YW5BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3UjBZYzBwU09VeUI1ZWM5VXM4MUxzWEd0emdXTnNwa2QyTGU4MHV0T1lQdmxYTXdnbmRtOElpNndEbE14ZkNVUm9kL3hkdk1nTDg2TVdCWE9RSitBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDMwOTg5MDAzOjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3NDc2NjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFONWdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU41Zy5qc29uIjogIntcImtleURhdGFcIjpcIk1PdGhsMWpvNWVpeVM3cVNPUVUzcDdJMU5QOTV2T1BLaStFelBsQmtyaDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjY3MzI3ODYwOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzAyNzYxNjExXCJ9Igp9"  // PUT your SESSION_ID 


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
