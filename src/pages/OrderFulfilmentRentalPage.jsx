import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const OrderFulfilmentRentalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1600px] mx-auto p-6 space-y-8">
        <div>
          <h1 className="text-2xl font-bold mb-6">Order Fulfilment (Rental)</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Branch</label>
              <select className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded px-3 py-2 text-sm appearance-none">
                <option>Kolkata</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Warehouse</label>
              <select className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded px-3 py-2 text-sm appearance-none">
                <option>Kolkata</option>
              </select>
            </div>
          </div>
        </div>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Order</h2>
          <div className="space-y-1.5 w-full md:w-64">
            <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Order In Hand</label>
            <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 shadow-sm focus:ring-primary focus:border-primary text-sm">
              <option>1011</option>
            </select>
          </div>
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-6">
              <div className="lg:col-span-1 space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-400">Customer Name</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm px-3 py-2 cursor-not-allowed" readonly="" type="text" value="John Smith" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-400">Billing Address</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm px-3 py-2 h-20 resize-none cursor-not-allowed" readonly="">601 W Temple Street, Street Address: Cathedral of Our Lady of the...</textarea>
                </div>
              </div>
              <div className="lg:col-span-1 space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-400">Customer Shipping Address</label>
                  <textarea className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm px-3 py-2 h-20 resize-none cursor-not-allowed" readonly="">601 W Temple Street, Street Address: Cathedral of Our Lady of the...</textarea>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-400">PO No</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm px-3 py-2 cursor-not-allowed" readonly="" type="text" value="1234" />
                </div>
              </div>
              <div className="lg:col-span-1 space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-400">PO Date</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm px-3 py-2 cursor-not-allowed" readonly="" type="text" value="12 / 10 / 2025" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-400">Duration</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm px-3 py-2 cursor-not-allowed" readonly="" type="text" value="12 months" />
                </div>
              </div>
              <div className="lg:col-span-1 space-y-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-400">Order Type</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm px-3 py-2 cursor-not-allowed" readonly="" type="text" value="One time" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase text-slate-400">Billing Type</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-sm px-3 py-2 cursor-not-allowed" readonly="" type="text" value="Monthly" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-3">Unfulfilled Order Item</h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-4 py-3 font-semibold">PO Line No</th>
                      <th className="px-4 py-3 font-semibold">Item</th>
                      <th className="px-4 py-3 font-semibold">Description</th>
                      <th className="px-4 py-3 font-semibold">Qty</th>
                      <th className="px-4 py-3 font-semibold">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-3">01</td>
                      <td className="px-4 py-3">Laptop</td>
                      <td className="px-4 py-3 text-slate-500">i3/4/1TB/Win 10Pro/Keyboard/Mouse/18.5" Monitor</td>
                      <td className="px-4 py-3">2</td>
                      <td className="px-4 py-3">2000</td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-4 py-3">02</td>
                      <td className="px-4 py-3">Laptop</td>
                      <td className="px-4 py-3 text-slate-500">i3/4/1TB/Win 10Pro/Keyboard/Mouse/18.5" Monitor</td>
                      <td className="px-4 py-3">03</td>
                      <td className="px-4 py-3">1800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-lg font-semibold">Inventory Mapping</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Inventory type</label>
              <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary text-sm">
                <option>Rental</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Inventory Group</label>
              <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary text-sm">
                <option>Laptop</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Search for Serial No</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 px-3 py-2 dark:border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary text-sm pl-3 pr-10" placeholder="Search here" type="text" />
                <span className="material-icons-outlined absolute right-3 top-2 text-slate-400">search</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Search specification</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary text-sm pl-3 pr-10" placeholder="Search" type="text" />
                <span className="material-icons-outlined absolute right-3 top-2 text-slate-400">search</span>
              </div>
            </div>
          </div>
          <div className="bg-card-light dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto max-h-[400px] custom-scrollbar">
              <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-4 font-semibold border-b border-slate-200 dark:border-slate-800">Asset No</th>
                    <th className="px-6 py-4 font-semibold border-b border-slate-200 dark:border-slate-800">Serial No</th>
                    <th className="px-6 py-4 font-semibold border-b border-slate-200 dark:border-slate-800">Specification</th>
                    <th className="px-6 py-4 font-semibold border-b border-slate-200 dark:border-slate-800">Rate/ Month</th>
                    <th className="px-6 py-4 font-semibold border-b border-slate-200 dark:border-slate-800 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span>Select All</span>
                        <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">KR011</td>
                    <td className="px-6 py-4">P751/234</td>
                    <td className="px-6 py-4 text-slate-500">i3/4/500GB/win10Pro/14"/Carry Care</td>
                    <td className="px-6 py-4">2000</td>
                    <td className="px-6 py-4 text-right">
                      <input checked="" className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">KR023</td>
                    <td className="px-6 py-4">P751/234</td>
                    <td className="px-6 py-4 text-slate-500">i3/4/500GB/win10Pro/14"/Carry Care</td>
                    <td className="px-6 py-4">2000</td>
                    <td className="px-6 py-4 text-right">
                      <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">KR044</td>
                    <td className="px-6 py-4">P751/234</td>
                    <td className="px-6 py-4 text-slate-500">i3/4/500GB/win10Pro/14"/Carry Care</td>
                    <td className="px-6 py-4">2000</td>
                    <td className="px-6 py-4 text-right">
                      <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">KR003</td>
                    <td className="px-6 py-4">P751/234</td>
                    <td className="px-6 py-4 text-slate-500">i3/4/500GB/win10Pro/14"/Carry Care</td>
                    <td className="px-6 py-4">2000</td>
                    <td className="px-6 py-4 text-right">
                      <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 flex justify-end items-center gap-4">
              <button className="px-10 py-2.5 border border-slate-800 dark:border-slate-600 font-semibold rounded text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95">
                Save
              </button>
              <button className="px-10 py-3.5 text-sm font-semibold rounded-md bg-secondary text-white hover:bg-accent/90 transition-colors shadow-lg shadow-pink-200 dark:shadow-none flex items-center gap-2">
                Submit to Cart
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
    
  );
};

export default OrderFulfilmentRentalPage;
