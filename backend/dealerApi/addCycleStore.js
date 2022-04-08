import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect("mongodb+srv://avi0000:iitk-cycling0000@cluster0.3cvdk.mongodb.net/iitk_cycle?retryWrites=true&w=majority");
//     // console.log("mongoose connected");
// }
/*
the req should be in this form.
{
    dealerId : 
    storeContact :
    storeAddress :
} 
Example:
{
    "dealerId":"507f191e810c19729de860ea",
    "storeContact":6377228432,
    "storeAddress":"delhi"
}
*/
async function addCycleStore(req, res) {
    const cycle_Store = req.body;
    console.log(" request at add cycle store");
    
    await dealerModel.updateOne({ dealerId: cycle_Store.dealerId }, { $push: { cycleStore: { contact: cycle_Store.storeContact, address: cycle_Store.storeAddress, cycleStoreId: mongoose.Types.ObjectId(), cycles: [] } } }).catch((err)=>{console.log(err)});
    res.status(200).json({'msg':'Cycle Store Added'});
}
export default addCycleStore;
//tested
