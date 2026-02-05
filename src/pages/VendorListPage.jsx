import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";

const rows = [
  { branch: "Kolkata", name: "John Smith", type: "Asset Rental", code: "K 0023", address: "601 W Temple Street, Cathedral...", pin: "700052", city: "Kolkata", state: "West Bengal", contact: "John", active: true },
  { branch: "Kolkata", name: "John Smith", type: "Asset Rental", code: "K 0023", address: "601 W Temple Street, Cathedral...", pin: "700052", city: "Kolkata", state: "West Bengal", contact: "John", active: false },
  { branch: "Kolkata", name: "John Smith", type: "Asset Rental", code: "K 0023", address: "601 W Temple Street, Cathedral...", pin: "700052", city: "Kolkata", state: "West Bengal", contact: "John", active: true },
  { branch: "Kolkata", name: "John Smith", type: "Asset Rental", code: "K 0023", address: "601 W Temple Street, Cathedral...", pin: "700052", city: "Kolkata", state: "West Bengal", contact: "John", active: true },
  { branch: "Kolkata", name: "John Smith", type: "Asset Rental", code: "K 0023", address: "601 W Temple Street, Cathedral...", pin: "700052", city: "Kolkata", state: "West Bengal", contact: "John", active: false },
  { branch: "Kolkata", name: "John Smith", type: "Asset Rental", code: "K 0023", address: "601 W Temple Street, Cathedral...", pin: "700052", city: "Kolkata", state: "West Bengal", contact: "John", active: true },
];
const VendorListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1600px] mx-auto">
        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Vendor List</h1>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Branch</label>
              <select className="w-64 h-10 px-3 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary dark:text-slate-200">
                <option>All</option>
                <option>Kolkata</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#009FE3] hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm transition-colors text-sm flex items-center gap-2">
              <span className="material-icons-outlined text-lg">add</span>
              Add New Vendor
            </button>
            <div className="relative">
              <label className="absolute -top-6 left-0 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Search Vendor</label>
              <div className="relative">
                <input className="w-64 h-10 pl-3 pr-10 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary dark:text-slate-200" placeholder="Search" type="text" />
                <span className="material-icons-outlined absolute right-3 top-2.5 text-slate-400">search</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Branch</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Vendor Name</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Vendor Type</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Address</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Vendor Code</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Registered Office Address</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pin</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">City</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">State</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact Person</th>
                  <th className="px-4 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">


                {rows.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">{row.branch}</td>
                    <td className="px-4 py-4 text-sm font-medium text-slate-800 dark:text-slate-200">{row.name}</td>
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">{row.type}</td>
                    <td className="px-4 py-3 min-w-[140px]">
                      <select className="w-full h-8 px-2 rounded border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:ring-primary dark:text-slate-300">
                        <option>{row.branch}</option>
                      </select>
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">{row.code}</td>
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 truncate max-w-[180px]">{row.address}</td>
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">{row.pin}</td>
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">{row.city}</td>
                    <td className="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">{row.state}</td>
                    <td className="px-4 py-3 min-w-[120px]">
                      <select className="w-full h-8 px-2 rounded border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs focus:ring-primary dark:text-slate-300">
                        <option>{row.contact}</option>
                      </select>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-4">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-icons-outlined text-[20px]">edit_note</span>
                        </button>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" checked={row.active} />
                          <div className="w-11 h-6 bg-red-100 dark:bg-red-900/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-500 relative">

                          </div>
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}


              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 flex items-center justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 6 of 24 entries</span>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400"><span className="material-icons-outlined">chevron_left</span></button>
              <button className="w-8 h-8 rounded bg-[#009FE3] text-white text-sm font-bold">1</button>
              <button className="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-sm text-slate-600 dark:text-slate-400">2</button>
              <button className="w-8 h-8 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-sm text-slate-600 dark:text-slate-400">3</button>
              <button className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400"><span className="material-icons-outlined">chevron_right</span></button>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default VendorListPage;
