import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';
import helperFunction from './helperFunctions/availableCycle.js';


//Link with mongodb server using mongoose
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://avi0000:iitk-cycling0000@cluster0.3cvdk.mongodb.net/iitk_cycle?retryWrites=true&w=majority');
// }



//req object : {userId:}

async function confirmBooking(req,res){


    await statusModel.updateOne({userId: req.body.userId,
                                status:1},{status:2,timeStart:new Date(),cost: 0});
    
    // const dealerId = req.body.dealerId;
    // const cycleStoreId = req.body.cycleStoreId;
    // const cycleId = req.body.cycleId;
    // const allCycleData = await helperFunction.allCycleData(req.body.userId);
    // const result = {
    //   allData: allCycleData[dealerId][cycleStoreId][cycleId]
    // }


    return res.status(200).json({'msg':'Success: Cycle booked successfully'});

}

export default confirmBooking;