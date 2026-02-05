import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const ProductTemplatePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1400px] mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Product Template</h1>
            <div className="space-y-1">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Item Group</label>
              <div className="relative w-64">
                <select className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                  <option>Laptop</option>
                  <option>Desktop</option>
                  <option>Server</option>
                </select>
                <span className="material-icons-outlined absolute right-3 top-2 text-slate-400 pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl custom-shadow flex items-center gap-4 flex-wrap">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Doc. No</label>
              <input className="bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded px-3 py-2 text-sm w-20" disabled="" type="text" value="101" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Doc. Date</label>
              <input className="bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded px-3 py-2 text-sm w-32" disabled="" type="text" value="23/11/2024" />
            </div>
            <div className="space-y-1 flex-grow">
              <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Search Item Group</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm pr-10 focus:ring-primary focus:border-primary outline-none" placeholder="Search" type="text" />
                <span className="material-icons-outlined absolute right-3 top-2 text-slate-400">search</span>
              </div>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-medium text-sm transition-colors self-end h-[38px]">Edit</button>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl custom-shadow space-y-6">
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Add New Field</button>
          <div className="grid grid-cols-1 md:grid-cols-9 gap-4 items-end border border-slate-100 dark:border-slate-700 p-4 rounded-lg bg-slate-50/50 dark:bg-slate-900/30">
            <div className="space-y-1 col-span-1">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Field Name</label>
              <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" type="text" value="Processor" />
            </div>
            <div className="space-y-1 col-span-1">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Field Type</label>
              <select className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800">
                <option>Dropdown</option>
                <option>Text</option>
                <option>Number</option>
              </select>
            </div>
            <div className="space-y-1 col-span-1">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Data Type</label>
              <select className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800">
                <option>Alphanumeric</option>
                <option>Numeric</option>
                <option>Alphabet</option>
              </select>
            </div>
            <div className="space-y-1 col-span-1">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Seq No.</label>
              <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" type="text" value="01" />
            </div>
            <div className="space-y-1 col-span-1">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Short Name</label>
              <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" type="text" value="Pross." />
            </div>
            <div className="space-y-1 col-span-1 text-center">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block mb-3">Key Filed</label>
              <input checked="" className="w-5 h-5 text-green-500 rounded focus:ring-green-500 border-slate-300 dark:border-slate-600" type="checkbox" />
            </div>
            <div className="space-y-1 col-span-1 text-center">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block mb-3">Removable</label>
              <input className="w-5 h-5 text-primary rounded focus:ring-primary border-slate-300 dark:border-slate-600" type="checkbox" />
            </div>
            <div className="space-y-1 col-span-1 text-center">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 block mb-3">Printable</label>
              <input className="w-5 h-5 text-primary rounded focus:ring-primary border-slate-300 dark:border-slate-600" type="checkbox" />
            </div>
            <div className="col-span-1">
            </div>
          </div>
          <div className="flex justify-end">
            <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
              <span className="material-icons-outlined text-sm">add</span> Add Dropdown Value
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl custom-shadow space-y-6">
          <div className="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-lg">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 uppercase text-xs font-bold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-4 py-4">Field Name</th>
                  <th className="px-4 py-4">Field Type</th>
                  <th className="px-4 py-4">Data Type</th>
                  <th className="px-4 py-4">Seq No.</th>
                  <th className="px-4 py-4">Short Name</th>
                  <th className="px-4 py-4 text-center">View Dropdown</th>
                  <th className="px-4 py-4 text-center w-20">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30">
                  <td className="px-4 py-4 font-medium">Processor</td>
                  <td className="px-4 py-4">Dropdown</td>
                  <td className="px-4 py-4">Alphanumeric</td>
                  <td className="px-4 py-4">01</td>
                  <td className="px-4 py-4">Pross.</td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">visibility</span></button>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-secondary hover:text-secondary/80 transition-colors"><span className="material-icons-outlined">delete_outline</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30">
                  <td className="px-4 py-4 font-medium">RAM 1</td>
                  <td className="px-4 py-4">Text</td>
                  <td className="px-4 py-4">Alphanumeric</td>
                  <td className="px-4 py-4">02</td>
                  <td className="px-4 py-4">R1</td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">visibility</span></button>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-secondary hover:text-secondary/80 transition-colors"><span className="material-icons-outlined">delete_outline</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30">
                  <td className="px-4 py-4 font-medium">Hard Disk 1</td>
                  <td className="px-4 py-4">Text</td>
                  <td className="px-4 py-4">Alphanumeric</td>
                  <td className="px-4 py-4">05</td>
                  <td className="px-4 py-4">HDD 1</td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">visibility</span></button>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button className="text-secondary hover:text-secondary/80 transition-colors"><span className="material-icons-outlined">delete_outline</span></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button className="px-8 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-md font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Save</button>
            <button className="px-8 py-2 bg-secondary hover:bg-secondary/90 text-white rounded-md font-medium transition-colors">Submit</button>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default ProductTemplatePage;
