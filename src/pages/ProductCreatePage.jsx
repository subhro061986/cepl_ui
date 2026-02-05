import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const ProductCreatePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1440px] mx-auto p-6">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Create Product</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1 bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Item Group</label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                  <option>Laptop (Example Value)</option>
                  <option>Desktop</option>
                  <option>Monitor</option>
                </select>
              </div>
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Part Number*</label>
                  <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" type="text" value="21KGA085IN" />
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">Validate</button>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Model</label>
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" type="text" value="TB-14-G6 IRL" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Brand</label>
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" type="text" value="HP" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Serial No.</label>
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" type="text" value="SGL123" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Value</label>
                <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary" type="text" value="50,000" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 h-fit bg-white dark:bg-card-dark p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-end gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap shadow-sm">Copy data from</button>
              <div className="flex-1">
                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Part No.</label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-primary focus:border-primary">
                  <option>Select</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Field Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Value</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Key Field (Y/N)</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Replaceable (Y/N)</th>
                  <th className="px-6 py-4 text-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">Challan Print (Y/N)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">Processor</td>
                  <td className="px-6 py-3">
                    <select className="w-48 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm py-1.5 focus:ring-primary">
                      <option>i7</option>
                      <option>i5</option>
                      <option>Ryzen 7</option>
                    </select>
                  </td>
                  <td className="px-6 py-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400">Y</td>
                  <td className="px-6 py-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400">N</td>
                  <td className="px-6 py-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400">Y</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">RAM 1</td>
                  <td className="px-6 py-3">
                    <input className="w-48 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm py-1.5 focus:ring-primary" type="text" value="8GB" />
                  </td>
                  <td className="px-6 py-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400">Y</td>
                  <td className="px-6 py-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400">N</td>
                  <td className="px-6 py-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400">Y</td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">RAM 2</td>
                  <td className="px-6 py-3">
                    <input className="w-48 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm py-1.5 focus:ring-primary" type="text" value="8GB" />
                  </td>
                  <td className="px-6 py-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400">Y</td>
                  <td className="px-6 py-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400">N</td>
                  <td className="px-6 py-3 text-center text-sm font-medium text-slate-600 dark:text-slate-400">Y</td>
                </tr>
                
                                    <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">Field 1</td>
                                        <td className="px-6 py-3">
                                            <input type="text" className="w-48 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm py-1.5 focus:ring-primary"/>
                                        </td>
                                        <td className="px-6 py-3 text-center text-sm text-slate-400">-</td>
                                        <td className="px-6 py-3 text-center text-sm text-slate-400">-</td>
                                        <td className="px-6 py-3 text-center text-sm text-slate-400">-</td>
                                    </tr>
                               
              </tbody>
            </table>
          </div>
          <div className="p-6 flex justify-end gap-3 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
            <button className="px-8 py-2.5 rounded-lg text-sm font-semibold border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">Save</button>
            <button className="px-8 py-2.5 rounded-lg text-sm font-semibold bg-secondary hover:bg-secondary-600 text-white transition-all shadow-md shadow-pink-200 dark:shadow-none">Submit</button>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default ProductCreatePage;
