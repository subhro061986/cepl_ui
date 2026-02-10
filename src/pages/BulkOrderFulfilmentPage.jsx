import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const BulkOrderFulfilmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1600px] mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Bulk Order Fulfilment</h1>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 items-end border border-slate-200 dark:border-slate-800">
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Branch</label>
            <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
              <option>Kolkata</option>
              <option>Delhi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Warehouse</label>
            <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
              <option>Kolkata</option>
              <option>Central WH</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Order No</label>
            <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
              <option>1011</option>
              <option>1012</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Asset Group</label>
            <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-lg text-sm focus:ring-primary">
              <option>Laptop</option>
              <option>Desktop</option>
              <option>Server</option>
            </select>
          </div>
          <div className="lg:flex justify-end hidden">
            <span className="text-sm font-semibold text-slate-500">User Name : DG</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-300 dark:border-slate-800 flex flex-col h-fit">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold">Product</h2>
                <p className="text-[11px] text-slate-400 mt-1 italic">Replaceable Parts - as defined in the master (columns to be generated dynamically)</p>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-1">
                <span className="material-icons-outlined text-lg">add</span> Add Row
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full custom-table">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="pl-6">Serial No</th>
                    <th>RAM Slot1</th>
                    <th>RAM Slot2</th>
                    <th>HDD</th>
                    <th>SSD</th>
                    <th className="pr-6 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr>
                    <td className="pl-6 py-3"><input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded p-1.5 text-xs" placeholder="Type here" type="text" /></td>
                    <td><input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded p-1.5 text-xs" placeholder="Type here" type="text" /></td>
                    <td><input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded p-1.5 text-xs" placeholder="Type here" type="text" /></td>
                    <td><input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded p-1.5 text-xs" placeholder="Type here" type="text" /></td>
                    <td><input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded p-1.5 text-xs" placeholder="Type here" type="text" /></td>
                    <td className="pr-6"></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="pl-6 font-mono text-xs">5CG8507JJL</td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="pr-6 text-center"><button className="text-accent-pink hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded"><span className="material-icons text-sm">delete</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="pl-6 font-mono text-xs">5CG8507JP4</td>
                    <td className="text-xs text-slate-500">New Ram SL#</td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="pr-6 text-center"><button className="text-accent-pink hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded"><span className="material-icons text-sm">delete</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="pl-6 font-mono text-xs text-accent-pink">5CG939BSBT</td>
                    <td className="text-xs text-accent-pink italic">Out</td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="pr-6 text-center"><button className="text-accent-pink hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded"><span className="material-icons text-sm">delete</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="pl-6 font-mono text-xs">PG01PD6D</td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="pr-6 text-center"><button className="text-accent-pink hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded"><span className="material-icons text-sm">delete</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="pl-6 font-mono text-xs">5CG00113HP</td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="pr-6 text-center"><button className="text-accent-pink hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded"><span className="material-icons text-sm">delete</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="pl-6 font-mono text-xs">5CG0011427</td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="text-xs"></td>
                    <td className="pr-6 text-center"><button className="text-accent-pink hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded"><span className="material-icons text-sm">delete</span></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Remarks</label>
                <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary" placeholder="Type here" type="text" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button className="border border-slate-900 dark:border-slate-700 bg-white dark:bg-slate-900 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  Save as draft
                </button>
                <button className="bg-secondary text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-pink-500/20 hover:bg-rose-600 transition-colors">
                  Submit
                </button>
                <div className="flex-grow"></div>
                <div className="flex flex-col items-end">
                  <button className="border border-slate-900 dark:border-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
                    Print Label Queue
                  </button>
                  <span className="text-[10px] text-slate-400 mt-1">Prints Bar Code of the removed items</span>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-500 mb-2">Notes:</h4>
                <ol className="text-[11px] text-slate-400 space-y-1.5 list-decimal pl-4">
                  <li>Hovering over the Serial Number will display a brief specification of the asset from the database.</li>
                  <li>If a replaceable component field is left blank, no change will be applied.</li>
                  <li>If the value "out" is entered for a replaceable component, the corresponding component will be removed.</li>
                  <li>If a new serial number is entered for a replaceable component, it will replace the existing serial number.</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-300 dark:border-slate-800 flex flex-col h-fit">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h2 className="text-lg font-bold">Accessory</h2>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-1">
                <span className="material-icons-outlined text-lg">add</span> Add Row
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full custom-table">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="pl-6">Serial No</th>
                    <th>Quantity</th>
                    <th className="pr-6 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr>
                    <td className="pl-6 py-3"><input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded p-1.5 text-xs" placeholder="Type here" type="text" /></td>
                    <td><input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded p-1.5 text-xs" placeholder="Type here" type="text" /></td>
                    <td className="pr-6"></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="pl-6 font-mono text-xs">M2234SA</td>
                    <td className="text-xs">1</td>
                    <td className="pr-6 text-center"><button className="text-accent-pink hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded"><span className="material-icons text-sm">delete</span></button></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="pl-6"></td>
                    <td className="text-xs text-slate-400 italic">(Default=1)</td>
                    <td className="pr-6 text-center"><button className="text-accent-pink hover:bg-red-50 dark:hover:bg-red-900/20 p-1 rounded"><span className="material-icons text-sm">delete</span></button></td>
                  </tr>
                  <tr className="h-10"><td className="pl-6"></td><td></td><td className="pr-6 text-center"><button className="text-accent-pink/40 p-1"><span className="material-icons text-sm">delete</span></button></td></tr>
                  <tr className="h-10"><td className="pl-6"></td><td></td><td className="pr-6 text-center"><button className="text-accent-pink/40 p-1"><span className="material-icons text-sm">delete</span></button></td></tr>
                  <tr className="h-10"><td className="pl-6"></td><td></td><td className="pr-6 text-center"><button className="text-accent-pink/40 p-1"><span className="material-icons text-sm">delete</span></button></td></tr>
                  <tr className="h-10"><td className="pl-6"></td><td></td><td className="pr-6 text-center"><button className="text-accent-pink/40 p-1"><span className="material-icons text-sm">delete</span></button></td></tr>
                  <tr className="h-10"><td className="pl-6"></td><td></td><td className="pr-6 text-center"><button className="text-accent-pink/40 p-1"><span className="material-icons text-sm">delete</span></button></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default BulkOrderFulfilmentPage;
