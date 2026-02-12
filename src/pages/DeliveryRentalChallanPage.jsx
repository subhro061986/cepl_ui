import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const DeliveryRentalChallanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1440px] mx-auto p-6 space-y-6">
        <h1 className="text-xl font-bold text-slate-800 dark:text-white">Delivery Challan</h1>
        <section className="bg-card-light dark:bg-card-dark rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="form-label">Branch</label>
              <div className="relative">
              <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer">
                <option>Select Branch</option>
                <option>Main Branch</option>
              </select>
              <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
              <p className="text-[10px] text-slate-500">Search/dropdown, Branch DB</p>
            </div>
            <div>
              <label className="form-label">Warehouse</label>
              <div className="relative">
              <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer">
                <option>Select Warehouse</option>
                <option>Central Hub</option>
              </select>
              <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
              <p className="text-[10px] text-slate-500">Search/dropdown, Warehouse DB</p>
            </div>
            <div>
              <label className="form-label">Challan Type</label>
              <div className="relative">
              <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer">
                <option>Rental Challan</option>
                <option>Sale Challan</option>
              </select>
              <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
              <p className="text-[10px] text-slate-500">Data Source: rental masters db</p>
            </div>
          </div>
        </section>
        <section className="bg-card-light dark:bg-card-dark rounded-lg shadow-sm p-6 space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
            <h2 className="text-md font-semibold text-slate-800 dark:text-white">Customer Details</h2>
            <p className="text-[10px] text-slate-500">(Note: most fields will be filled when redirected from cart or filled automatically on selecting customer name)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
            <div className="md:col-span-1">
              <label className="form-label">Customer Name</label>
              <div className="relative">
              <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer">
                <option>Data Populated from Cart</option>
              </select>
              <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
              <p className="text-[10px] text-slate-500">Populated from Cart (Single-select dropdown)</p>
            </div>
            <div>
              <label className="form-label">Challan No.</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="1234" type="text" />
              <p className="text-[10px] text-slate-500">system generated or manual entry if needed</p>
            </div>
            <div>
              <label className="form-label">Date</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="System generate or manual" type="text" />
                <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 text-sm">calendar_month</span>
              </div>
              <p className="text-[10px] text-slate-500">system date by default / manual</p>
            </div>
            <div className="md:col-span-1.5">
              <label className="form-label">Billing Address</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="Data Source: filled from cart/customer db /manual entry" type="text" />
              <p className="text-[10px] text-slate-500">Data Source: Customer DB; editable</p>
            </div>
            <div className="md:col-span-1.5">
              <label className="form-label">Shipping Address</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="Data Source: filled from cart/customer db /manual entry" type="text" />
              <p className="text-[10px] text-slate-500">Data Source: Customer DB; editable</p>
            </div>
            <div>
              <label className="form-label">Order No.</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="will be filled from cart" type="text" />
              <p className="text-[10px] text-slate-500">if multiple order is selected a list will be shown</p>
            </div>
            <div>
              <label className="form-label">Order Date</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="will be filled from cart" type="text" />
                <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 text-sm">calendar_month</span>
              </div>
              <p className="text-[10px] text-slate-500">if multiple order is selected a list will be shown</p>
            </div>
            <div>
              <label className="form-label">GST No.</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="from customer db / manual" type="text" />
              <p className="text-[10px] text-slate-500">From Customer DB or manual</p>
            </div>
            <div>
              <label className="form-label">E-way Bill No.</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="Manual" type="text" />
              <p className="text-[10px] text-slate-500">Manual Entry</p>
            </div>
            <div>
              <label className="form-label">Contact Person</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="from customer db / manual" type="text" />
              <p className="text-[10px] text-slate-500">Data Source: Customer DB; editable</p>
            </div>
            <div>
              <label className="form-label">Contact No</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="from customer db / manual" type="text" />
              <p className="text-[10px] text-slate-500">Data Source: cart/customer db /manual entry</p>
            </div>
            <div>
              <label className="form-label">Messenger</label>
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="Manual" type="text" />
              <p className="text-[10px] text-slate-500">Manual Entry</p>
            </div>
          </div>
        </section>
        <section className="bg-card-light dark:bg-card-dark rounded-lg shadow-sm p-6 space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center">
            <h2 className="text-md font-semibold text-slate-800 dark:text-white">Asset Selection</h2>
            <p className="text-[10px] text-slate-500 ml-2">(This section will not be visible for rental challan)</p>
          </div>
          <div className="flex flex-wrap items-end gap-4">
            <div className="w-64">
              <label className="form-label">Asset Class</label>
              <div className="relative">
                <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer">
                  <option>Capitalised/ Rental</option>
                </select>
                <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">keyboard_arrow_down</span>
              </div>
            </div>
            <div className="w-64">
              <label className="form-label">Asset S#</label>
              <div className="relative">
                <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="Search" type="text" />
                {/* <span className="material-icons-outlined absolute left-3 top-2 text-slate-400 text-sm">search</span> */}
              </div>
            </div>
            <button className="bg-primary hover:bg-sky-600 text-white text-sm font-semibold px-6 py-2.5 rounded transition-all">Go</button>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded border border-slate-100 dark:border-slate-700 grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Asset SI#</p>
              <p className="text-xs font-semibold">e.g. KB/1234</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Asset Group</p>
              <p className="text-xs font-semibold">e.g. Laptop</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Model</p>
              <p className="text-xs font-semibold">e.g. HP 320</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Make</p>
              <p className="text-xs font-semibold">HP</p>
            </div>
            <div className="md:col-span-1">
              <p className="text-[10px] uppercase font-bold text-slate-400">Description</p>
              <p className="text-xs font-semibold truncate">e.g. i3/2.4GHz/16GB/1TB (Formatted Specification)</p>
            </div>
            <div className="text-right">
              <button className="bg-primary hover:bg-sky-600 text-white text-xs font-semibold px-4 py-1.5 rounded transition-all">Add</button>
            </div>
          </div>
          <div className="overflow-x-auto rounded border border-slate-200 dark:border-slate-700">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Qty</th>
                  <th className="px-4 py-3 font-semibold">Serial Number</th>
                  <th className="px-4 py-3 font-semibold">Item</th>
                  <th className="px-4 py-3 font-semibold">Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-4 py-3">
                    1
                    <p className="text-[9px] text-slate-400 mt-1">(Default is 1 if SI# is available)</p>
                  </td>
                  <td className="px-4 py-3">
                    KB/1234
                    <p className="text-[9px] text-slate-400 mt-1">Free text for other for non rental or rental related</p>
                  </td>
                  <td className="px-4 py-3">
                    Laptop/HP/HP 320/i3/2.4GHz/16GB/1TB
                    <p className="text-[9px] text-slate-400 mt-1">Free text for other for non rental or rental related</p>
                  </td>
                  <td className="px-4 py-3">
                    1700
                    <p className="text-[9px] text-slate-400 mt-1">(For rental challan/ Nor visible for other)</p>
                  </td>
                </tr>
                <tr className="bg-slate-50/30 dark:bg-slate-800/20">
                  <td className="px-4 py-3 h-8"></td>
                  <td className="px-4 py-3 h-8"></td>
                  <td className="px-4 py-3 h-8"></td>
                  <td className="px-4 py-3 h-8"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">Accessory:</h3>
              <button className="bg-primary hover:bg-sky-600 text-white text-xs font-semibold px-4 py-1.5 rounded flex items-center space-x-1">
                <span className="material-icons-outlined text-sm">add</span>
                <span>Add</span>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="4" type="text" />
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="" type="text" />
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder='Monitor 14"' type="text" />
              <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="" type="text" />
            </div>
            <div className="border-t border-slate-100 dark:border-slate-800 h-10"></div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-sm p-4">
            <label className="form-label">Total Rental Value with GST</label>
            <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="Type here" type="text" />
            <p className="text-[10px] text-slate-500 italic">Calculated from rate per month for rental/ Not visible for others</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-sm p-4">
            <label className="form-label">Value</label>
            <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="Type Here" type="text" />
            <p className="text-[10px] text-slate-500 italic">Free text/ Not Visible for rental</p>
          </div>
          <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-sm p-4">
            <label className="form-label">SAC Code</label>
            <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="Type Here" type="text" />
          </div>
          <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-sm p-4 md:col-span-1">
            <label className="form-label">Remarks</label>
            <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" placeholder="Free Text" type="text" />
          </div>
        </section>
        <div className="flex flex-wrap justify-end gap-3 pb-12">
          <button className="bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-8 py-2 rounded font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">Save</button>
          <button className="bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-8 py-2 rounded font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">Submit</button>
          <button className="bg-primary hover:bg-sky-600 text-white px-8 py-2 rounded font-medium transition-all shadow-sm flex items-center space-x-2">
            <span className="material-icons-outlined text-sm">print</span>
            <span>Print</span>
          </button>
          <button className="bg-secondary hover:bg-rose-600 text-white px-8 py-2 rounded font-medium transition-all shadow-sm flex items-center space-x-2">
            <span className="material-icons-outlined text-sm">picture_as_pdf</span>
            <span>Download PDF</span>
          </button>
        </div>
      </main>
    </>
    
  );
};

export default DeliveryRentalChallanPage;
