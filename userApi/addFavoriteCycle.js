import mongoose from 'mongoose';
import userModel from '../schema/userSchema.js';


//Link with mongodb server using mongoose
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://avi0000:iitk-cycling0000@cluster0.3cvdk.mongodb.net/iitk_cycle?retryWrites=true&w=majority');
// }


//req object : {userId:, dealerId:, cycleStoreId:, cycleId:}

async function addFavoriteCycle(req,res){


    const currentFavorites = await userModel.findOne({userId:req.body.userId},"favorites");
    currentFavorites.favorites.push({
        dealerId: req.body.dealerId,
        cycleStoreId: req.body.cycleStoreId,
        cycleId: req.body.cycleId
    });

    await userModel.updateOne({userId:req.body.userId},{favorites:currentFavorites.favorites});
    
    return res.status(200).json({'msg':'Success: Favorite added successfully'});

}

export default addFavoriteCycle;
