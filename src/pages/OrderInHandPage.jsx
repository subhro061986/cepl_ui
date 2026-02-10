import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const OrderInHandPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1600px] mx-auto p-6 space-y-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Order In Hand</h1>
            </div>
            <button className="bg-primary hover:bg-sky-500 text-white px-6 py-2.5 rounded-md font-semibold transition-all flex items-center gap-2">
              <span className="material-icons-outlined">inventory</span>
              Check Inventory
            </button>
          </div>
          <div className="flex items-end justify-between">
            <div className="w-64">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Branch</label>
              <div className="relative">
                <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md py-2.5 pl-3 pr-10 text-sm focus:ring-2 focus:ring-primary focus:border-primary appearance-none transition-all">
                  <option>Kolkata</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                </select>
                <span className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
              </div>
            </div>
            <div className="w-80 relative">
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Search customer" type="text" />
              <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            </div>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1400px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Order ID</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Customer Name</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Billing Address</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Shipping Address</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">PO. No</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">PO Date</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Rental Start</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Return Date</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Billing</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Executive</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider whitespace-nowrap">Posted On</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Engineer</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider text-center">Assignment</th>
                  <th className="px-4 py-3.5 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider text-center">View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="bg-sky-50 dark:bg-sky-900/10 hover:bg-sky-100 dark:hover:bg-sky-900/20 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium">1011</td>
                  <td className="px-4 py-3 text-sm">M/s SPG</td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px]">23, CDM St. Kolkata</td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px]">23, CDM St. Kolkata</td>
                  <td className="px-4 py-3 text-sm">234</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">23-12-2023</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">01-01-2024</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">01-01-2025</td>
                  <td className="px-4 py-3 text-sm">One time</td>
                  <td className="px-4 py-3 text-sm">Monthly</td>
                  <td className="px-4 py-3 text-sm font-medium">DDG</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">23-12-2023</td>
                  <td className="px-4 py-3 text-sm">ABC, XYZ</td>
                  <td className="px-4 py-3 text-center">
                    <button className="px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-md shadow-sm">Assign</button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="material-icons-outlined text-green-500 text-[20px] align-middle">check_circle</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium">1012</td>
                  <td className="px-4 py-3 text-sm">L&amp;T</td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px]">15, KKM St. Kolkata</td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px]">15, KKM St. Kolkata</td>
                  <td className="px-4 py-3 text-sm">973</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">23-12-2023</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">01-01-2024</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">01-01-2025</td>
                  <td className="px-4 py-3 text-sm">One time</td>
                  <td className="px-4 py-3 text-sm">Monthly</td>
                  <td className="px-4 py-3 text-sm font-medium">DDG</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">23-12-2023</td>
                  <td className="px-4 py-3 text-sm">ABC, XYZ</td>
                  <td className="px-4 py-3 text-center">
                    <button className="px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-md shadow-sm">Assign</button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="material-icons-outlined text-slate-300 dark:text-slate-700 text-[20px] align-middle">radio_button_unchecked</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium">1013</td>
                  <td className="px-4 py-3 text-sm">ACC Ltd</td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px]">82, Park St, Kolkata</td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px]">82, Park St, Kolkata</td>
                  <td className="px-4 py-3 text-sm">423</td>
                  <td className="px-4 py-3 text-sm">23-12-2023</td>
                  <td className="px-4 py-3 text-sm">01-01-2024</td>
                  <td className="px-4 py-3 text-sm">01-01-2025</td>
                  <td className="px-4 py-3 text-sm">One time</td>
                  <td className="px-4 py-3 text-sm">Monthly</td>
                  <td className="px-4 py-3 text-sm font-medium">DDG</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">23-12-2023</td>
                  <td className="px-4 py-3 text-sm">ABC, XYZ</td>
                  <td className="px-4 py-3 text-center">
                    <button className="px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-md shadow-sm">Assign</button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="material-icons-outlined text-slate-300 dark:text-slate-700 text-[20px] align-middle">radio_button_unchecked</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium">1014</td>
                  <td className="px-4 py-3 text-sm">L&amp;T</td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px]">23, CR Ave. Kolkata</td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-slate-400 truncate max-w-[150px]">23, CR Ave. Kolkata</td>
                  <td className="px-4 py-3 text-sm">423</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">23-12-2023</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">01-01-2024</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">01-01-2025</td>
                  <td className="px-4 py-3 text-sm">One time</td>
                  <td className="px-4 py-3 text-sm">Monthly</td>
                  <td className="px-4 py-3 text-sm font-medium">DDG</td>
                  <td className="px-4 py-3 text-sm whitespace-nowrap">23-12-2023</td>
                  <td className="px-4 py-3 text-sm">ABC, XYZ</td>
                  <td className="px-4 py-3 text-center">
                    <button className="px-4 py-1.5 bg-primary text-white text-xs font-semibold rounded-md shadow-sm">Assign</button>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="material-icons-outlined text-slate-300 dark:text-slate-700 text-[20px] align-middle">radio_button_unchecked</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full"></span>
            Selected order No : 1011
          </h2>
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">PO Line No.</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Item</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Qty To Deliver</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Effective Rate</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">Delivery Scheduled</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm">01</td>
                    <td className="px-6 py-4 text-sm font-medium">Desktop</td>
                    <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">i3/4/1TB/Win 10Pro/Keyboard/Mouse/18.5" Monitor</td>
                    <td className="px-6 py-4 text-sm">10</td>
                    <td className="px-6 py-4 text-sm">1600</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary">Immediate</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm">02</td>
                    <td className="px-6 py-4 text-sm font-medium">Desktop</td>
                    <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">i5/8/512 SSD/Win 10Pro</td>
                    <td className="px-6 py-4 text-sm">5</td>
                    <td className="px-6 py-4 text-sm">2000</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary">Immediate</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm">03</td>
                    <td className="px-6 py-4 text-sm font-medium">Laptop</td>
                    <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">i3/4/500GB/win10Pro/14"/Carry Care</td>
                    <td className="px-6 py-4 text-sm">15</td>
                    <td className="px-6 py-4 text-sm">1800</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary">Immediate</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm">04</td>
                    <td className="px-6 py-4 text-sm font-medium">Laptop</td>
                    <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">i3/4/500GB/win10Pro/14"/Carry Care</td>
                    <td className="px-6 py-4 text-sm">15</td>
                    <td className="px-6 py-4 text-sm">1800</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary">Immediate</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm">05</td>
                    <td className="px-6 py-4 text-sm font-medium">Printer Mono</td>
                    <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">i3/4/500GB/win10Pro/14"/Carry Care</td>
                    <td className="px-6 py-4 text-sm">15</td>
                    <td className="px-6 py-4 text-sm">1800</td>
                    <td className="px-6 py-4 text-sm font-medium text-primary">Immediate</td>
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

export default OrderInHandPage;
