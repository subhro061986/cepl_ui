import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const GinInspectionReportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1600px] mx-auto">
        <h1 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">GIN Inspection Report</h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          <div className="lg:col-span-4 bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <label className="block text-sm font-bold mb-3 text-slate-900 dark:text-white">Branch</label>
            <select className="w-full bg-background-light dark:bg-slate-800 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm focus:ring-primary focus:border-primary">
              <option>Select</option>
            </select>
          </div>
          <div className="lg:col-span-8 bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Filters:</h2>
            <div className="flex flex-wrap items-end gap-4">
              <div className="flex-1 min-w-[150px]">
                <label className="block text-sm font-bold mb-2 text-slate-900 dark:text-white">GIN no</label>
                <select className="w-full bg-background-light dark:bg-slate-800 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm focus:ring-primary focus:border-primary">
                  <option>Select</option>
                </select>
              </div>
              <div className="flex-1 min-w-[150px]">
                <label className="block text-sm font-bold mb-2 text-slate-900 dark:text-white">Asset No</label>
                <select className="w-full bg-background-light dark:bg-slate-800 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm focus:ring-primary focus:border-primary">
                  <option>Select</option>
                </select>
              </div>
              <div className="flex-1 min-w-[150px]">
                <label className="block text-sm font-bold mb-2 text-slate-900 dark:text-white">Status</label>
                <select className="w-full bg-background-light dark:bg-slate-800 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm focus:ring-primary focus:border-primary">
                  <option>Select</option>
                </select>
              </div>
              <div className="flex gap-2">
                <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-2 rounded-md text-sm font-semibold transition-all">Apply Filter</button>
                <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-2 rounded-md text-sm font-semibold transition-all">Clear Filters</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-md font-bold text-slate-900 dark:text-white">List of GINs Pending Inspection</h2>
          </div>
          <div className="table-container overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">GIN No.</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">GIN Date</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">Asset SI#</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">Item Group</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">Model</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">Brand</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">Specification</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400 text-center">Found OK</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400 text-center">Needs Repair</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400 text-center">Initiate Disposal</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">Inspected by</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">Date</th>
                  <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">Remarks</th>
                  <th className="p-3 border-b border-slate-200 dark:border-slate-700 font-semibold text-slate-600 dark:text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">811</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">12-10-2025</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">S97356</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">Laptop</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">HP-230</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">HP</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">i7/16GB/1TB/3.0GHZ/14"</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input checked="" className="rounded border-slate-300 dark:border-slate-600 text-green-500 focus:ring-green-500" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">ED</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-slate-400 italic">Sys date</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">
                    <input className="w-full bg-transparent border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-xs focus:ring-primary focus:border-primary" placeholder="Type here" type="text" />
                  </td>
                  <td className="p-3 font-medium text-green-600 dark:text-green-400">Found Ok</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">912</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input checked="" className="rounded border-slate-300 dark:border-slate-600 text-green-500 focus:ring-green-500" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">
                    <input className="w-full bg-transparent border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-xs focus:ring-primary focus:border-primary" placeholder="Type here" type="text" />
                  </td>
                  <td className="p-3 font-medium text-green-600 dark:text-green-400">Found Ok</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">234</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">
                    <input className="w-full bg-transparent border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-xs focus:ring-primary focus:border-primary" placeholder="Type here" type="text" />
                  </td>
                  <td className="p-3 font-medium text-slate-500">Inspection Pending</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">683</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input checked="" className="rounded border-slate-300 dark:border-slate-600 text-amber-500 focus:ring-amber-500" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">
                    <input className="w-full bg-transparent border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-xs focus:ring-primary focus:border-primary" placeholder="Type here" type="text" />
                  </td>
                  <td className="p-3 font-medium text-amber-600 dark:text-amber-400">Repair pending</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">222</td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <input checked="" className="rounded border-slate-300 dark:border-slate-600 text-red-500 focus:ring-red-500" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="p-3 border-r border-slate-200 dark:border-slate-700">
                    <input className="w-full bg-transparent border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-xs focus:ring-primary focus:border-primary" placeholder="Type here" type="text" />
                  </td>
                  <td className="p-3 font-medium text-red-600 dark:text-red-400">Disposal pending</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 flex justify-end gap-3 bg-slate-50 dark:bg-slate-800/50">
            <button className="px-8 py-2 border border-slate-900 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-md text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">Save</button>
            <button className="px-8 py-2 bg-secondary hover:bg-opacity-90 text-white rounded-md text-sm font-semibold transition-all">Submit</button>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default GinInspectionReportPage;
