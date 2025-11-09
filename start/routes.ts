import SendEmailController from '#controllers/send_emails_controller'
import router from '@adonisjs/core/services/router'

router.post('/send', [SendEmailController, 'send']);
