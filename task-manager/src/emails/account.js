const MnMail = require('@moonmail/mail')

MnMail.setApiKey(process.env.MOONMAIL_API_KEY)



const sendWelcomeEmail = (email, name) => {
    MnMail.send({
		to: email,
		from: 'horizon199@gmail.com',
		subject: 'Thanks for joining in!',
		text: `Welcome to the app, ${name}. name, Let me know how you get along with the app.`
	})
}

const sendCancelationEmail = (email, name) => {
    MnMail.send({
        to: email,
        from: 'horizon199@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
	sendWelcomeEmail,
    sendCancelationEmail
}