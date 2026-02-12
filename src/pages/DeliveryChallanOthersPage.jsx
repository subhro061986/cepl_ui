import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const DeliveryChallanOthersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1400px] mx-auto space-y-6 pb-24">
        <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">Delivery Challan (Others)</h1>
        <section className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Branch</label>
            <select className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary">
              <option>Branch</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Warehouse</label>
            <select className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary">
              <option>Warehouse</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Challan Type</label>
            <select className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary">
              <option>Rental Challan</option>
            </select>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-3">Customer Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Customer / Vendor Name</label>
              <select className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary">
                <option>Customer/ Vendor Db/ Manual entry</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Challan No.</label>
              <input className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm rounded" placeholder="Auto-generated" readonly="" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Date</label>
              <div className="relative">
                <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded pr-10 focus:ring-primary focus:border-primary" placeholder="System generate or manual" type="text" />
                <span className="material-icons-outlined absolute right-3 top-2 text-slate-400 text-[20px]">calendar_today</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Billing Address</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Customer/ Vendor Db/ Manual entry" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Shipping Address</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Customer/ Vendor Db/ Manual entry" type="text" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Order No.</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Manual Entry" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Order Date</label>
              <div className="relative">
                <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded pr-10 focus:ring-primary focus:border-primary" placeholder="Manual Entry" type="text" />
                <span className="material-icons-outlined absolute right-3 top-2 text-slate-400 text-[20px]">calendar_today</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">GST No.</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Customer/ Vendor Db/ Manual entry" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">E-way Bill No.</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Free text" type="text" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Contact Person</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Customer/ Vendor Db/ Manual entry" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Contact No</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Customer/ Vendor Db/ Manual entry" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Messenger</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Manual" type="text" />
            </div>
          </div>
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-sm font-bold text-primary mb-6">Assets Selection</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Asset Class</label>
                <select className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary">
                  <option>Capitalised/ Rental</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Asset Serial Number</label>
                <div className="relative">
                  <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded pr-10 focus:ring-primary focus:border-primary" placeholder="KB/1234" type="text" />
                  <span className="material-icons-outlined absolute right-3 top-2 text-slate-400 text-[20px]">search</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-12 gap-4 items-end">
              <div className="col-span-1 md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Asset Group</label>
                <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded bg-slate-50 dark:bg-slate-800/50" type="text" value="Laptop" />
              </div>
              <div className="col-span-1 md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Model</label>
                <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded bg-slate-50 dark:bg-slate-800/50" type="text" value="HP" />
              </div>
              <div className="col-span-2 md:col-span-5 space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Description</label>
                <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded bg-slate-50 dark:bg-slate-800/50" type="text" value="Laptop / HP / HP 320 / i3 / 2.4GHz / 16GB / 1TB" />
              </div>
              <div className="col-span-1 md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Make</label>
                <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded bg-slate-50 dark:bg-slate-800/50" type="text" value="HP" />
              </div>
              <div className="col-span-1 md:col-span-1">
                <button className="w-full bg-primary text-white py-2 rounded text-sm font-semibold hover:bg-sky-600 transition-colors flex items-center justify-center gap-1">
                  <span className="material-icons-outlined text-[18px]">add</span> Add
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 space-y-6">
          <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-3">Challan Items</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 text-left">
                  <th className="px-4 py-3 text-xs font-semibold text-slate-600 dark:text-slate-400 w-24">Qty</th>
                  <th className="px-4 py-3 text-xs font-semibold text-slate-600 dark:text-slate-400 w-48">Serial Number</th>
                  <th className="px-4 py-3 text-xs font-semibold text-slate-600 dark:text-slate-400">Item Description</th>
                  <th className="px-4 py-3 text-xs font-semibold text-slate-600 dark:text-slate-400 text-center w-24">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="px-4 py-3">
                    <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded text-center" type="text" value="01" />
                  </td>
                  <td className="px-4 py-3">
                    <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded" type="text" value="KB/1234" />
                  </td>
                  <td className="px-4 py-3">
                    <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded" type="text" value="Laptop / HP / HP 320 / i3 / 2.4GHz / 16GB / 1TB" />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="text-slate-400 hover:text-primary"><span className="material-icons-outlined text-[20px]">edit</span></button>
                      <button className="text-red-400 hover:text-red-600"><span className="material-icons-outlined text-[20px]">delete</span></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Total value with GST</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Type here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">SAC Code</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Type Here" type="text" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Remarks</label>
              <input className="w-full border px-4 py-2.5 border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-sm rounded focus:ring-primary focus:border-primary" placeholder="Type Here" type="text" />
            </div>
          </div>
        </section>
        <div className="flex flex-wrap justify-end gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
          <button className="px-6 py-2 bg-primary text-white text-sm font-semibold rounded shadow-sm hover:opacity-90 transition-opacity">Print</button>
          <button className="px-6 py-2 bg-primary text-white text-sm font-semibold rounded shadow-sm hover:opacity-90 transition-opacity">Download PDF</button>
          <button className="px-6 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-900 dark:border-slate-700 text-sm font-semibold rounded shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Cancel</button>
          <button className="px-10 py-2 bg-secondary text-white text-sm font-semibold rounded shadow-sm hover:opacity-90 transition-opacity">Save</button>
        </div>
      </main>
    </>
    
  );
};

export default DeliveryChallanOthersPage;
