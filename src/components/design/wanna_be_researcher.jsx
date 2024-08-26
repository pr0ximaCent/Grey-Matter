import { useEffect, useState } from "react";
import constant_data from "../../constants.js";

function WannaBeResearcher() {
  const [scholarFields, setScholarFields] = useState([]);
  const [scholarData, setScholarData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(1);
  const page_containers_count = 6;

  const fetchScholarByCategory = async (category) => {
    setLoading(true);
    const response = await fetch(
      `${constant_data.backend_url}/search_scholar_data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          field: category,
          start_index: startIndex,
          end_index: startIndex + page_containers_count - 1,
        }),
      }
    );
    const data = await response.json();
    setScholarData(data);
    setLoading(false);
  };

  const fetchScholarData = async (index_number) => {
    setLoading(true);
    setStartIndex(index_number);
    const response = await fetch(
      `${constant_data.backend_url}/search_scholar_data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          start_index: startIndex,
          end_index: startIndex + page_containers_count - 1,
        }),
      }
    );
    const data = await response.json();
    setScholarData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchScholarData(1);
    fetch(`${constant_data.backend_url}/get_all_scholar_fields`)
      .then((response) => response.json())
      .then((data) => {
        setScholarFields(data.slice(0, 16));
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row">
      <aside
        id="default-sidebar"
        className="md:w-64 w-full md:fixed md:h-screen h-auto md:top-0 md:left-0 md:z-40 bg-gray-50 dark:bg-gray-800 md:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto h-full">
          <h3 className="text-3xl text-gray-900 dark:text-white mb-4">Top 10 Categories</h3>
          <ul className="space-y-2">
            {scholarFields.map((field) => (
              <li key={field}>
                <button
                  onClick={() => fetchScholarByCategory(field)}
                  className="w-full text-left p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {field}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="flex-1 p-4 mt-16 md:mt-0 md:ml-64 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : (
            scholarData.map((benefit, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
                <div className="flex flex-col sm:flex-row items-center p-4 border-b">
                  <img
                    className="w-16 h-16 rounded-full mb-4 sm:mb-0 sm:mr-4"
                    src={benefit.image} // Replace with the actual image URL if available
                    alt={benefit.name}
                  />
                  <div className="text-center sm:text-left">
                    <a
                      href={benefit.profile}
                      className="text-lg font-semibold text-blue-600 hover:underline"
                    >
                      {benefit.name}
                    </a>
                    <p className="text-sm text-gray-800">{benefit.institution}</p>
                    <p className="text-sm text-gray-800">{benefit.country}</p>
                  </div>
                </div>
                <div className="flex flex-col p-4 space-y-4">
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
                  <div className="bg-purple-200 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800">Citations</h3>
                    <p className="text-gray-800">Total: {benefit.citationsTotal}</p>
                    <p className="text-gray-800">Last 6 Years: {benefit.citationsLast6Years}</p>
                  </div>
                </div>
                <div className="p-4 border-t text-sm text-gray-800">{benefit.field}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default WannaBeResearcher;
