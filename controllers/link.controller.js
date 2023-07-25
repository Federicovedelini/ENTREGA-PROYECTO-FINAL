import { nanoid } from "nanoid";
import { Link } from "../models/Link.js";
import { param } from "express-validator";

export const getLinks = async (req, res) => {
    try {

       const links = await Link.find({uid: req.uid});

        return res.json({ links });
    } catch (error) {
       console.log(error)
       return res.status(500).json({error: 'error de servidor'}) 
    }
   
};

export const getLink = async (req, res) => {
   try {
      const {id} = req.params;
      const link = await Link.findById(id);
      console.log(link);

       return res.json({ link });
   } catch (error) {
      console.log(error)
      return res.status(500).json({error: 'error de servidor'}) 
   }
}

export const createLink = async (req, res) => {
    try {

        let { longLink } = req.body;
        if(!longLink.startsWith('https://')){
             longLink = 'https://' + value;  
            }
        console.log(longLink);





        //const link = new Link ({longLink, nanoLink: nanoid(6), uid: req.uid});
        //const newLink = await link.save()

 
     } catch (error) {
        console.log(error)
        return res.status(500).json({error: 'error de servidor'}) 
     }
    
}