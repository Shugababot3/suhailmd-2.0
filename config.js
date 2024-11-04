const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349049202495";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_28_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM3LFxuICAgICAgICA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgOTksXG4gICAgICAgIDI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzLFxuICAgICAgICA1LFxuICAgICAgICA3NixcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDMzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0LFxuICAgICAgICA0OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA4MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMixcbiAgICAgICAgMjM3LFxuICAgICAgICA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE0LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTU1LFxuICAgICAgICA4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYnZ5MEhWSnhPQi8wWmJ5SHpRVXp2N25nMG5KQWRNZ0taSWxkVFY1M2JWUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ5MjAyNDk1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGREYyRkE3MURFQjZGMUZFM0Y2QzBCRjFEMEY1MzEwMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA3NDQ5MTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiektZSU1vTEhRR21icU1McXVLSEM1QVwiLFxuICBcInBob25lSWRcIjogXCIwMjZjZWVkNi01N2VkLTRkZTItYjA3MS03NDgwZGMzNzUzNjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTIsXG4gICAgICAxMjIsXG4gICAgICA5NCxcbiAgICAgIDIxOCxcbiAgICAgIDExOSxcbiAgICAgIDEwOSxcbiAgICAgIDM1LFxuICAgICAgMTc1LFxuICAgICAgOTQsXG4gICAgICAxOTgsXG4gICAgICAyMTAsXG4gICAgICA4NCxcbiAgICAgIDIwNCxcbiAgICAgIDE0MixcbiAgICAgIDE5MCxcbiAgICAgIDUyLFxuICAgICAgMjAsXG4gICAgICAxMTUsXG4gICAgICAyNDMsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAyNTMsXG4gICAgICAxNzQsXG4gICAgICAyNSxcbiAgICAgIDI1MixcbiAgICAgIDIxNixcbiAgICAgIDE4NyxcbiAgICAgIDI0OCxcbiAgICAgIDU1LFxuICAgICAgMzQsXG4gICAgICAyNixcbiAgICAgIDE1NyxcbiAgICAgIDE1OCxcbiAgICAgIDU4LFxuICAgICAgMTk4LFxuICAgICAgMjEzLFxuICAgICAgNDcsXG4gICAgICAxMDksXG4gICAgICAyNTMsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVY5MVo4VkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDkyMDI0OTU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFpc2hhIFNodWdhYmFcIixcbiAgICBcImxpZFwiOiBcIjI0NzM0MzAwNTg3MjM0NTo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09MZW1jQUNFTVdrcExrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ2JVL0FUV1VNcUtiZUo0UUJCRGtrNkEyUkh0OGtPQ2dYWDB0ZWROSnlBST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJMWDRwZmJsLzk4RDVQWHd4dmxkYTAxb2JPaDM2dG5tb3dSK3NOcnN0RjJoS0Z5aVNjakR6VDVSa0xVejM0SUZnVEdnQlVIZlNrUVBmWmJJcUZhSjhCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJnNXZlNFE2dEhqQWRTNXFCdzJCTjEyclpRRTd0bGk5cHVzYWg4UDVGK1hmUEFXbG1jTGNxT2JjdXN3dzQvSHNHZnYwUUU5d1lVV1Y4WmlOazVhWFJEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQ5MjAyNDk1OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA3NDQ5MDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNS0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1LQy5qc29uIjogIntcImtleURhdGFcIjpcIlFEQzNTaG1uRnNZQmZUNWQ3bVZCMThVYVZhRUg5SFhRU0xiWGVEa1lST3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjcxNTEwMzcwLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAxNDIyOTEzODhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
