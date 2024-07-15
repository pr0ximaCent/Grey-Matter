import {benefitData} from "../constants";
import {useEffect, useState} from "react";


const Benefits = () => {
    const [scholarData, setScholarData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [startIndex, setStartIndex] = useState(1);
    const page_containers_count = 6;
    const fetchScholarData = async (index_number) => {
        setLoading(true);
        setStartIndex(index_number);
        const response = await fetch(`https://beta.vectorclasses.net/data/${startIndex}/${startIndex + page_containers_count - 1}`);
        const data = await response.json();
        console.log(data);
        setScholarData(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchScholarData(1);

    }, []);
    return loading ? (
        <div
            className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"/>
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    ) : (
        <div className="container mx-auto p-4">

            <form className="max-w-lg mx-auto pb-3">
                <div className="flex">
                    <label htmlFor="search-dropdown"
                           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                    <button id="dropdown-button" data-dropdown-toggle="dropdown"
                            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                            type="button">All categories <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true"
                                                              xmlns="http://www.w3.org/2000/svg" fill="none"
                                                              viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 1 4 4 4-4"/>
                    </svg></button>
                    <div id="dropdown"
                         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="relative w-full">
                        <input type="search" id="search-dropdown"
                               className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                               placeholder="Search Mockups, Logos, Design Templates..." required/>
                        <button type="submit"
                                className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>

            <div className="flex flex-wrap -mx-2">
                {scholarData.map((benefit, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                            <div className="flex h-36 items-center justify-between p-4 border-b">
                                <div className="flex items-center">
                                    <img
                                        className="w-16 h-16 rounded-full mr-4"
                                        src={benefit.image} // Replace with the actual image URL if available
                                        alt={benefit.name}
                                    />
                                    <div className="">
                                        <a href={benefit.profile}
                                           className="text-lg font-semibold text-blue-600 hover:underline">
                                            {benefit.name}
                                        </a>
                                        <p className="max-w-44 text-sm text-gray-800">{benefit.institution}</p>
                                        <p className="text-sm text-gray-800">{benefit.country}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-sm font-semibold text-gray-800">H-Index Rankings</p>
                                    <p className="text-xs text-gray-600">Institutional:
                                        #{benefit.institutional_ranking}</p>
                                    <p className="text-xs text-gray-600">Country: #{benefit.country_ranking}</p>
                                    <p className="text-xs text-gray-600">Region: #{benefit.regional_ranking}</p>
                                    <p className="text-xs text-gray-600">World: #{benefit.world_ranking}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 flex-grow">
                                <div className="bg-orange-200 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800">H-Index</h3>
                                    <p className="text-gray-800">Total: {benefit.hIndexTotal}</p>
                                    <p className="text-gray-800">Last 6 Years: {benefit.hIndexLast6Years}</p>
                                </div>
                                <div className="bg-blue-200 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-800">i10 Index</h3>
                                    <p className="text-gray-800">Total: {benefit.i10IndexTotal}</p>
                                    <p className="text-gray-800">Last 6 Years: {benefit.i10IndexLast6Years}</p>
                                </div>
                                <div className="bg-purple-200 p-4 rounded-lg col-span-2">
                                    <h3 className="text-lg font-semibold text-gray-800">Citations</h3>
                                    <p className="text-gray-800">Total: {benefit.citationsTotal}</p>
                                    <p className="text-gray-800">Last 6 Years: {benefit.citationsLast6Years}</p>
                                </div>
                            </div>
                            <div className="p-4 border-t">
                                <p className="text-sm text-gray-800">{benefit.field}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900 dark:text-white">{startIndex}</span> to <span
                  className="font-semibold text-gray-900 dark:text-white">{startIndex + page_containers_count - 1}</span> of <span
                  className="font-semibold text-gray-900 dark:text-white">5000</span> Entries
  </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button
                        onClick={() => fetchScholarData(startIndex - page_containers_count)}
                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        Prev
                    </button>
                    <button
                        onClick={() => fetchScholarData(startIndex + page_containers_count)}
                        className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
