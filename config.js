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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165820748";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_46_05_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA0MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAzMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxLFxuICAgICAgICA3NixcbiAgICAgICAgMjIsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjUxLFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvNlBWbWhneWt5UTcwZkdBaXBOVG9GMjcxdVNLMEc0bWR2RWppVTZyNS9zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjU4MjA3NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU4QTgzRTZCOUM1OEUxNTA3QkVGM0JCMjgyOEE5RjNBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjQ2NDgwMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwNVpzcUxkVFJrdW9xRy1EWWZtMkxRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdhN2RkY2UyLTQxNjUtNDMxZS1hZjRkLTAxMTEwNWY2ODJiY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDEyMCxcbiAgICAgIDYyLFxuICAgICAgMTEzLFxuICAgICAgNDcsXG4gICAgICAyMjAsXG4gICAgICA4NCxcbiAgICAgIDE2OCxcbiAgICAgIDEzMixcbiAgICAgIDYwLFxuICAgICAgMTMyLFxuICAgICAgMTQ2LFxuICAgICAgNCxcbiAgICAgIDEzMixcbiAgICAgIDE1OSxcbiAgICAgIDczLFxuICAgICAgMTExLFxuICAgICAgMyxcbiAgICAgIDExLFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMTA1LFxuICAgICAgMjUsXG4gICAgICAxMDEsXG4gICAgICAyMTksXG4gICAgICAxNDQsXG4gICAgICAwLFxuICAgICAgMTI2LFxuICAgICAgOTUsXG4gICAgICAzNCxcbiAgICAgIDE0MCxcbiAgICAgIDIwMCxcbiAgICAgIDI0NCxcbiAgICAgIDEwNSxcbiAgICAgIDI1LFxuICAgICAgMTUxLFxuICAgICAgNTUsXG4gICAgICA4NCxcbiAgICAgIDk5LFxuICAgICAgMjI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFRUDM0UEVDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY1ODIwNzQ4OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDIzNzkxODU4MjgwNTA6MjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+lgPCfkpRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOcWc4YzhIRUpqWnZMSUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkROSnBUK2JBdGdVM3JrcGttaCsyZEJaMnpheUJDUkh1S2tjQ0N3Um9ka1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUGVpWUYyWllpTEwvRTU3QkFHaTZOQlZacjVCUXFRYXlCZ05MMWMyeGpVa25nZXVKWkdMODdNL1I0RTRhUGxOdkZkbDQvN1YyUERzR0oxcElIcE5HRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNDAwdHhuSWhKeFI1T1ZZdC8rOXdZMjQwaUVoZjlhZkVPUU9YWmRlVHF1b1JwWXFzTDZlNGtVZk9pRGZQbDNkQysrdlRYYjJBeDBudzFGSzBVV09MQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2NTgyMDc0ODoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2NDY0Nzk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTy9OXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPL04uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
