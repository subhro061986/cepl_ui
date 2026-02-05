import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const OrderReceivePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 space-y-6 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3 bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
            <h2 className="text-sm font-bold text-slate-800 dark:text-white mb-4 uppercase tracking-wider">Order Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Branch</label>
                <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" type="text" value="Kolkata Park street" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Order No</label>
                <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" disabled="" placeholder="Auto populated" type="text" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Customer Code</label>
                <select className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Customer Name</label>
                <select className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Customer Billing Address</label>
                <textarea className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" rows="3">601 W Temple Street, Los Angeles, CA 90012</textarea>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Customer Shipping Address</label>
                <textarea className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" rows="2">601 W Temple Street, Cathedral of Our Lady of the Angels State: CA</textarea>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Sales Executive</label>
                <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" disabled="" placeholder="Auto Populated From Login" type="text" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Order Duration</label>
                <div className="flex gap-2">
                  <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="00" type="text" />
                  <select className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                    <option>Year</option>
                    <option>Month</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Billing Type</label>
                <select className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Effective Rental Start Date</label>
                <div className="relative">
                  <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Select" type="text" />
                  <span className="material-icons-outlined absolute right-3 top-2 text-slate-400 text-sm">calendar_today</span>
                </div>
              </div>
              <div className="col-span-2 flex items-center justify-between pt-2">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">When to Bill:</span>
                  <label className="inline-flex items-center cursor-pointer">
                    <input checked="" className="form-checkbox text-primary rounded border-gray-300 dark:bg-slate-900" type="checkbox" />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-200">Start</span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-checkbox text-primary rounded border-gray-300 dark:bg-slate-900" type="checkbox" />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-200">End</span>
                  </label>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">ISD:</span>
                  <label className="inline-flex items-center cursor-pointer">
                    <input checked="" className="form-checkbox text-primary rounded border-gray-300 dark:bg-slate-900" type="checkbox" />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-200">Yes</span>
                  </label>
                  <label className="inline-flex items-center cursor-pointer">
                    <input className="form-checkbox text-primary rounded border-gray-300 dark:bg-slate-900" type="checkbox" />
                    <span className="ml-2 text-sm text-slate-700 dark:text-slate-200">No</span>
                  </label>
                </div>
                <button className="bg-primary hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">Add Notes</button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Rate Details</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="text-slate-400 border-b border-gray-100 dark:border-slate-700">
                    <th className="pb-2 text-left font-semibold w-1/3">Rate</th>
                    <th className="pb-2 text-left font-semibold w-1/2">Effective From</th>
                    <th className="pb-2 text-right font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                  <tr>
                    <td className="py-2 pr-2">
                      <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Type Value" type="text" />
                    </td>
                    <td className="py-2 pr-2">
                      <div className="relative">
                        <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Select date" type="text" />
                        <span className="material-icons-outlined absolute right-1 top-2 text-slate-400 text-sm">calendar_today</span>
                      </div>
                    </td>
                    <td className="py-2 text-right">
                      <button className="text-primary hover:text-sky-600"><span className="material-icons-outlined text-lg">add_circle</span></button>
                    </td>
                  </tr>
                  
                                        <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors">
                                            <td className="py-3 text-slate-700 dark:text-slate-200">- 10%</td>
                                            <td className="py-3 text-slate-700 dark:text-slate-200">18/09/2025</td>
                                            <td className="py-3 text-right">
                                                <button className="text-rose-500 hover:text-rose-600 transition-colors">
                                                    <span className="material-icons-outlined text-sm">delete</span>
                                                </button>
                                            </td>
                                        </tr>
                                   
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden">
          <div className="p-4 border-b border-gray-100 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">Order Line Items</h3>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-primary text-xs px-2 py-0.5 rounded-full font-semibold">5 Items</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Search products..." type="text" />
                {/* <span className="material-icons-outlined absolute left-3 top-2.5 text-slate-400 text-sm">search</span> */}
              </div>
              <button className="bg-primary hover:bg-sky-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors shadow-sm">
                <span className="material-icons-outlined text-sm">add</span>
                Add Row
              </button>
            </div>
          </div>
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead className="bg-gray-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4 font-bold border-b dark:border-slate-700">Item</th>
                  <th className="px-6 py-4 font-bold border-b dark:border-slate-700">Description</th>
                  <th className="px-6 py-4 font-bold border-b dark:border-slate-700">Quantity</th>
                  <th className="px-6 py-4 font-bold border-b dark:border-slate-700">Rate</th>
                  <th className="px-6 py-4 font-bold border-b dark:border-slate-700">Delivery Date</th>
                  <th className="px-6 py-4 font-bold border-b dark:border-slate-700">Return Date</th>
                  <th className="px-6 py-4 font-bold border-b dark:border-slate-700 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-slate-700">
                <tr className="bg-blue-50/30 dark:bg-slate-800">
                  <td className="px-6 py-4">
                    <select className="w-full appearance-none bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-4 py-2 text-sm focus:ring-primary focus:border-primary outline-none">
                      <option>Select Item</option>
                      <option>Desktop</option>
                      <option>Laptop</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">
                    <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Click here to add your description" type="text" />
                  </td>
                  <td className="px-6 py-4">
                    <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Add value" type="text" />
                  </td>
                  <td className="px-6 py-4">
                    <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Add value" type="text" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Select date" type="text" />
                      <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 text-sm">calendar_today</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative">
                      <input className="w-full border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm bg-white dark:bg-slate-800" placeholder="Select date" type="text" />
                      <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 text-sm">calendar_today</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-sky-600"><span className="material-icons-outlined">check_circle</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-200">Desktop</td>
                  <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">i3/4/1TB/Win 10Pro/Keyboard/Mouse/18.5" Monitor</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200 font-mono">10</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200 font-mono">1600</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">12/09/2025</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">12/09/2025</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-rose-500 hover:text-rose-600"><span className="material-icons-outlined text-lg">delete</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-200">Desktop</td>
                  <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">i5/8/512 SSD/Win 10Pro</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200 font-mono">5</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200 font-mono">2000</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">12/09/2025</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">12/09/2025</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-rose-500 hover:text-rose-600"><span className="material-icons-outlined text-lg">delete</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-200">Laptop</td>
                  <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">i3/4/500GB/win10Pro/14"/Carry Care</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200 font-mono">15</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200 font-mono">1800</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">12/09/2025</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">12/09/2025</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-rose-500 hover:text-rose-600"><span className="material-icons-outlined text-lg">delete</span></button>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-200">Printer Mono</td>
                  <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400">Brother DCP-L2520D Automatic Duplex Laser Printer with 30 Pages Per Minute Print Speed</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200 font-mono">02</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-200 font-mono">1300</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">12/09/2025</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">12/09/2025</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-rose-500 hover:text-rose-600"><span className="material-icons-outlined text-lg">delete</span></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 flex justify-end gap-3 bg-gray-50/50 dark:bg-slate-900/20 border-t border-gray-100 dark:border-slate-700">
            <button className="px-8 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all">
              Save
            </button>
            <button className="px-8 py-2.5 bg-secondary hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg shadow-pink-200 dark:shadow-none transition-all">
              Submit Order
            </button>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default OrderReceivePage;
