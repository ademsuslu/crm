import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { plans } from "@/data/projects"
import { FaCheckCircle, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

export default async function BussinesDetails({
    params,
  }: {
    params: Promise<{ selectedPlan: string }>
  }) {
    const selectedPlan = (await params).selectedPlan
const planData= plans.find(pland => pland.plan === selectedPlan)

return  <div className="  bg-gray-800 flex items-center justify-center p-6">
 <Card className="min-w-xl mx-auto border border-gray-300 shadow-lg rounded-lg bg-gray-900 text-white">
      <CardHeader className="p-6">
        <CardTitle className="text-2xl font-bold flex items-center">
          {planData?.plan} <FaCheckCircle className="ml-2 text-green-400" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Features:</h3>
          <ul className="list-disc list-inside">
            {planData?.features.map((item: string, index: number) => (
              <li key={index} className="text-gray-400">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="mr-2 text-blue-500" />
          <p>
            Start Date: <span className="text-gray-400">{planData?.startDate}</span>
          </p>
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="mr-2 text-red-500" />
          <p>
            End Date: <span className="text-gray-400">{planData?.endDate}</span>
          </p>
        </div>
      </CardContent>
      <CardFooter className="p-6 border-t border-gray-700 flex justify-between items-center">
        <p className="text-lg font-semibold flex items-center">
          <FaDollarSign className="mr-2 text-yellow-500" />
          {planData?.price === 0 ? "Free" : `${planData?.price}`}
        </p>
      </CardFooter>
    </Card>
</div> 
}