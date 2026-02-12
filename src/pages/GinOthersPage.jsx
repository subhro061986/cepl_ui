import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const GinOthersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Goods Inwards Note (Without Order)</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 items-end">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Branch</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary">
                <option>Select</option>
                <option>Main Branch</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Warehouse</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary">
                <option>Select</option>
                <option>Pune Warehouse</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">GIN Type</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary">
                <option>Others</option>
                <option>Rental</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">From Date</label>
              <input className="w-full bg-slate-50 dark:bg-slate-800 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary" type="date" value="2025-10-12" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">To Date</label>
              <input className="w-full bg-slate-50 dark:bg-slate-800 border px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary" type="date" value="2025-10-12" />
            </div>
            <div className="flex gap-2">
              <div className="flex-grow space-y-1.5">
                <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">GIN no</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary">
                  <option>New</option>
                </select>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white p-1.5 rounded-md self-end transition-colors shadow-sm">
                <span className="material-icons-outlined">search</span>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
          <div className="flex gap-4">
            <button className="bg-primary text-white px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
              <span className="material-icons-outlined text-lg">add</span> Add New GIN
            </button>
            <button className="border border-slate-900 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 transition-colors">
              <span className="material-icons-outlined text-lg text-slate-500">edit</span> Edit GIN
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">GIN No.</label>
              <input className="w-full bg-slate-100 dark:bg-slate-800/50 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm italic" disabled="" placeholder="Auto generated" type="text" />
            </div>
            <div className="space-y-1.5 lg:col-span-1">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Customer/Vender Name</label>
              <select className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm">
                <option>Select</option>
              </select>
            </div>
            <div className="space-y-1.5 lg:col-span-1">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Customer/Vender Address</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Sender Gate pass No</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Sender Gate Pass Date</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">GSTN</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Contact Name</label>
              <select className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm">
                <option>Select</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Contact Phone</label>
              <select className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm">
                <option>Select</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">GIN Date</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" type="date" value="2025-10-12" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Received Date</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" type="date" value="2025-10-12" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Eway Bill No</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Pick-up Address</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Messenger</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">HSN/SAC Code</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Total Value</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-600 dark:text-slate-400">Remarks</label>
              <input className="w-full bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded-md text-sm" placeholder="Type here" type="text" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="flex items-center justify-end gap-3 mb-4">
            <button className="px-4 py-2 border border-slate-900 dark:border-slate-700 rounded-md text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Check all CEPL</button>
            <button className="px-4 py-2 bg-secondary text-white rounded-md text-sm font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity">
              <span className="material-icons-outlined text-lg">add_circle_outline</span> Add Item
            </button>
          </div>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1200px]">
              <thead>
                <tr className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Item Sl No</th>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Matched Branch/Warehouse</th>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Asset Group</th>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Model</th>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Make</th>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Part No</th>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Description Of Goods</th>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700">Note</th>
                  <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-blue-50/30 dark:bg-blue-900/10">
                  <td className="px-2 py-2"><input className="w-full text-xs bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded p-1.5" placeholder="Type here" type="text" /></td>
                  <td className="px-2 py-2"><input className="w-full text-xs bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded p-1.5" type="text" value="Pune" /></td>
                  <td className="px-2 py-2"><select className="w-full text-xs bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded p-1.5"><option>Select</option></select></td>
                  <td className="px-2 py-2"><input className="w-full text-xs bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded p-1.5" placeholder="Type here" type="text" /></td>
                  <td className="px-2 py-2"><input className="w-full text-xs bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded p-1.5" placeholder="Type here" type="text" /></td>
                  <td className="px-2 py-2"><input className="w-full text-xs bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded p-1.5" type="text" value="Hp 345" /></td>
                  <td className="px-2 py-2"><span className="text-xs text-primary underline font-medium cursor-pointer">i3/4/1TB/Win 10Pro</span></td>
                  <td className="px-2 py-2"><input className="w-full text-xs bg-white dark:bg-slate-800 border px-3 py-2 border-slate-300 dark:border-slate-700 rounded p-1.5" type="text" value="Xyz" /></td>
                  <td className="px-2 py-2 text-center"></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3 text-sm">KB/157/94</td>
                  <td className="px-4 py-3 text-sm">Pune</td>
                  <td className="px-4 py-3 text-sm">Laptop</td>
                  <td className="px-4 py-3 text-sm">HP234</td>
                  <td className="px-4 py-3 text-sm">HP</td>
                  <td className="px-4 py-3 text-sm">HP 345</td>
                  <td className="px-4 py-3 text-sm text-slate-500">i3/4/500GB/win10Pro/14"/Carry Care</td>
                  <td className="px-4 py-3 text-sm"></td>
                  <td className="px-4 py-3 text-center"><button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-1.5 rounded-full transition-colors"><span className="material-icons-outlined text-lg">delete</span></button></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3 text-sm">KB/157/94</td>
                  <td className="px-4 py-3 text-sm">Pune</td>
                  <td className="px-4 py-3 text-sm">Laptop</td>
                  <td className="px-4 py-3 text-sm">HP234</td>
                  <td className="px-4 py-3 text-sm">HP</td>
                  <td className="px-4 py-3 text-sm">HP 345</td>
                  <td className="px-4 py-3 text-sm text-slate-500">i3/4/500GB/win10Pro/14"/Carry Care</td>
                  <td className="px-4 py-3 text-sm"></td>
                  <td className="px-4 py-3 text-center"><button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-1.5 rounded-full transition-colors"><span className="material-icons-outlined text-lg">delete</span></button></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3 text-sm">KB/157/94</td>
                  <td className="px-4 py-3 text-sm">Pune</td>
                  <td className="px-4 py-3 text-sm">Laptop</td>
                  <td className="px-4 py-3 text-sm">HP234</td>
                  <td className="px-4 py-3 text-sm">HP</td>
                  <td className="px-4 py-3 text-sm">HP 345</td>
                  <td className="px-4 py-3 text-sm text-slate-500">i3/4/500GB/win10Pro/14"/Carry Care</td>
                  <td className="px-4 py-3 text-sm"></td>
                  <td className="px-4 py-3 text-center"><button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-1.5 rounded-full transition-colors"><span className="material-icons-outlined text-lg">delete</span></button></td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3 text-sm">KB/157/94</td>
                  <td className="px-4 py-3 text-sm">Pune</td>
                  <td className="px-4 py-3 text-sm">Laptop</td>
                  <td className="px-4 py-3 text-sm">HP234</td>
                  <td className="px-4 py-3 text-sm">HP</td>
                  <td className="px-4 py-3 text-sm">HP 345</td>
                  <td className="px-4 py-3 text-sm text-slate-500">i3/4/500GB/win10Pro/14"/Carry Care</td>
                  <td className="px-4 py-3 text-sm"></td>
                  <td className="px-4 py-3 text-center"><button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-1.5 rounded-full transition-colors"><span className="material-icons-outlined text-lg">delete</span></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-3 pb-8">
          <button className="bg-primary text-white px-6 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
            <span className="material-icons-outlined text-lg">print</span> Print
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity">
            <span className="material-icons-outlined text-lg">picture_as_pdf</span> PDF
          </button>
          <button className="bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-700 px-8 py-2.5 rounded-md text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Clear
          </button>
          <button className="bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-700 px-8 py-2.5 rounded-md text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            Save
          </button>
          <button className="bg-secondary text-white px-8 py-2.5 rounded-md text-sm font-semibold shadow-md hover:opacity-90 transition-opacity">
            Generate
          </button>
        </div>
      </main>
    </>
    
  );
};

export default GinOthersPage;
