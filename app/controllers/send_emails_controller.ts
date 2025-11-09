import  { HttpContext} from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'
import 'dotenv/config'

export default class SendEmailController {
  public async send({ request, response }: HttpContext) {
    try {
      const data = request.body()
      console.log(data)
      console.log('📩 JSON received from ESP32:', data)

      const subject = data.SOS ? "🚨 SOS Alert from Smart Stick" : "Smart Stick Data"
      const messageBody = `
        <h2>Smart Stick Alert</h2>
        <p><strong>Latitude:</strong> ${data.lat}</p>
        <p><strong>Longitude:</strong> ${data.lng}</p>
        <p><strong>Raw Data:</strong> ${JSON.stringify(data)}</p>
      `

      await mail.send((message) => {
        message
          .from(`${process.env.SMTP_AUTH_USER}`)
          .to(`${process.env.SMTP_AUTH_USER}`)
          .subject(subject)
          .html(messageBody)
      })

      console.log("✅ Email sent successfully!")
      return response.json({ success: true, message: "Email sent successfully" })
    } catch (error) {
      console.error("❌ Error sending email:", error)
      return response.status(500).json({ success: false, error: error.message })
    }
  }

  public async show({response}:HttpContext){
    return response.ok("pathVaani send route")
  }
}
