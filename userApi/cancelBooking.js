import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';


//Link with mongodb server using mongoose
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://avi0000:iitk-cycling0000@cluster0.3cvdk.mongodb.net/iitk_cycle?retryWrites=true&w=majority');
// }


//req object : {userId:}

async function cancelBooking(req,res){


    await statusModel.updateOne({userId: req.body.userId,
                          status:1},{status:4,timeEnd:new Date()});
    
    return res.status(200).json({'msg':'Success: Booking cancelled successfully'});

}

export default cancelBooking;