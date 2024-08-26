import {useEffect, useState} from 'react';
import HorizontalLine from './HorizontalLine';
import constant_data from "../constants.js";

const Benefits = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedInstitute, setSelectedInstitute] = useState('default');
    const [selectedSubject, setSelectedSubject] = useState('default');

    const [instituteData, setInstituteData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);
    const [scholarData, setScholarData] = useState([]);
    const [startIndex, setStartIndex] = useState(1);

    
    const [loading, setLoading] = useState(false);
    const page_containers_count = 6;

    const fetchScholarData = async (index_number) => {
        setLoading(true);
        setStartIndex(index_number);
        console.log(JSON.stringify({
            start_index: index_number,
            end_index: index_number + page_containers_count - 1,
            name: searchTerm,
            institute: selectedInstitute === 'default' ? '' : selectedInstitute,
            field: selectedSubject === 'default' ? '' : selectedSubject
        }));
        const response = await fetch(`${constant_data.backend_url}/search_scholar_data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                start_index: index_number,
                end_index: index_number + page_containers_count - 1,
                name: searchTerm,
                institute: selectedInstitute === 'default' ? '' : selectedInstitute,
                field: selectedSubject === 'default' ? '' : selectedSubject
            }),
        });
        const data = await response.json();
        setScholarData(data);
        setLoading(false);
    }
    useEffect(() => {
        fetchScholarData(startIndex);
        fetch(`${constant_data.backend_url}/get_all_scholar_fields`).then(response => response.json()).then(data => {
           
            setSubjectData(data);
        })
        fetch(`${constant_data.backend_url}/get_all_scholar_institutions`).then(response => response.json()).then(data => {
          
            setInstituteData(data)
        })

    }, []);

    useEffect(() => {
        fetchScholarData(1);
    }, [searchTerm, selectedInstitute, selectedSubject]);


    const handleSearchChange = async (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);

    };

    const handleInstituteChange = async (e) => {
        e.preventDefault();
        setSelectedInstitute(e.target.value);
    };

    const handleSubjectChange = async (e) => {
        e.preventDefault();
        setSelectedSubject(e.target.value);
    };

  

    return (
        <div className="container mx-auto p-4">
            <HorizontalLine/>
            <br/>
            <h2 className="h2 mb-6 text-n-1" style={{textAlign: 'center'}}>
                Bangladesh Scientists Rankings 2024
            </h2>

           
            <div className="flex justify-center items-center mb-4 space-x-4">
                <select
                    value={selectedInstitute}
                    onChange={handleInstituteChange}
                    className="p-2 border bg-white border-gray-300 text-black rounded w-1/2 md:w-auto"
                >
                    <option value="default">Select Institute</option>
                    {instituteData.map((institute) => (
                        <option key={institute} value={institute}>{institute}</option>
                    ))}
                </select>
                <select
                    value={selectedSubject}
                    onChange={handleSubjectChange}
                    className="p-2 border bg-white border-gray-300 text-black rounded w-1/2 md:w-auto"
                >
                    <option value="default">Select Subject</option>
                    {subjectData.map((subject) => (
                        <option key={subject} value={subject}>{subject}</option>
                    ))}
                </select>
            </div>

            
            <div className="flex justify-center items-center mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Name"
                    className="p-2 border border-gray-300 rounded w-full max-w-3xl bg-white text-black"
                />
            </div>

            <div className="flex flex-wrap -mx-2">
                {scholarData.map((benefit, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
                        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                            <div className="flex h-36 items-center justify-between p-4 border-b">
                                <div className="flex items-center">
                                    <img
                                        className="w-16 h-16 rounded-full mr-4"
                                        src={benefit.image} 
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
    );
};

export default Benefits;
