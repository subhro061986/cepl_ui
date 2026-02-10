import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const OrderFulfilmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1600px] mx-auto space-y-8">
        <section className="space-y-4">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Order Fulfilment</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Branch</label>
              <div className="relative">
                <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm focus:ring-primary focus:border-primary appearance-none">
                  <option>Kolkata</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
            </div>
          </div>
          <div className="space-y-1.5">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">Order</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Order In Hand</label>
                <div className="relative">
                  <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm focus:ring-primary focus:border-primary appearance-none">
                    <option>1011</option>
                    <option>1012</option>
                  </select>
                  <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-6">
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Customer Name</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm outline-none" readonly="" type="text" value="John Smith" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Billing Address</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm outline-none resize-none" readonly="" rows="3">601 W Temple Street
                    Street Address: Cathedral of Our Lady of the...</textarea>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Customer Shipping Address</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm outline-none resize-none" readonly="" rows="3">601 W Temple Street
                    Street Address: Cathedral of Our Lady of the...</textarea>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">PO No</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm outline-none" readonly="" type="text" value="1234" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">PO Date</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm outline-none" readonly="" type="text" value="12 / 10 / 2025" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Duration</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm outline-none" readonly="" type="text" value="12 months" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Order Type</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm outline-none" readonly="" type="text" value="One time" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Billing Type</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded px-3 py-2 text-sm outline-none" readonly="" type="text" value="Monthly" />
                </div>
              </div>
            </div>
            <div className="mt-8 border border-slate-200 dark:border-slate-800 rounded overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">PO Line No</th>
                    <th className="px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Item</th>
                    <th className="px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Description</th>
                    <th className="px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Qty</th>
                    <th className="px-4 py-3 font-semibold text-slate-600 dark:text-slate-300">Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  <tr>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">01</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Desktop</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">i3/4/1TB/Win 10Pro/Keyboard/Mouse/18.5" Monitor</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 font-medium">10</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">1600</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">02</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Desktop</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">i3/4/1TB/Win 10Pro/Keyboard/Mouse/18.5" Monitor</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400 font-medium">08</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">1400</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">Inventory Mapping</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Inventory type</label>
              <div className="relative">
                <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded px-3 py-2 text-sm appearance-none">
                  <option>Capitalised</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Inventory Group</label>
              <div className="relative">
                <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded px-3 py-2 text-sm appearance-none">
                  <option>Desktop</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Search for Serial No</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded px-3 py-2 text-sm pr-10" placeholder="Search here" type="text" />
                <span className="material-icons-outlined absolute right-3 top-2 text-slate-400">search</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Custom Filter</label>
              <div className="relative">
                <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded px-3 py-2 text-sm appearance-none">
                  <option>John smith</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-xs text-left min-w-[1200px]">
                <thead className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">Asset No</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">Serial No</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">Processor</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">Ram 1</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">Ram 2</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">Ram 3</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">Ram 4</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">HDD1</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">HDD2</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">HDD3</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">HDD4</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">OS</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">Availability</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200">Warehouse</th>
                    <th className="px-3 py-4 font-bold text-slate-700 dark:text-slate-200 text-center">Select Asset</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-slate-50/50 dark:bg-slate-800/30">
                    <td className="px-3 py-2"></td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="relative">
                        <select className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 appearance-none">
                          <option>Select</option>
                        </select>
                        <span className="material-icons-outlined absolute right-1 top-1 text-[16px] text-slate-400">keyboard_arrow_down</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-center"></td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-4 font-medium text-slate-600 dark:text-slate-400">K011</td>
                    <td className="px-3 py-4 text-slate-500">SN-992120</td>
                    <td className="px-3 py-4 text-slate-500">i3</td>
                    <td className="px-3 py-4 text-slate-500">16 GB</td>
                    <td className="px-3 py-4 text-slate-500">16 GB</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">1 TB</td>
                    <td className="px-3 py-4 text-slate-500">1 TB</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">Win 10</td>
                    <td className="px-3 py-4 text-slate-500">KB-51/1</td>
                    <td className="px-3 py-4 text-slate-500">Yes</td>
                    <td className="px-3 py-4 text-center">
                      <input checked="" className="w-4 h-4 text-primary bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 rounded focus:ring-primary" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-3 py-4 font-medium text-slate-600 dark:text-slate-400">K012</td>
                    <td className="px-3 py-4 text-slate-500">SN-992121</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-slate-500">-</td>
                    <td className="px-3 py-4 text-center">
                      <input className="w-4 h-4 text-primary bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 rounded focus:ring-primary" type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-end items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <button className="w-full sm:w-auto px-6 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
              Replace Serial No
            </button>
            <button className="w-full sm:w-auto px-6 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
              Submit for Replacement
            </button>
            <button className="w-full sm:w-auto px-8 py-2.5 bg-accent text-white text-sm font-bold rounded hover:opacity-90 transition-opacity shadow-lg shadow-accent/20">
              Submit to Cart
            </button>
          </div>
        </section>
      </main>
    </>
    
  );
};

export default OrderFulfilmentPage;
