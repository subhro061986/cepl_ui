import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const AddAccessoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Add Accessory</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-600 dark:text-slate-400">Branch</label>
            <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded p-2.5 focus:ring-primary focus:border-primary">
              <option>Kolkata</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-600 dark:text-slate-400">Customer</label>
            <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded p-2.5 focus:ring-primary focus:border-primary">
              <option>M/s XYZ</option>
              <option>ABC Corp</option>
              <option>Global Tech</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-600 dark:text-slate-400">Order In Hand</label>
            <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded p-2.5 focus:ring-primary focus:border-primary">
              <option>1011</option>
              <option>1012</option>
              <option>1013</option>
            </select>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded shadow-sm overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <h2 className="text-sm font-bold text-slate-700 dark:text-slate-300">Order Details: <span className="text-primary">1011</span></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 uppercase text-xs">
                <tr>
                  <th className="px-6 py-3 font-semibold">PO Line No.</th>
                  <th className="px-6 py-3 font-semibold">Item Group</th>
                  <th className="px-6 py-3 font-semibold">Item Description</th>
                  <th className="px-6 py-3 font-semibold">Qty</th>
                  <th className="px-6 py-3 font-semibold">Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr>
                  <td className="px-6 py-4">01</td>
                  <td className="px-6 py-4">Desktop</td>
                  <td className="px-6 py-4">i3/4/1TB/Win 10Pro/Keyboard/Mouse/18.5" Monitor</td>
                  <td className="px-6 py-4">10</td>
                  <td className="px-6 py-4">1600</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">02</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">i3/4/1TB/Win 10Pro/Mouse/Carry Case</td>
                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">2000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">03</td>
                  <td className="px-6 py-4"> </td>
                  <td className="px-6 py-4"> </td>
                  <td className="px-6 py-4"> </td>
                  <td className="px-6 py-4"> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
            <h2 className="text-sm font-bold text-slate-700 dark:text-slate-300">Accessory Mapping</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-600 dark:text-slate-400">Inventory Class</label>
                <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded p-2 focus:ring-primary focus:border-primary">
                  <option>Capitalised</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-600 dark:text-slate-400">Inventory Type</label>
                <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded p-2 focus:ring-primary focus:border-primary">
                  <option>Accessory</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-600 dark:text-slate-400">Item Group</label>
                <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded p-2 focus:ring-primary focus:border-primary">
                  <option>Monitor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-600 dark:text-slate-400">Search for Serial No</label>
                <div className="flex">
                  <div className="relative flex-grow">
                    <input className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-l p-2 focus:ring-primary focus:border-primary pr-10" placeholder="Search..." type="text" />
                    <span className="material-icons-outlined absolute right-2 top-2 text-slate-400">search</span>
                  </div>
                  <button className="bg-primary hover:bg-sky-600 text-white px-6 py-2 rounded-r font-medium transition-colors">Go</button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-sm text-left min-w-[1000px]">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-semibold">
                  <tr>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Accessory Asset No.</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Serial No.</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Screen Size</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Screen Type</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Make</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Warehouse</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 text-right space-x-2">
                      <button className="bg-primary hover:bg-sky-600 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase transition-colors">Find Accessory</button>
                      <button className="bg-primary hover:bg-sky-600 text-white px-3 py-1.5 rounded text-[10px] font-bold uppercase transition-colors">Add to Order</button>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr>
                    <td className="px-4 py-2 border-r border-slate-100 dark:border-slate-800 h-10"></td>
                    <td className="px-4 py-2 border-r border-slate-100 dark:border-slate-800">
                      <select className="w-full text-xs border border-slate-200 dark:border-slate-700 rounded py-1 px-2 dark:bg-slate-800"><option>Select</option></select>
                    </td>
                    <td className="px-4 py-2 border-r border-slate-100 dark:border-slate-800">
                      <select className="w-full text-xs border border-slate-200 dark:border-slate-700 rounded py-1 px-2 dark:bg-slate-800"><option>Select</option></select>
                    </td>
                    <td className="px-4 py-2 border-r border-slate-100 dark:border-slate-800">
                      <select className="w-full text-xs border border-slate-200 dark:border-slate-700 rounded py-1 px-2 dark:bg-slate-800"><option>Select</option></select>
                    </td>
                    <td className="px-4 py-2 border-r border-slate-100 dark:border-slate-800">
                      <select className="w-full text-xs border border-slate-200 dark:border-slate-700 rounded py-1 px-2 dark:bg-slate-800"><option>Select</option></select>
                    </td>
                    <td className="px-4 py-2 border-r border-slate-100 dark:border-slate-800">
                      <select className="w-full text-xs border border-slate-200 dark:border-slate-700 rounded py-1 px-2 dark:bg-slate-800"><option>Select</option></select>
                    </td>
                    <td className="px-4 py-2"></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">KM 1102</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">MO/123/35</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">35"</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">LED</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">HP</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">Park St</td>
                    <td className="px-4 py-3 text-center">
                      <input checked="" className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">KM 1103</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">MO/123/35</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">35"</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">LED</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">HP</td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800">Park St</td>
                    <td className="px-4 py-3 text-center">
                      <input checked="" className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="h-10">
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800"></td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800"></td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800"></td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800"></td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800"></td>
                    <td className="px-4 py-3 border-r border-slate-100 dark:border-slate-800"></td>
                    <td className="px-4 py-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
              <h2 className="text-sm font-bold text-slate-700 dark:text-slate-300">Attached Accessory</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold uppercase">
                  <tr>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Accessory Asset No</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Order Number</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Asset Group</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Make</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800">Model</th>
                    <th className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr>
                    <td className="px-4 py-3">KM 1234</td>
                    <td className="px-4 py-3">1101</td>
                    <td className="px-4 py-3">Monitor</td>
                    <td className="px-4 py-3">LG</td>
                    <td className="px-4 py-3">P234</td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-secondary hover:text-red-700 transition-colors">
                        <span className="material-icons-outlined text-base">delete</span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">KK 3456</td>
                    <td className="px-4 py-3">1102</td>
                    <td className="px-4 py-3">Keyboard</td>
                    <td className="px-4 py-3">Logitech</td>
                    <td className="px-4 py-3">K123</td>
                    <td className="px-4 py-3 text-center">
                      <button className="text-secondary hover:text-red-700 transition-colors">
                        <span className="material-icons-outlined text-base">delete</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <div className="flex flex-wrap items-center justify-end gap-3">
              <button className="px-10 py-2.5 bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-700 rounded font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Save</button>
              <button className="px-10 py-2.5 bg-secondary hover:bg-pink-600 text-white rounded font-bold transition-colors">Submit</button>
              <button className="px-10 py-2.5 bg-white dark:bg-slate-800 border border-slate-900 dark:border-slate-700 rounded font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Add to Crat</button>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default AddAccessoryPage;
