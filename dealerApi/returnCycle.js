import mongoose from 'mongoose';
import statusModel from '../schema/statusSchema.js';


//Link with mongodb server using mongoose
// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb+srv://avi0000:iitk-cycling0000@cluster0.3cvdk.mongodb.net/iitk_cycle?retryWrites=true&w=majority');
// }
/*req will be of form
 {
    dealerId :
    cycleStoreId :
    cycleId : 
    userId :
 } 
 Example:
 {
    "userId":"507f191e810c19729de860ea",
    "dealerId":"507f191e810c19729de860ea",
    "cycleStoreId":"6232b7cc67d359b1050da700",
    "cycleId": "6232bf24e0ac1fc02a58e73c"
  }
 
*/
async function returnCycle(req, res) {
    const data = req.body;
    console.log("request to return cycle");
    
    const time =new Date();
    const data1 = await statusModel.findOne({userId:data.userId,cycleId:data.cycleId,status:2});
    console.log(data1);
    const rate = data1.rate;
    let cost = rate * (time - data1.timeStart)/(1000*60*60);
    cost =parseInt(cost);
    await statusModel.updateOne({ cycleId:data.cycleId,userId:data.userId,status:2 }, { status : 3,timeEnd:time,cost:cost})

    res.status(200).json({ 'cost': cost });
}
export default returnCycle;
//not working some kind of bug
