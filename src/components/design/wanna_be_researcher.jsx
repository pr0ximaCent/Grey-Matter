// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import constant_data from "../../constants.js";
import Header from "../Header.jsx";

function WannaBeResearcher() {


    const [scholarFields, setScholarFields] = useState([]);
    const [scholarData, setScholarData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [startIndex, setStartIndex] = useState(1);
    const page_containers_count = 6;
    const fetchScholarByCategory = async (category) => {
        setLoading(true);
        const response = await fetch(`${constant_data.backend_url}/search_scholar_data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                field: category,
                start_index: startIndex,
                end_index: startIndex + page_containers_count - 1
            }),
        });
        const data = await response.json();
        console.log(data);
        setScholarData(data);
        setLoading(false);
    }


    const fetchScholarData = async (index_number) => {
        setLoading(true);
        setStartIndex(index_number);
        const response = await fetch(`${constant_data.backend_url}/search_scholar_data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                start_index: startIndex,
                end_index: startIndex + page_containers_count - 1
            }),
        });
        const data = await response.json();
        console.log(data);
        setScholarData(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchScholarData(1);
        fetch(`${constant_data.backend_url}/get_all_scholar_fields`).then(response => response.json()).then(data => {
            let temp_data = []
            data.map((value, index) => {
                if (value.toString().includes("/")) {
                    let temp = value.split("/");
                    temp.map((tvalue, index) => {
                        temp_data.push(tvalue.toString().trim());


                    });
                } else temp_data.push(value);
            });
            const uniqueElements = [...new Set(temp_data)];
            uniqueElements.sort()
            setScholarFields(uniqueElements);
        })
    }, []);
    return (
        <div>
            <Header/>

            <div
                className={"flex"}
            >
                <aside id="default-sidebar"
                       className="w-64 top-0 left-0 z-40 h-[120vh] transition-transform -translate-x-full sm:translate-x-0"
                       aria-label="Sidebar">
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <button
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

                                    <h3 className="ms-3 text-3xl">Top 6 Categories </h3>
                                </button>
                            </li>
                            {scholarFields.map((field) => (
                                <li key={field.toString()}>
                                    <button onClick={() => fetchScholarByCategory(field)}
                                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="flex-1 ms-3 whitespace-nowrap">{field}</span>
                                    </button>
                                </li>
                            ))}

                        </ul>
                    </div>
                </aside>

                <div className="p-4 ">
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
                                            <p className="text-sm font-semibold text-gray-800 text-center">
                                                H-Index Rankings
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                Institutional: #{benefit.institutionalRanking}
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                Country: #{benefit.countryRanking}
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                Region: #{benefit.regionalRanking}
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                World: #{benefit.worldRanking}
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
            </div>
        </div>
    );
}

export default WannaBeResearcher;