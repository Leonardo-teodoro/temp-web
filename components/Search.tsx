import { FormEvent, useState } from "react";
import City from "./city";
import CityService from "./city-service";
import Result from "./Result";

import { SearchIcon } from "@heroicons/react/outline";
export default function Search() {
  const [city, setCity] = useState<City>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const service = new CityService();
    const response = await service.findCity({
      q: document.getElementById("city").value,
    });

    setCity(response);
  };
  return (
    <div>
      <search>
        <div className=" overflow-hidden border-t border-l border-r border-gray-400 flex justify-center">
          <div id="search-container" className="w-full">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-center">
                <input
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline focus:border-sky-500"
                  id="city"
                  type="text"
                  placeholder="Cidade"
                />
                <div className="flex justify-end items-center">
                  <button
                    id="search-temperature"
                    className="ml-3 flex items-center h-10 px-6 font-semibold rounded-md bg-black text-white hover:bg-gray-700"
                  >
                    Pesquisar
                    <SearchIcon className="ml-3 h-3" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </search>

      <div>
        <Result hidden={city === null} city={city} />
      </div>
    </div>
  );
}
