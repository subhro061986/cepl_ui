import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const ProcurementListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 space-y-6 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Procurement list</h1>
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-6 rounded-md shadow-sm flex items-center justify-center transition-all active:scale-95">
            <span className="material-icons-outlined mr-2 text-xl">add</span>
            New Procurement
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Branch</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors">
                <option>Kolkata</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Warehouse</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors">
                <option>Axis Mall</option>
                <option>Central Depot</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Type</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors">
                <option>Own</option>
                <option>Lease</option>
              </select>
            </div>
          </div>
          <div className="lg:col-span-7 bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-wrap items-end gap-4">
            <div className="flex-1 min-w-[150px]">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">From Date</label>
              <div className="relative">
                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary pl-3 pr-10 py-2" type="text" value="12/10/2025" />
                <span className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">calendar_today</span>
              </div>
            </div>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">To Date</label>
              <div className="relative">
                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary pl-3 pr-10 py-2" type="text" value="12/10/2025" />
                <span className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">calendar_today</span>
              </div>
            </div>
            <button className="bg-primary text-white h-[38px] px-6 rounded-md font-medium hover:bg-primary/90 transition-colors">Go</button>
            <div className="flex-1 min-w-[150px]">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Doc. No</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary">
                <option>D002</option>
                <option>D003</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-lg font-semibold">List of Open Procurement</h2>
            <div className="relative max-w-sm">
              <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
              <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-md text-sm pl-10 pr-4 py-2 focus:ring-primary focus:border-primary" placeholder="Search Item..." type="text" />
            </div>
          </div>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-3 text-xs font-bold text-primary uppercase tracking-wider cursor-pointer hover:underline">Doc. No (Sort)</th>
                  <th className="px-6 py-3 text-xs font-bold text-primary uppercase tracking-wider cursor-pointer hover:underline">Doc. Date (Sort)</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Line No.</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Item Description</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Model No</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Part No.</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sl. No</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Qty</th>
                  <th className="px-6 py-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Select/View</th>
                  <th className="px-6 py-3 text-xs font-bold text-primary uppercase tracking-wider text-right cursor-pointer hover:underline">Status (Sort)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">D002</td>
                  <td className="px-6 py-4 text-sm">23-11-2024</td>
                  <td className="px-6 py-4 text-sm">01</td>
                  <td className="px-6 py-4 text-sm">Keyboard</td>
                  <td className="px-6 py-4 text-sm">Keyboard for Del</td>
                  <td className="px-6 py-4 text-sm">K25-26/SC-156</td>
                  <td className="px-6 py-4 text-sm font-mono">SPL040925</td>
                  <td className="px-6 py-4 text-sm">1</td>
                  <td className="px-6 py-4 text-sm text-center">
                    <input checked="" className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400 text-right">Submitted</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">D003</td>
                  <td className="px-6 py-4 text-sm text-slate-500">23-11-2024</td>
                  <td className="px-6 py-4 text-sm">02</td>
                  <td className="px-6 py-4 text-sm">Keyboard</td>
                  <td className="px-6 py-4 text-sm">Keyboard for Del</td>
                  <td className="px-6 py-4 text-sm">K25-26/SC-156</td>
                  <td className="px-6 py-4 text-sm font-mono">SPL040925</td>
                  <td className="px-6 py-4 text-sm">1</td>
                  <td className="px-6 py-4 text-sm text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-500 text-right">Saved</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">D004</td>
                  <td className="px-6 py-4 text-sm text-slate-500">23-11-2024</td>
                  <td className="px-6 py-4 text-sm">01</td>
                  <td className="px-6 py-4 text-sm">Laptop</td>
                  <td className="px-6 py-4 text-sm">Del 260</td>
                  <td className="px-6 py-4 text-sm">L23-345/187</td>
                  <td className="px-6 py-4 text-sm font-mono">LPL 1234</td>
                  <td className="px-6 py-4 text-sm">1</td>
                  <td className="px-6 py-4 text-sm text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-500 text-right">Saved</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">D005</td>
                  <td className="px-6 py-4 text-sm text-slate-500">23-11-2024</td>
                  <td className="px-6 py-4 text-sm">01</td>
                  <td className="px-6 py-4 text-sm">Laptop</td>
                  <td className="px-6 py-4 text-sm">Del 260</td>
                  <td className="px-6 py-4 text-sm">L23-345/187</td>
                  <td className="px-6 py-4 text-sm font-mono">LPL 1234</td>
                  <td className="px-6 py-4 text-sm">1</td>
                  <td className="px-6 py-4 text-sm text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-blue-500 text-right">Accepted</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">D006</td>
                  <td className="px-6 py-4 text-sm text-slate-500">23-11-2024</td>
                  <td className="px-6 py-4 text-sm">01</td>
                  <td className="px-6 py-4 text-sm">Laptop</td>
                  <td className="px-6 py-4 text-sm">Del 260</td>
                  <td className="px-6 py-4 text-sm">L23-345/187</td>
                  <td className="px-6 py-4 text-sm font-mono">LPL 1234</td>
                  <td className="px-6 py-4 text-sm">1</td>
                  <td className="px-6 py-4 text-sm text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-orange-500 text-right">Master Created</td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b-0">
                  <td className="px-6 py-4 text-sm font-medium">D007</td>
                  <td className="px-6 py-4 text-sm text-slate-500">23-11-2024</td>
                  <td className="px-6 py-4 text-sm">01</td>
                  <td className="px-6 py-4 text-sm">Laptop</td>
                  <td className="px-6 py-4 text-sm">Del 260</td>
                  <td className="px-6 py-4 text-sm">L23-345/187</td>
                  <td className="px-6 py-4 text-sm font-mono">LPL 1234</td>
                  <td className="px-6 py-4 text-sm">1</td>
                  <td className="px-6 py-4 text-sm text-center">
                    <input className="rounded border-slate-300 dark:border-slate-600 dark:bg-slate-900 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-500 text-right">Saved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-lg font-semibold flex items-center">
              Details of selected procurement for:
              <span className="ml-2 text-primary">Doc. No D002 Line No 01</span>
            </h2>
          </div>
          <div className="p-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-6">
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Description</span>
              <p className="text-sm font-medium">Keyboard</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Part No</span>
              <p className="text-sm font-medium">K25-26/SC-156</p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Model</span>
              <p className="text-sm font-medium">Keyboard for Del laptop</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Brand</span>
              <p className="text-sm font-medium">NA</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Sl. No</span>
              <p className="text-sm font-medium font-mono">SPL040925</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Qty</span>
              <p className="text-sm font-medium">01</p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Purchased from</span>
              <p className="text-sm font-medium">Starmax Infotech</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Bill No</span>
              <p className="text-sm font-medium">17234</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Bill Date</span>
              <p className="text-sm font-medium">04-09-2024</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Rate</span>
              <p className="text-sm font-medium">350</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">HSN Code</span>
              <p className="text-sm font-medium">12564</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Warranty Period</span>
              <p className="text-sm font-medium">04 months</p>
            </div>
            <div>
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Warranty Type</span>
              <p className="text-sm font-medium">Onsite</p>
            </div>
            <div className="col-span-full md:col-span-3">
              <span className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Brief Specification</span>
              <p className="text-sm text-slate-600 dark:text-slate-400 italic">This is a keyboard for Del Laptop</p>
            </div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 flex flex-wrap justify-end items-end gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-6 rounded-md shadow-sm transition-all active:scale-95 flex items-center">
              <span className="material-icons-outlined mr-2">download</span>
              Download Spec
            </button>
           
              <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2.5 px-8 rounded-md shadow-sm transition-all active:scale-95">
                Accept
              </button>
              <button className="border-2 border-rose-500 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950 font-semibold py-2.5 px-8 rounded-md transition-all active:scale-95">
                Reject
              </button>
            
          </div>
        </div>
      </main>
    </>
    
  );
};

export default ProcurementListPage;
