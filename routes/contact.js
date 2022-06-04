const express = require('express')
const router = express.Router()
const {getAllContacts,addContact,updateContacts,deleteContacts} = require('../controllers/contactControllers')


router.put('/editcontact',updateContacts)

router.delete('/deletecontact',deleteContacts)

router.get('/allcontacts',getAllContacts)

router.post('/addcontact',addContact)




module.exports = router