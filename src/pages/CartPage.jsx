import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1600px] mx-auto">
        <h1 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">Cart for delivery</h1>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm mb-6 border border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 items-end">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Select Branch</label>
                <select className="w-full text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded px-3 py-2">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Select Warehouse</label>
                <select className="w-full text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded px-3 py-2">
                  <option>Select</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Search Customer</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input className="w-full text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded px-3 py-2 pr-8" placeholder="Search" type="text" />
                    <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                  </div>
                  <button className="bg-primary text-white px-3 py-2 rounded text-sm font-medium">Go</button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Search Order number</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input className="w-full text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded px-3 py-2 pr-8" placeholder="Search" type="text" />
                    <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                  </div>
                  <button className="bg-primary text-white px-3 py-2 rounded text-sm font-medium">Go</button>
                </div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Order Date Range</label>
              <div className="flex flex-wrap items-end gap-3">
                <div className="flex-1 min-w-[120px]">
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">From Date</label>
                  <input className="w-full text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded px-3 py-2" type="date" value="2025-10-12" />
                </div>
                <div className="flex-1 min-w-[120px]">
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">To Date</label>
                  <input className="w-full text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded px-3 py-2" type="date" value="2025-10-12" />
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded text-sm font-medium h-[38px]">Go</button>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Challan Generate</label>
                <select className="w-full text-sm border border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded px-3 py-2">
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </div>
              <button className="w-full bg-secondary text-white px-4 py-2 rounded text-sm font-bold shadow-sm transition-opacity hover:opacity-90">Generate Challan</button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-base font-bold text-slate-700 dark:text-white flex items-center gap-2">
                Customer Name : <span className="font-bold">M/s WYZ</span>
              </h2>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <span className="material-icons-outlined">remove_circle_outline</span>
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-4 mb-8 text-xs">
                <div>
                  <span className="text-slate-500 block mb-1">Customer Name :</span>
                  <span className="font-bold">M/s WYZ</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Branch :</span>
                  <span className="font-bold">Kolkata</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Warehouse :</span>
                  <span className="font-bold">Kolkata</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 block mb-1">Customer Billing Address :</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">601 W Temple Street Street Address Cathedral of Our Lady of the...</span>
                </div>
                <div className="col-span-1">
                  <span className="text-slate-500 block mb-1">Customer Shipping Address :</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">601 W Temple Street Street Address Cathedral of Our Lady of the...</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Order No :</span>
                  <span className="font-bold">P1234</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Order Date :</span>
                  <span className="font-bold">23-12-2024</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Duration :</span>
                  <span className="font-bold">24 mnts</span>
                </div>
              </div>
              <hr className="mb-6 border-slate-100 dark:border-slate-800" />
              <div className="space-y-10">
                <div>
                  <div className="flex flex-wrap items-center gap-6 mb-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <div>Inventory Item Group : <span className="text-slate-800 dark:text-white font-bold ml-1">Desktop</span></div>
                    <div>Asset Class : <span className="text-slate-800 dark:text-white font-bold ml-1">Capitalised</span></div>
                    <div>Asset Type : <span className="text-slate-800 dark:text-white font-bold ml-1">Product</span></div>
                    <div>HSN No : <span className="text-slate-800 dark:text-white font-bold ml-1">5634</span></div>
                    <div>Challan Type : <span className="text-slate-800 dark:text-white font-bold ml-1">Rental</span></div>
                  </div>
                  <div className="overflow-x-auto rounded border border-slate-200 dark:border-slate-700">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-700">
                        <tr>
                          <th className="px-4 py-3">Sl.No</th>
                          <th className="px-4 py-3">Model No</th>
                          <th className="px-4 py-3">Part No</th>
                          <th className="px-4 py-3">Make</th>
                          <th className="px-4 py-3">Formatted Specification</th>
                          <th className="px-4 py-3">Rate</th>
                          <th className="px-4 py-3">Challan Generated</th>
                          <th className="px-4 py-3 text-right">
                            <button className="text-primary hover:underline">Select All</button>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="table-row-hover">
                          <td className="px-4 py-3">KB/123</td>
                          <td className="px-4 py-3">Del 320</td>
                          <td className="px-4 py-3">TK-234</td>
                          <td className="px-4 py-3">Del</td>
                          <td className="px-4 py-3">I3/4/1TB/Win 10Pro</td>
                          <td className="px-4 py-3">1000</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3 text-right">
                            <span className="material-icons-outlined text-green-500 text-base">check_circle</span>
                          </td>
                        </tr>
                        <tr className="table-row-hover">
                          <td className="px-4 py-3">KB/123</td>
                          <td className="px-4 py-3">Del 320</td>
                          <td className="px-4 py-3">TK-234</td>
                          <td className="px-4 py-3">Del</td>
                          <td className="px-4 py-3">I3/4/1TB/Win 10Pro</td>
                          <td className="px-4 py-3">1000</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3 text-right">
                            <div className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 rounded-full inline-block"></div>
                          </td>
                        </tr>
                        <tr className="table-row-hover">
                          <td className="px-4 py-3">KB/123</td>
                          <td className="px-4 py-3">Del 320</td>
                          <td className="px-4 py-3">TK-234</td>
                          <td className="px-4 py-3">Del</td>
                          <td className="px-4 py-3">I3/4/1TB/Win 10Pro</td>
                          <td className="px-4 py-3">1000</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3 text-right">
                            <div className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 rounded-full inline-block"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-6 mb-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <div>Inventory Item Group : <span className="text-slate-800 dark:text-white font-bold ml-1">Desktop</span></div>
                    <div>Asset Class : <span className="text-slate-800 dark:text-white font-bold ml-1">Capitalised</span></div>
                    <div>Asset Type : <span className="text-slate-800 dark:text-white font-bold ml-1">Product</span></div>
                    <div>HSN No : <span className="text-slate-800 dark:text-white font-bold ml-1">5634</span></div>
                    <div>Challan Type : <span className="text-slate-800 dark:text-white font-bold ml-1 text-primary">Rental Replacement</span></div>
                  </div>
                  <div className="overflow-x-auto rounded border border-slate-200 dark:border-slate-700">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold border-b border-slate-200 dark:border-slate-700">
                        <tr>
                          <th className="px-4 py-3">Sl.No</th>
                          <th className="px-4 py-3">Model No</th>
                          <th className="px-4 py-3">Part No</th>
                          <th className="px-4 py-3">Make</th>
                          <th className="px-4 py-3">Formatted Specification</th>
                          <th className="px-4 py-3">Rate</th>
                          <th className="px-4 py-3">Challan Generated</th>
                          <th className="px-4 py-3 text-right">
                            <button className="text-primary hover:underline">Select All</button>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        <tr className="table-row-hover">
                          <td className="px-4 py-3">LB/3456</td>
                          <td className="px-4 py-3">HP 1320</td>
                          <td className="px-4 py-3">TC-534</td>
                          <td className="px-4 py-3">HP</td>
                          <td className="px-4 py-3">i3/4/500GB/win10Pro/14"</td>
                          <td className="px-4 py-3">1000</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3 text-right">
                            <span className="material-icons-outlined text-green-500 text-base">check_circle</span>
                          </td>
                        </tr>
                        <tr className="table-row-hover">
                          <td className="px-4 py-3">LB/3456</td>
                          <td className="px-4 py-3">HP 1320</td>
                          <td className="px-4 py-3">TC-534</td>
                          <td className="px-4 py-3">HP</td>
                          <td className="px-4 py-3">i3/4/500GB/win10Pro/14"</td>
                          <td className="px-4 py-3">1000</td>
                          <td className="px-4 py-3">No</td>
                          <td className="px-4 py-3 text-right">
                            <div className="w-4 h-4 border-2 border-slate-300 dark:border-slate-600 rounded-full inline-block"></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="bg-secondary text-white px-6 py-2 rounded text-xs font-bold hover:opacity-90 shadow-sm">Generate Challan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <h2 className="text-base font-bold text-slate-700 dark:text-white">
                Customer Name : <span className="font-bold">M/s PQR</span>
              </h2>
              <button className="text-slate-400">
                <span className="material-icons-outlined">add_circle_outline</span>
              </button>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <h2 className="text-base font-bold text-slate-700 dark:text-white">
                Customer Name : <span className="font-bold">M/s RTY</span>
              </h2>
              <button className="text-slate-400">
                <span className="material-icons-outlined">add_circle_outline</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default CartPage;
