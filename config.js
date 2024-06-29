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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_12_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAxODQsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDgwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzksXG4gICAgICAgIDQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA0MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDc0LFxuICAgICAgICA2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDksXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDg3LFxuICAgICAgICAxODksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3OGNOTUJxUmNqRUh4ZWI0cWFPS1V1RVlqZ1VVOG9pMzBZU1drZGc1NlY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlLThYSlVCR1RPaXJRdWdFM1Y3dXBnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg0MWQ5NTllLWM3YzItNDJkZC05OTI5LTRiNGViNWY0OGQxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MSxcbiAgICAgIDk3LFxuICAgICAgMTEsXG4gICAgICAxMjcsXG4gICAgICA1OSxcbiAgICAgIDE0OCxcbiAgICAgIDE0OCxcbiAgICAgIDE5NCxcbiAgICAgIDEzOSxcbiAgICAgIDIwMixcbiAgICAgIDIyOSxcbiAgICAgIDE2NSxcbiAgICAgIDE5NSxcbiAgICAgIDIzNCxcbiAgICAgIDI4LFxuICAgICAgMTg5LFxuICAgICAgMjEzLFxuICAgICAgNzgsXG4gICAgICAyOSxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDQsXG4gICAgICAxNTksXG4gICAgICAxODEsXG4gICAgICA5MSxcbiAgICAgIDM5LFxuICAgICAgMTYwLFxuICAgICAgNCxcbiAgICAgIDIxNixcbiAgICAgIDI0MyxcbiAgICAgIDEyMCxcbiAgICAgIDU3LFxuICAgICAgNzAsXG4gICAgICA3NSxcbiAgICAgIDI0LFxuICAgICAgMjAyLFxuICAgICAgMTU0LFxuICAgICAgNTYsXG4gICAgICAyMTQsXG4gICAgICA4MixcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLTERYWVZYSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzMDk4OTAwMzoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjI4MzIzNjQ5MjA4ODU6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTW9vcmXwn5akXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkQ5Mi9vSkVPU3BnclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDZHJ2UmN1aTZYYzJ3WlNlSzNIS1pHV2ZYci94Yk9xOHA1TkNOWUd4Z3hnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1JQU5pMzE4dXRvdEVqaTk1NlY3S2lKd3BXeWVXQjl6NlZIVFE2WEhWNzFEcDFnc1E1eFFKdzE4ODJyT3FrNTZYYTU0WVF1bFN1T1UyRDcwZVZDbkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5tM1J6V0V0TU9ORllleXBRdzNBVDk3S0hxRnA1b3hNSENTU2dSM1V0VVdiZlpFTFJscy9PRmFQaVdNbVYvOXRuNjZ4Y2ZnUHA1ODdtQ0s5aC90dWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzA5ODkwMDM6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTcwMjc1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU41Z1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTjVnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTU90aGwxam81ZWl5UzdxU09RVTNwN0kxTlA5NXZPUEtpK0V6UGxCa3JoMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjczMjc4NjA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk3MDI3NjE2MTFcIn0iCn0="  // PUT your SESSION_ID 


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
