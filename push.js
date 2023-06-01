var push = require('web-push');

let vapidKeys = {
 publicKey: 'BD6tP-n25092OxBbIU9s1CNmHx_pLOEn10ebb8sx2j1Q3942XpFih_Vy1kkFYi8RuSftsuiqqEnxjGtJKPdCmZQ',
privateKey: 'D0gMCip5OQNuTVo2HKLbMOCO2XZEL9CSLq38139Ix9A'
}

push.setVapidDetails(
'malito:test@.code.co.uk', 
vapidKeys.publicKey,
vapidKeys.privateKey
);

let sub = {
endpoint:'https://fcm.googleapis.com/fcm/send/fZ-wJP28b1w:APA91bFiQtLvBnScN4VYfy2s-b2dVS5ORZrYxaeZzO2LZMabtPlASGlOJdmZT2SBSP2lJsB-1rXq8zGA1ijzEWOIAJ5k2q5rtCqtwn7KgPrd-fEWm8vS7dw5aLkQOGZ5BS3xiOFp2s9b',
expirationTime:null,
keys: {
p256dh:'BHR4HiNYxjuIQH3zLJZr6GjciGOpaf8Aq333Warhq2VKtLYz38le8FCpEUGAtf0JWdsCuBx1Qzp-xrw7ij_EY4o',
auth:'grX94vrFZRh17_pPYdrEbg'
}

};

push.sendNotification(sub, 'test message')



