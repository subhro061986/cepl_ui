import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const WarehousePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-8 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Warehouses</h1>
          <div className="flex items-center gap-4">
            <div className="relative w-full md:w-80">
              <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="block w-full pl-10 pr-3 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-sm transition-all shadow-sm" placeholder="Search" type="text" />
            </div>
            <button className="bg-[#009FE3] hover:bg-sky-600 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap">
              <span className="material-icons-outlined text-lg">add</span>
              Add Warehouse
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Warehouse Code</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Warehouse Name</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Associate Branch</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300">Location</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600 dark:text-slate-300 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">WH/0001</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 dark:text-slate-200">Park Street Showroom &amp; Service</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Kolkata Corporate Office</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Kolkata</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons-outlined text-xl">visibility</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons-outlined text-xl">edit_note</span>
                      </button>
                      <button className="p-1.5 text-rose-400 hover:text-rose-600 transition-colors">
                        <span className="material-icons-outlined text-xl">delete_outline</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">WH/0002</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-800 dark:text-slate-200">Axis Mall Service Center</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Kolkata Corporate Office</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Kolkata</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons-outlined text-xl">visibility</span>
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-icons-outlined text-xl">edit_note</span>
                      </button>
                      <button className="p-1.5 text-rose-400 hover:text-rose-600 transition-colors">
                        <span className="material-icons-outlined text-xl">delete_outline</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">Showing 2 of 2 entries</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-400 cursor-not-allowed">Previous</button>
              <button className="px-3 py-1 text-xs font-medium bg-primary text-white border border-primary rounded">1</button>
              <button className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-600 dark:text-slate-400 hover:border-primary">Next</button>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default WarehousePage;
