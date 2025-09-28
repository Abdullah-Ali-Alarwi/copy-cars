import DetailForm from "./DetailForm";
import MainForm from "./MainForm";
import VehicaleBottuns from "./VehicaleBottuns";
import VehicleDetails from './VehicleDetails'
export default function RightSecitonForm() {
  return (
    <div className=" w-[90%] lg:w-[30%]  mx-auto">
        <DetailForm/>
        <MainForm/>
        <VehicaleBottuns/>
        <VehicleDetails/>
   
    </div>
  )
}
