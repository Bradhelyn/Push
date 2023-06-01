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
  endpoint:'https://fcm.googleapis.com/fcm/send/ddhCiajaQLQ:APA91bEfm8F9sEQAvFLhirZRCo-liXF7skW4WDE0BtpCZamjGAfVdscZyeSdeR8z1roQADCpWBIh6OCjTShTs2izSdomvqMVW7AYDnm9Op-nPS3cul29iGPsxh93uTrygjBQP3AgrmNU',
  expirationTime:null,
  keys:{
    p256dh:'BHGXeoaq6n0WLY4ePu05RHASsQra1FPNTPt11gOfc4_jQQ2wI3LrjPyIGjQ4IE20ub0Zu7ymwrXzy4e2nDwbcag',
    auth:'MZcXML9RGoCpY2-vHjkFPQ'
  }
}

push.sendNotification(sub, 'test message')



