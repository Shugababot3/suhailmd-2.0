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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349124503464";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_55_11_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk1LFxuICAgICAgICA2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTExLFxuICAgICAgICA2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjU1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI0LFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY5LFxuICAgICAgICA3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzR3BvSk84N0ViKzJKc2wwTlFDcmVUV2lZRngrVXhCaFFxb0JKa3h4VWFnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYeERlVUZpclRjMjZFSWhiRVZlZzhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk4NjcyOWFjLTNmYjQtNGQxMy04M2FiLTk2ZTk2ODdkNGQ0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDE0NCxcbiAgICAgIDE1OSxcbiAgICAgIDEyMSxcbiAgICAgIDc1LFxuICAgICAgMTA1LFxuICAgICAgNjcsXG4gICAgICAxMzAsXG4gICAgICAyNTUsXG4gICAgICAxMTMsXG4gICAgICAxMCxcbiAgICAgIDIxMCxcbiAgICAgIDE4NixcbiAgICAgIDI0OCxcbiAgICAgIDE0NixcbiAgICAgIDEzNSxcbiAgICAgIDIsXG4gICAgICAxMTgsXG4gICAgICA4MyxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMjM1LFxuICAgICAgMTIxLFxuICAgICAgNzYsXG4gICAgICAxMzAsXG4gICAgICAxNCxcbiAgICAgIDE1MyxcbiAgICAgIDI0NCxcbiAgICAgIDE3MixcbiAgICAgIDE0MCxcbiAgICAgIDE3NyxcbiAgICAgIDEzMCxcbiAgICAgIDE1MSxcbiAgICAgIDc1LFxuICAgICAgMTgzLFxuICAgICAgMjEsXG4gICAgICAyMjAsXG4gICAgICAyMjksXG4gICAgICAyMDEsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU0c4RVRYR0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjQ1MDM0NjQ6NDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NzYxMDA0MzAxNTI0ODo0MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVy9pVFVRbE9LQnVnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpmanBmc3J0Vm4rZG9STkphMytacDd0QXAxbHBmb2J0SkZMcGwvOG1OeUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidXdzbDYxT3dLempPWlN5WUo5ZXFvZ1c2OUFzaGpvUmVzUGl6cGx4b2Z1MFlSZ0hBV0hoRVlFK2t0UlQ2aHdiMVA0cytZWHgvVFpGcTdEcjl4KytnRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZk9oUjZCWUlMMHRPM0xDREt0WUJZZDBvOTcrczBWRVMwUHo3cDJxYW5jNnB2WHhVY0YxQU9wWnhIak96c3JwWWNQR0hsbkV6RnN1WTZCbDNXQ0dJQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNDUwMzQ2NDo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMjc2NTA0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
