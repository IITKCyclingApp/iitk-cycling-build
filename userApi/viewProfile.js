import mongoose from 'mongoose';
import userModel from '../schema/userSchema.js';


//Link with mongodb server using mongoose
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://avi0000:iitk-cycling0000@cluster0.3cvdk.mongodb.net/iitk_cycle?retryWrites=true&w=majority');
// }



//Accepts a request object of the form {userId: mongoose.Types.ObjectId}
//Returns an object of form userSchema
async function viewProfileUser(req,res){

    const userData = await userModel.findOne({userId: req.body.userId});
    console.log(userData);
    return res.status(200).json(userData);

}

export default viewProfileUser;