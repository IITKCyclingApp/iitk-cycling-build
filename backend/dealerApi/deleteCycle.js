import mongoose from 'mongoose';
import dealerModel from '../schema/dealerSchema.js';


//Link with mongodb server using mongoose
// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb+srv://avi0000:iitk-cycling0000@cluster0.3cvdk.mongodb.net/iitk_cycle?retryWrites=true&w=majority');
// }
/*req will be of form
 {
    dealerId :
    cycleStoreId :
    cycleId : 
 } 
 Example:
 {
    "dealerId":"507f191e810c19729de860ea",
    "cycleStoreId":"6232b7cc67d359b1050da700",
    "cycleId": "6232bea9e46db1ce41055344"
  }
 
*/
async function deleteCycle(req, res) {
  const data = req.body;
  console.log("request to delete cycle");
  await dealerModel.updateOne({ dealerId: data.dealerId }, { $pull: { "cycleStore.$[elem].cycles": { cycleId: data.cycleId } } },{arrayFilters:[{"elem.cycleStoreId":data.cycleStoreId}]});
  res.status(200).json({ 'msg': 'cycle deleted successfully' });
}
export default deleteCycle;
//tested