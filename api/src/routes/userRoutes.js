const express = require ('express');
const router = express.Router();
const { User } = require("../db");
const bcrypt = require("bcrypt")
const saltRound = 10 
const salt = bcrypt.genSaltSync(saltRound);


router.delete("/", async (req, res)=> {
  const {id} = req.query;
  
  try {
    const user = await User.findByPk(id)

    if (user) {

        await user.destroy()
        res.status(200).json({ msg: "user deleted" });
      } else {
        res.status(404).json({ msg: "User not found" });

    
      }
    
    
  } catch (error) {
    res.status(400).send(error.message);
  }
});




router.get("/",async(req, res) =>{
  const { id } = req.query;
  try {
    if(id) {
      const user = await User.findOne({where:{id:id}})
      user ? res.status(200).send(user): res.status(404).send("User not found")
    }else {
      const allUsers = await User.findAll()
      res.status(200).send(allUsers)
    }
  }
  catch(error){
    res.status(404).send(error.message)
  }
})



router.put("/", async(req, res) => {
  const {
    id,
    image,
    name,
    adress,
    email,
} = req.body;
try {
        
  let user = await User.findByPk(id)
console.log(user)
  if(user) {
  
  const foundEmail = await User.findOne({where:{email:email}})

  const foundName = await User.findOne({where:{name:name}})

  if(foundEmail && foundName){
      res.status(404).send("Username and email are not available")
  }else if(foundEmail && !foundName){
      res.status(404).send("Email is not available")
  }else if(!foundEmail && foundName){
      res.status(404).send("Username is not available")
  }

      await user.update({
          image: image ? image : user.image,
          name: name ? name : user.name,
          adress: adress ? adress : user.adress,
          email: email ? email: user.email,
      })
      await user.save()
  
      return res.send({message: 'Datos actualizados.'})
  }else{
      res.status(404).json({message: 'El user no existe.'})
  }
} catch (error) {
  console.error(error)
 
}
});






router.post("/", async (req, res) => {
 const { name, adress, email, password, image, isAdmin} = req.body;
  
  try {
    if (name && adress && email && password) {
      let encript = bcrypt.hashSync(password, salt);
      const emailFound = await User.findOne({where:{email:email}})
      
      const nameFound = await User.findOne({where:{name:name}})
      
      if(emailFound && nameFound){
        res.status(404).send("username and email are not available")
      }else if(emailFound && !nameFound){
        res.status(404).send("email is not available")
      }else if(!emailFound && nameFound){
        res.status(404).send("username is not available")
      }

      const [userCreate, created] = await User.findOrCreate({
        where: {
          name,
          adress,
          image,
          isAdmin,
          email,
          password: encript,
        },
      });
      

      userCreate ? res.send("user was created") :
        res.status(404).send("Error no se obtuvieron todos los datos correspondientes");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});



module.exports = router;