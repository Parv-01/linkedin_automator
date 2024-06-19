browser.runtime.onInstalled.addListener(() => {
    console.log('LinkedIn Job Application Automator installed Succesfully ;)');
  });
// // In background.js or a new script file
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('YOUR_SENDGRID_API_KEY');
// function sendEmail(to, subject, text) {
//   const msg = {
//     to: to,
//     from: 'your-email@example.com',
//     subject: subject,
//     text: text
//   };
//   sgMail.send(msg).then(() => {
//     console.log('Email sent');
//   }).catch((error) => {
//     console.error(error);
//   });
// }
// // Example usage
// sendEmail('hr@example.com', 'Job Application', 'I have applied for the job.');
