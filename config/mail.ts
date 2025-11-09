import { defineConfig, transports } from '@adonisjs/mail'

const mailConfig = defineConfig({
  default: 'smtp', // the default mailer

  mailers: {
    smtp: transports.smtp({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT!),
      auth: {
        type: 'login',
        user: process.env.SMTP_AUTH_USER!,
        pass: process.env.SMTP_AUTH_PASS!,
      },
    }),
  },
})

export default mailConfig
