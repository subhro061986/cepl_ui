import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const BulkOrderFulfilmentApprovalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1600px] mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">RAMS Bulk Order Fulfilment Approval</h1>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-5 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Branch</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>Kolkata</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Warehouse</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>Kolkata</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Order No</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>1011</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Asset Group</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>Laptop</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">User Name</label>
              <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
                <option>All</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 rounded-t-xl">
              <h2 className="font-bold text-slate-900 dark:text-white">Product</h2>
            </div>
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">
                    <th className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-medium">Serial No</th>
                    <th className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-medium">Existing Specification</th>
                    <th className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-medium">Revised Specification</th>
                    <th className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-medium">User Name</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-800 font-medium text-center w-24">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] uppercase">Select All</span>
                        <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-mono text-xs">5CG8507JJL</td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800">i7/4 Core/16GB/500MB</td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800">i7/4 Core/16GB/ 1TB</td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800">DG</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center">
                      <input checked="" className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">5CG8507JP4</td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center"><input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">PG01PD6D</td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center"><input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">5CG00113HP</td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center"><input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-400">5CD746CC7W</td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center"><input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-auto p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-grow space-y-1.5 w-full">
                <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Remarks</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary" placeholder="Type here" type="text" />
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">Approve</button>
                <button className="px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">Reject</button>
                <button className="px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-sm">View Cart</button>
                <div className="flex flex-col items-center">
                  <button className="px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-sm">View Challan</button>
                  {/* <span className="text-[10px] text-slate-400 mt-1">(Challan will be generated for approved items)</span> */}
                </div>
                
              </div>
              
            </div>
            <div className="flex flex-col items-end mb-2 mr-2">
                    <span className="text-[10px] text-slate-400 mt-1">(Challan will be generated for approved items)</span>
                </div>
          </div>
          <div className="col-span-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50 rounded-t-xl">
              <h2 className="font-bold text-slate-900 dark:text-white">Accessory</h2>
            </div>
            <div className="overflow-x-auto custom-scrollbar h-full">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400">
                    <th className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-medium">Serial No</th>
                    <th className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-medium">Quantity</th>
                    <th className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-medium">Use Name</th>
                    <th className="p-3 border-b border-slate-200 dark:border-slate-800 font-medium text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] uppercase">Select All</span>
                        <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800 font-mono text-xs">M2234SA</td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800">1</td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800">DG</td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center">
                      <input checked="" className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 h-10">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center"><input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 h-10">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center"><input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 h-10">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center"><input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 h-10">
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-r border-slate-200 dark:border-slate-800"></td>
                    <td className="p-3 border-b border-slate-200 dark:border-slate-800 text-center"><input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default BulkOrderFulfilmentApprovalPage;
