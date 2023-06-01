var push = require('web-push');

let vapidKeys = {
  publicKey: 'BE5l53puV8_2MrMbLXJXaUJkWULTz5wpNumjbDc6qbZXhexaxVglhpaxSo6imzpDsPFnBf1732FrIXU5FDDA4io',
  privateKey: 'xH1lYwN5UKHNO0hV4zV56z_nZmnxBjdH4lJVHIbMX3c'
}

push.setVapidDetails(
  'malito: test@.co.uk', 
  vapidKeys.publicKey,
  vapidKeys.privateKey
  );

let sub = {
  endpoint:'https://fcm.googleapis.com/fcm/send/fZ-wJP28b1w:APA91bFiQtLvBnScN4VYfy2s-b2dVS5ORZrYxaeZzO2LZMabtPlASGlOJdmZT2SBSP2lJsB-1rXq8zGA1ijzEWOIAJ5k2q5rtCqtwn7KgPrd-fEWm8vS7dw5aLkQOGZ5BS3xiOFp2s9b',
  expirationTime:null,
  keys:{
    p256dh:'BHR4HiNYxjuIQH3zLJZr6GjciGOpaf8Aq333Warhq2VKtLYz38le8FCpEUGAtf0JWdsCuBx1Qzp-xrw7ij_EY4o',
    auth:'grX94vrFZRh17_pPYdrEbg'
  }
};

push.sendNotification(sub, 'test message')



