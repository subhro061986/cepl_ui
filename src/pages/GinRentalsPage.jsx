import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const GinRentalsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="flex-1 p-6 space-y-6 max-w-[1600px] mx-auto w-full">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Goods Inwards Note</h1>
        <div className="bg-white mb-2 dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Branch</label>
            <select className="w-full rounded px-3 py-2 border border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Warehouse</label>
            <select className="w-full rounded px-3 py-2 border border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
              <option>Select</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">GIN Type</label>
            <select className="w-full rounded px-3 py-2 border border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
              <option>Rental</option>
              <option>Purchase</option>
            </select>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 gap-2 mr-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">From Date</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" type="date" value="2025-10-12" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">To Date</label>
              <div className="flex gap-2">
                <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" type="date" value="2025-10-12" />
                <button className="bg-primary text-white px-4 py-2 rounded font-semibold text-sm hover:bg-opacity-90 transition-all">Go</button>
              </div>
            </div>
          </div>
          <div className="gap-2 ml-4">
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">GIN no</label>
            <select className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
              <option>New</option>
            </select>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 px-6 py-2 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-2xl">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">GIN No.</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" type="text" value="560" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">No of Items</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" type="number" value="10" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">GIN Date</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" type="date" value="2025-10-12" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Customer Name</label>
              <select className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
                <option>Auto Populated</option>
              </select>
            </div>
            <div className="lg:col-span-1">
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Customer Billing Address</label>
              <select className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
                <option>Select</option>
              </select>
            </div>
            <div className="lg:col-span-1">
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Customer Shipping Address</label>
              <select className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">GSTN</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary bg-gray-50" placeholder="Auto Populated" type="text" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Customer Contact Name</label>
              <select className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
                <option>Default - Primary</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Customer Contact Phone</label>
              <select className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
                <option>Default - Primary</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Received Date</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" type="date" value="2025-10-12" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Client Gate pass No</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" placeholder="Type here" type="text" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Client Gate Pass Date</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" type="date" value="2025-10-12" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Eway Bill No</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" placeholder="Type here" type="text" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Effective GIN Date</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" type="date" value="2025-10-12" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Pick-up Address</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" placeholder="Type here" type="text" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Messenger</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" placeholder="Type here" type="text" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">SAC Code</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary bg-gray-50" placeholder="Auto Populated" type="text" />
            </div>
            <div className="lg:col-span-1">
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Total Rental Value</label>
              <div className="space-y-1">
                <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary bg-gray-50" placeholder="Calculated" type="text" />
                <a className="text-xs text-primary font-medium hover:underline inline-block" href="#">Calculate</a>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Remarks</label>
              <input className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary" placeholder="Type here" type="text" />
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-4">
          <div className="flex items-end gap-4">
            <div className="w-64">
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">Select Sl# <span className="font-normal opacity-70">(List is populated with item Sl# available with customer)</span></label>
              <select className="w-full rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700 text-sm focus:ring-primary">
                <option>KB/1234</option>
              </select>
            </div>
            <span className="text-[10px] text-gray-400 mb-2">(Multi select)</span>
          </div>
          <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 dark:bg-gray-700/50">
                <tr className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Item Sl#</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Challan #</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Challan Date</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Order No</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">PO No</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">PO Date</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Earliest Return Date</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Item Group</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Specification</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">Note</th>
                  <th className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 w-12 text-center"></th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700 dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-4 py-3 font-medium">KB/1234</td>
                  <td className="px-4 py-3">360</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3">1011</td>
                  <td className="px-4 py-3">52</td>
                  <td className="px-4 py-3">02-02-2024</td>
                  <td className="px-4 py-3">02-02-2024</td>
                  <td className="px-4 py-3">Laptop</td>
                  <td className="px-4 py-3 text-xs">i3/16GB/512GB/14</td>
                  <td className="px-4 py-3"><input className="w-full text-xs py-1 px-2 rounded border px-3 py-2 border-slate-300 dark:border-gray-600 dark:bg-gray-700" placeholder="Type here" type="text" /></td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-1 rounded-full transition-colors">
                      <span className="material-icons-outlined text-lg">delete</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-4 py-3 font-medium">KB/1235</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3 text-xs"></td>
                  <td className="px-4 py-3"><input className="w-full text-xs py-1 px-2 rounded border-gray-200 dark:border-gray-600 dark:bg-gray-700" type="text" /></td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-1 rounded-full transition-colors">
                      <span className="material-icons-outlined text-lg">delete</span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="px-4 py-3 font-medium">KB/1236</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3 text-xs"></td>
                  <td className="px-4 py-3"><input className="w-full text-xs py-1 px-2 rounded border-gray-200 dark:border-gray-600 dark:bg-gray-700" type="text" /></td>
                  <td className="px-4 py-3 text-center">
                    <button className="text-secondary hover:bg-pink-50 dark:hover:bg-pink-900/20 p-1 rounded-full transition-colors">
                      <span className="material-icons-outlined text-lg">delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end items-center gap-3 pt-4">
            <button className="px-6 py-2 border border-gray-900 dark:border-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Clear</button>
            <button className="px-6 py-2 border border-gray-900 dark:border-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Save</button>
            <button className="px-6 py-2 border border-gray-900 dark:border-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">PDF</button>
            <button className="px-6 py-2 border border-gray-900 dark:border-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">Print</button>
            <button className="px-8 py-2 bg-secondary text-white rounded-lg text-sm font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all">Generate</button>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default GinRentalsPage;
