import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";

const rows = [
  { branch: "Kolkata",
                  name: "John Smith",
                  address: "Kolkata",
                  code: "K 0023",
                  regAddress: "601 W Temple Street, Cathedral...",
                  pin: "700052",
                  city: "Kolkata",
                  state: "West Bengal",
                  contact: "John",
                  active: true},];
const CustomerListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main class="p-8 max-w-[1600px] mx-auto">
        <h1 class="text-2xl font-bold text-slate-800 dark:text-white mb-6">Customer List</h1>
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div class="space-y-2">
            <label class="text-sm font-semibold text-slate-600 dark:text-slate-400">Branch</label>
            <div class="relative w-full md:w-64">
              <select class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-slate-700 dark:text-slate-300">
                <option>All</option>
                <option>Kolkata</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>
              <span class="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">expand_more</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-[#009FE3] hover:bg-blue-600 text-white font-semibold py-2.5 px-6 rounded-lg shadow-sm transition-colors text-sm flex items-center gap-2">
              <span className="material-icons-outlined text-lg">add</span>
              Add New Customer
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
        <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div class="overflow-x-auto custom-scrollbar">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Branch</th>
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer Name</th>
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Address</th>
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer Code</th>
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Registered Office Address</th>
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Pin</th>
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">City</th>
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">State</th>
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact Person</th>
                  <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                
                  {rows.map((row, index) => (
                  <tr key={index} class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{row.branch}</td>
                    <td class="px-6 py-4 text-sm font-medium text-slate-800 dark:text-white">{row.name}</td>
                    <td class="px-6 py-4 text-sm">
                      <div class="relative min-w-[120px]">
                        <select class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-xs appearance-none focus:ring-1 focus:ring-primary outline-none">
                          <option>{row.address}</option>
                        </select>
                        <span class="material-icons-outlined absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 text-sm">expand_more</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{row.code}</td>
                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 truncate max-w-[200px]">{row.regAddress}</td>
                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{row.pin}</td>
                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{row.city}</td>
                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 whitespace-nowrap">{row.state}</td>
                    <td class="px-6 py-4 text-sm">
                      <div class="relative min-w-[100px]">
                        <select class="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-xs appearance-none focus:ring-1 focus:ring-primary outline-none">
                          <option>{row.contact}</option>
                        </select>
                        <span class="material-icons-outlined absolute right-1 top-1/2 -translate-y-1/2 text-slate-400 text-sm">expand_more</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-sm">
                      <div class="flex items-center justify-center gap-4">
                        <button class="text-slate-400 hover:text-primary transition-colors">
                          <span class="material-icons-outlined text-[20px]">edit_note</span>
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
<div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-end">
<span class="text-xs text-slate-400">Showing 1 to 6 of 6 entries</span>
</div>
</div>
</main>
    </>
    
  );
};

export default CustomerListPage;
