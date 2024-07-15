import { benefitData } from "../constants";
import HorizontalLine from "./HorizontalLine";

const Benefits = () => {
  return (
    
    <div className="container mx-auto p-4">
      <HorizontalLine/><br></br>
      <h1 className="h1 mb-6 text-n-1" style={{ textAlign: 'center' }}>
       Bangladedsh Scientists Rankings 2024
      </h1>
      <div className="flex flex-wrap -mx-2">
        {benefitData.map((benefit, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
              <div className="flex h-36 items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src="https://via.placeholder.com/150" // Replace with the actual image URL if available
                    alt={benefit.name}
                  />
                  <div className="">
                    <a
                      href={benefit.profile}
                      className="text-lg font-semibold text-blue-600 hover:underline"
                    >
                      {benefit.name}
                    </a>
                    <p className="max-w-44 text-sm text-gray-800">
                      {benefit.institution}
                    </p>
                    <p className="text-sm text-gray-800">{benefit.country}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-sm font-semibold text-gray-800">
                    H-Index Rankings
                  </p>
                  <p className="text-xs text-gray-600">
                    Institutional: #{benefit.institutional_ranking}
                  </p>
                  <p className="text-xs text-gray-600">
                    Country: #{benefit.country_ranking}
                  </p>
                  <p className="text-xs text-gray-600">
                    Region: #{benefit.regional_ranking}
                  </p>
                  <p className="text-xs text-gray-600">
                    World: #{benefit.world_ranking}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 flex-grow">
                <div className="bg-orange-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800">
                    H-Index
                  </h3>
                  <p className="text-gray-800">Total: {benefit.hIndexTotal}</p>
                  <p className="text-gray-800">
                    Last 6 Years: {benefit.hIndexLast6Years}
                  </p>
                </div>
                <div className="bg-blue-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800">
                    i10 Index
                  </h3>
                  <p className="text-gray-800">
                    Total: {benefit.i10IndexTotal}
                  </p>
                  <p className="text-gray-800">
                    Last 6 Years: {benefit.i10IndexLast6Years}
                  </p>
                </div>
                <div className="bg-purple-200 p-4 rounded-lg col-span-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Citations
                  </h3>
                  <p className="text-gray-800">
                    Total: {benefit.citationsTotal}
                  </p>
                  <p className="text-gray-800">
                    Last 6 Years: {benefit.citationsLast6Years}
                  </p>
                </div>
              </div>
              <div className="p-4 border-t">
                <p className="text-sm text-gray-800">{benefit.field}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
