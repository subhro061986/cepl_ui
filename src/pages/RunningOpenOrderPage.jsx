import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const RunningOpenOrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 space-y-6">
        <section className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800">
          <h1 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Running (Open) Order</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Branch</label>
              <select className="w-full h-10 px-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded focus:ring-primary focus:border-primary transition-all">
                <option>Kolkata</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Search Customer</label>
              <div className="relative">
                <input className="w-full h-10 pl-3 pr-10 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded focus:ring-primary focus:border-primary" placeholder="Search" type="text" />
                <span className="material-icons-outlined absolute right-3 top-2.5 text-slate-400">search</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Search PO</label>
              <div className="relative">
                <input className="w-full h-10 pl-3 pr-10 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded focus:ring-primary focus:border-primary" placeholder="Search" type="text" />
                <span className="material-icons-outlined absolute right-3 top-2.5 text-slate-400">search</span>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">From Date</label>
                <div className="relative">
                  <input className="w-full h-10 pl-3 pr-10 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded focus:ring-primary focus:border-primary" type="text" value="12/10/2025" />
                  <span className="material-icons-outlined absolute right-3 top-2.5 text-slate-400">calendar_today</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">To Date</label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input className="w-full h-10 pl-3 pr-10 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded focus:ring-primary focus:border-primary" type="text" value="12/10/2025" />
                    <span className="material-icons-outlined absolute right-3 top-2.5 text-slate-400">calendar_today</span>
                  </div>
                  <button className="bg-primary hover:bg-sky-500 text-white px-5 h-10 rounded font-medium transition-colors">Go</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
            <h2 className="font-bold text-slate-700 dark:text-slate-300">Running (Open) Order list</h2>
            <button className="text-primary text-xs font-bold uppercase hover:underline">Select All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse whitespace-nowrap">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Order ID</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Customer Name</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Billing Address</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Shipping Address</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">PO No.</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">PO Date</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Effective Rental Start</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Exp. Return</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Type</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Exec.</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Last Bill</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Rate</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Bill Start</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Bill End</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Bill Due</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="bg-sky-50 dark:bg-sky-950/20">
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">1011</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 font-medium">M/s SPG</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">23, CDM St. Kolkata</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">23, CDM St. Kolkata</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">234</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">23-12-2023</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">01-01-2024</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">01-01-2025</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Monthly</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">DDG</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">12-12-2024</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">1000</td>
                  <td className="px-2 py-2 border-r border-slate-200 dark:border-slate-700"><input className="w-24 h-7 text-[10px] rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800" type="text" value="01-09-2025" /></td>
                  <td className="px-2 py-2 border-r border-slate-200 dark:border-slate-700"><input className="w-24 h-7 text-[10px] rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800" type="text" value="30-09-2025" /></td>
                  <td className="px-2 py-2 border-r border-slate-200 dark:border-slate-700"><input className="w-24 h-7 text-[10px] rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800" type="text" value="14-10-2025" /></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></span>
                      <button className="text-slate-400 hover:text-primary"><span className="material-icons-outlined text-base">edit</span></button>
                      <input checked="" className="rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">1012</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 font-medium">L&amp;T</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">15, KKM St. Kolkata</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">15, KKM St. Kolkata</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">973</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">23-12-2023</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">01-01-2024</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">01-01-2025</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Monthly</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">DDG</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">12-12-2024</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">1000</td>
                  <td className="px-2 py-2 border-r border-slate-200 dark:border-slate-700"><input className="w-24 h-7 text-[10px] rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800" type="text" value="01-09-2025" /></td>
                  <td className="px-2 py-2 border-r border-slate-200 dark:border-slate-700"><input className="w-24 h-7 text-[10px] rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800" type="text" value="30-09-2025" /></td>
                  <td className="px-2 py-2 border-r border-slate-200 dark:border-slate-700"><input className="w-24 h-7 text-[10px] rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800" type="text" value="15-10-2025" /></td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 rounded-full"></span>
                      <button className="text-slate-400 hover:text-primary"><span className="material-icons-outlined text-base">edit</span></button>
                      <input className="rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">1013</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 font-medium">ACC ltd</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">82, Park St, Kolkata</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">82, Park St, Kolkata</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">423</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">23-12-2023</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">01-01-2024</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">01-01-2025</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Monthly</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">DDG</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">12-12-2024</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">1000</td>
                  <td className="px-2 py-2 border-r border-slate-200 dark:border-slate-700"><input className="w-24 h-7 text-[10px] rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800" type="text" value="01-09-2025" /></td>
                  <td className="px-2 py-2 border-r border-slate-200 dark:border-slate-700"><input className="w-24 h-7 text-[10px] rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800" type="text" value="30-09-2025" /></td>
                  <td className="px-2 py-2 border-r border-slate-200 dark:border-slate-700"><input className="w-24 h-7 text-[10px] rounded border-slate-300 dark:border-slate-600 dark:bg-slate-800" type="text" value="16-10-2025" /></td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 rounded-full"></span>
                      <button className="text-slate-400 hover:text-primary"><span className="material-icons-outlined text-base">edit</span></button>
                      <input className="rounded text-primary focus:ring-primary w-4 h-4" type="checkbox" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
            <h2 className="font-bold text-slate-700 dark:text-slate-300">Details of order No : 1011</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold uppercase">
                <tr>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">PO Line No.</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Item</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Description</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">P.O. Qty</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">Qty With Customer</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">P.O Effective Rate</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">Unbilled Qty</th>
                  <th className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">Add Billing Details</th>
                  <th className="px-4 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">01</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Desktop</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-slate-500 italic">i3/4/1TB/Win 10Pro/Keyboard/Mouse/18.5" Monitor</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">10</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">8</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">1600</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">10</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <button className="bg-primary hover:bg-sky-500 text-white px-3 py-1 rounded-sm text-[10px] transition-colors">Billing Details</button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-green-600 dark:text-green-400 font-medium">Saved</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">02</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Desktop</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-slate-500 italic">i5/8/512 SSD/Win 10Pro</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">5</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">2000</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">2000</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">5</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <button className="bg-primary hover:bg-sky-500 text-white px-3 py-1 rounded-sm text-[10px] transition-colors">Billing Details</button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-green-600 dark:text-green-400 font-medium">Saved</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">03</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Laptop</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-slate-500 italic">i3/4/500GB/win10Pro/14"/Carry Care</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">15</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">1800</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">1800</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">5</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <button className="bg-primary hover:bg-sky-500 text-white px-3 py-1 rounded-sm text-[10px] transition-colors">Billing Details</button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-green-600 dark:text-green-400 font-medium">Saved</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">04</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700">Laptop</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-slate-500 italic">i3/4/500GB/win10Pro/14"/Carry Care</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">15</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">1800</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">1800</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">7</td>
                  <td className="px-4 py-3 border-r border-slate-200 dark:border-slate-700 text-center">
                    <button className="bg-primary hover:bg-sky-500 text-white px-3 py-1 rounded-sm text-[10px] transition-colors">Billing Details</button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="text-green-600 dark:text-green-400 font-medium">Saved</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="flex justify-end items-center gap-4 py-4">
          <button className="px-8 py-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">Save</button>
          <button className="px-8 py-2 bg-secondary hover:bg-pink-600 text-white font-semibold rounded shadow-md transition-all active:scale-95">Initiate Bill</button>
        </div>
      </main>
    </>
    
  );
};

export default RunningOpenOrderPage;
