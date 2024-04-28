const os = require('os');

const platform = os.platform();
console.log(platform);

const userInfo = os.userInfo();
console.log(userInfo);

const osType = os.type();
console.log(osType);

const osRelease = os.release();
console.log(osRelease);

const sysUptime = os.uptime();
console.log(sysUptime);

const osTotalMemory = os.totalmem();
console.log(osTotalMemory);

const osFreeMemory = os.freemem();
console.log(osFreeMemory);