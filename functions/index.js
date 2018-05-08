const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const cors = require(`cors`)({ origin: true })
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addContact = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // Grab the text parameter.
    const contactFormResponse = req.body;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    return admin.firestore().collection('contacts').add({contactFormResponse}).then((snapshot) => {
      // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
      // return res.redirect(303, snapshot.ref.toString());
      return res.json({
        result: `Form results saved.`,
      })
    });
  })
});
