import SendEmailController from '#controllers/send_emails_controller'
import { HttpContext } from '@adonisjs/core/http';
import router from '@adonisjs/core/services/router'
router.get('/',({response}:HttpContext)=>{
  response.ok({msg:'success'})
})
router.post('/send', [SendEmailController, 'send']);
