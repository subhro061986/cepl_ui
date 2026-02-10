import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const CustomerRateContractPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1400px] mx-auto p-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Customer Rate Contract</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Branch: <span className="font-semibold text-slate-700 dark:text-slate-300">Main Office</span></p>
        </div>
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Customer Code</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Type here" type="text" />
            </div>
            <div className="lg:col-span-1 lg:row-span-2 space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Customer Address</label>
              <textarea className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder="Type here" rows="5"></textarea>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Start Date</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md pl-4 pr-10 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="date" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Select Date</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md pl-4 pr-10 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="date" />
              </div>
            </div>
            <div className="space-y-2 lg:mt-0">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Customer Name</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Validity</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">End Date</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md pl-4 pr-10 py-2.5 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="date" />
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-end mt-2">
              <button className="bg-secondary hover:bg-pink-600 text-white font-semibold py-2.5 px-10 rounded shadow-md transition-all active:scale-95">
                Enter
              </button>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2 w-64">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Rate Per</label>
              <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                <option>Month</option>
                <option>Quarter</option>
                <option>Year</option>
              </select>
            </div>
            <button className="bg-primary hover:bg-sky-500 text-white font-semibold py-2 px-6 rounded shadow-md transition-all active:scale-95 flex items-center gap-2">
              <span className="material-icons-outlined text-sm">add</span>
              Add New Row
            </button>
          </div>
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 uppercase text-xs font-bold tracking-wider">
                <tr>
                  <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">Item Group</th>
                  <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">Name</th>
                  <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">Standard Configuration</th>
                  <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">Rate</th>
                  <th className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-4 py-4">
                    <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-primary outline-none" type="text" value="XYZ" />
                  </td>
                  <td className="px-4 py-4">
                    <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-primary outline-none" type="text" value="P751/234" />
                  </td>
                  <td className="px-4 py-4">
                    <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-primary outline-none" type="text" value="B002" />
                  </td>
                  <td className="px-4 py-4">
                    <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-primary outline-none" type="text" value="1600" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-2 rounded-full transition-colors">
                      <span className="material-icons-outlined">delete</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-4 py-4"><input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm" type="text" /></td>
                  <td className="px-4 py-4"><input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm" type="text" /></td>
                  <td className="px-4 py-4"><input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm" type="text" /></td>
                  <td className="px-4 py-4"><input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm" type="text" /></td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-2 rounded-full transition-colors">
                      <span className="material-icons-outlined">delete</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-4 py-4"><input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm" type="text" /></td>
                  <td className="px-4 py-4"><input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm" type="text" /></td>
                  <td className="px-4 py-4"><input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm" type="text" /></td>
                  <td className="px-4 py-4"><input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-1.5 text-sm" type="text" /></td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-2 rounded-full transition-colors">
                      <span className="material-icons-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end items-center gap-4 mt-8">
            <button className="px-10 py-2.5 border border-slate-300 dark:border-slate-600 font-semibold rounded text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">
              Save
            </button>
            <button className="px-10 py-2.5 bg-secondary hover:bg-pink-600 text-white font-semibold rounded shadow-md transition-all active:scale-95">
              Submit
            </button>
          </div>
        </section>
      </main>
    </>
    
  );
};

export default CustomerRateContractPage;
