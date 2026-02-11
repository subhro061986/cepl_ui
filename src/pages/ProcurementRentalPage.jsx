import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const ProcurementRentalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Procurement (Rental)</h1>
          <div className="flex gap-3">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-medium shadow transition-all">Upload/View Reference</button>
            <button className="bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-600 text-slate-700 dark:text-slate-200 px-8 py-2 rounded-md font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">Print</button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm grid grid-cols-3 gap-4 border border-slate-200 dark:border-slate-700">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Branch</label>
                <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2">
                  <option>Kolkata</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Warehouse</label>
                <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2">
                  <option>Axis Mall</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Procurement Type</label>
                <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2">
                  <option>Rental</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Document No</label>
                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" type="text" value="D002" />
              </div>
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Doc. Date</label>
                <div className="relative">
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" type="date" value="2025-12-25" />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">(Sys Date for new)</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm grid grid-cols-3 gap-4 border border-slate-200 dark:border-slate-700">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">P.O. Reference</label>
                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" placeholder="Type here" type="text" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Procurement Challan No</label>
                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" placeholder="Type here" type="text" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Procurement Invoice No</label>
                <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" placeholder="Type here" type="text" />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <h3 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-4">Search for Doc. No</h3>
              <div className="grid grid-cols-12 gap-3 items-end">
                <div className="col-span-4">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">From Date</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-xs py-2" type="date" value="2025-10-12" />
                </div>
                <div className="col-span-4">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">To Date</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-xs py-2" type="date" value="2025-10-12" />
                </div>
                <div className="col-span-4">
                  <button className="bg-primary text-white w-full py-2 rounded-md font-medium text-xs">Go</button>
                </div>
                <div className="col-span-12 mt-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Doc. No</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-xs py-2">
                    <option>D002</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Procurement Date</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" type="date" value="2025-12-25" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Procured from</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2">
                    <option>Type here</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Total Qty</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" type="text" value="01" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Rate p.m.</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" type="text" value="1000" />
                </div>
                <div className="col-span-2 border-t border-slate-100 dark:border-slate-700 my-1 pt-4">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Rent Start Date</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" type="date" value="2025-12-25" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Rent Period</label>
                  <div className="flex gap-2">
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2">
                      <option>Months</option>
                    </select>
                    <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2">
                      <option>Days</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Rent End Date</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-sm py-2" readonly="" type="text" value="13 / 01 / 2026" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 text-left border-b border-slate-200 dark:border-slate-700">
                    <th className="px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-400">Line No</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-400">Item Group</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-400 text-center">Quantity</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-400">Specification</th>
                    <th className="px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-400 text-center">SI#</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3">
                      <select className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm py-1.5 min-w-[150px]">
                        <option>Select</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <input className="w-24 mx-auto block bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm py-1.5" placeholder="Type here" type="text" />
                    </td>
                    <td className="px-4 py-3">
                      <a className="text-primary text-xs font-medium hover:underline" href="#">Click To Generate Spec</a>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button className="bg-primary hover:bg-primary/90 text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase">Add SI #</button>
                    </td>
                    <td className="px-4 py-3"></td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700">
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">01</td>
                    <td className="px-4 py-3 text-sm font-medium">Laptop</td>
                    <td className="px-4 py-3 text-sm text-center">14</td>
                    <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">i3/2.4GB/512GB/16MB</td>
                    <td className="px-4 py-3 text-sm text-center text-slate-600 dark:text-slate-400">K25-26/SC-156</td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-accent-pink hover:bg-pink-50 dark:hover:bg-pink-900/20 p-1 rounded transition-all">
                        <span className="material-icons-outlined text-red-500">delete</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100 dark:border-slate-700 bg-slate-50/30 dark:bg-slate-900/10">
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-400">02</td>
                    <td className="px-4 py-3 text-sm font-medium">Laptop</td>
                    <td className="px-4 py-3 text-sm text-center">14</td>
                    <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400">i3/2.4GB/512GB/16MB</td>
                    <td className="px-4 py-3 text-sm text-center text-slate-600 dark:text-slate-400">K25-26/SC-156</td>
                    <td className="px-4 py-3 text-right">
                      <button className="text-accent-pink hover:bg-pink-50 dark:hover:bg-pink-900/20 p-1 rounded transition-all">
                        <span className="material-icons-outlined text-red-500">delete</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-5 flex flex-wrap items-center justify-between gap-6 border-t border-slate-200 dark:border-slate-700">
                <div className="flex flex-wrap gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Received by:</span>
                      <span className="text-sm font-semibold">EC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Accepted by:</span>
                      <span className="text-sm font-semibold">EC</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Received on:</span>
                      <div className="relative">
                        <input className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-md text-xs py-1 px-2" type="date" value="2024-10-12" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Accepted on:</span>
                      <span className="text-sm font-semibold">12-12-2024</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-8 py-2 border border-slate-900 dark:border-slate-900 rounded-md text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Save</button>
                  <button className="px-8 py-2 border border-slate-900 dark:border-slate-900 rounded-md text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Receive</button>
                  <button className="px-8 py-2 border border-slate-900 dark:border-slate-900 rounded-md text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Accept</button>
                  <button className="px-10 py-2 bg-secondary hover:bg-accent-pink/90 text-white rounded-md text-sm font-semibold shadow-md transition-all ml-2">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default ProcurementRentalPage;
