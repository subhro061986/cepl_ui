import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const GinListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 space-y-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-end">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Branch</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-sm p-2 focus:ring-primary focus:border-primary">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Warehouse</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-sm p-2 focus:ring-primary focus:border-primary">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">GIN Type</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-sm p-2 focus:ring-primary focus:border-primary">
                <option>Rental</option>
              </select>
            </div>
            <div className="lg:col-span-2 flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">Search for GIN. Date</label>
                <div className="relative">
                  <label className="block text-[10px] absolute -top-1.5 left-2 px-1 bg-white dark:bg-slate-900 text-slate-500">From Date</label>
                  <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-sm p-2 pt-3 focus:ring-primary focus:border-primary" type="text" value="12 / 10 / 2025" />
                  <span className="material-icons-outlined absolute right-2 top-2.5 text-slate-400 text-lg">calendar_today</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <label className="block text-[10px] absolute -top-1.5 left-2 px-1 bg-white dark:bg-slate-900 text-slate-500">To Date</label>
                  <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-sm p-2 pt-3 focus:ring-primary focus:border-primary" type="text" value="12 / 10 / 2025" />
                  <span className="material-icons-outlined absolute right-2 top-2.5 text-slate-400 text-lg">calendar_today</span>
                </div>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center">Go</button>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">GIN no</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md text-sm p-2 focus:ring-primary focus:border-primary">
                <option>All</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md font-medium text-sm shadow-sm">
            Matched with CEPL Challan
          </button>
          <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Missmatched
          </button>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-r border-slate-200 dark:border-slate-700">GIN No</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-r border-slate-200 dark:border-slate-700">GIN Date</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-r border-slate-200 dark:border-slate-700">CEPL Challan No</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-r border-slate-200 dark:border-slate-700">Asset Sl#</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-r border-slate-200 dark:border-slate-700">Customer Name</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-r border-slate-200 dark:border-slate-700">Billing Address</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-r border-slate-200 dark:border-slate-700">Shipping Adders</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-r border-slate-200 dark:border-slate-700">PO No.</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-r border-slate-200 dark:border-slate-700">Order No</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700 text-center">Select</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="h-10">
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="text-center">
                    <input checked="" className="rounded text-green-500 focus:ring-green-500 border-slate-300 dark:border-slate-600 dark:bg-slate-700" type="checkbox" />
                  </td>
                </tr>
                <tr className="h-10">
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="text-center"></td>
                </tr>
                <tr className="h-10">
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="text-center"></td>
                </tr>
                <tr className="h-10">
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="text-center"></td>
                </tr>
                <tr className="h-10">
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="border-r border-slate-200 dark:border-slate-700"></td>
                  <td className="text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 flex justify-end bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
            <button className="bg-primary text-white px-6 py-2 rounded-md font-medium text-sm shadow-md hover:brightness-110 transition-all flex items-center gap-2">
              View Details
            </button>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default GinListPage;
