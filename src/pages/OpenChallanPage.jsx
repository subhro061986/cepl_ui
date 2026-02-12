import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const OpenChallanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-8">
        <div className="max-w-[1440px] mx-auto">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Open Challan</h1>
          <div className="mb-8 max-w-sm">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2" for="customer">Customer</label>
            <div className="relative">
              <select className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm appearance-none focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all cursor-pointer" id="customer">
                <option>All</option>
                <option>ABC Technologies.pvt</option>
                <option>S&amp;R Design lab</option>
              </select>
              <span className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Challan No</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Challan Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order No</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Rental Period</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Rental Start Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Rental End Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Billing Cycle</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Invoice Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Billing Period</th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">CH0001</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">12/11/2025</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">ABC Technologies.pvt</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">PO-0982</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">6 months</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">01/06/2025</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">25/10/2025</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Monthly</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">10/11/2025</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">19/10/2025</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-3">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-icons-outlined text-xl">edit</span>
                        </button>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                          <span className="material-icons-outlined text-xl">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">CH0002</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">12/11/2025</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">S&amp;R Design lab</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">PO-0982</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">6 months</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">01/06/2025</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">25/10/2025</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Monthly</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">10/11/2025</td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-500">Pending</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center gap-3">
                        <button className="text-slate-400 hover:text-primary transition-colors">
                          <span className="material-icons-outlined text-xl">edit</span>
                        </button>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                          <span className="material-icons-outlined text-xl">visibility</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 border-t border-slate-100 dark:border-slate-700 flex justify-end gap-4 bg-slate-50/50 dark:bg-slate-900/20">
              <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-md shadow-primary/20">
                <span className="material-icons-outlined text-lg">download</span>
                Download Excel
              </button>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-lg hover:bg-accent-pink/90 transition-all shadow-md shadow-accent-pink/20">
                <span className="material-icons-outlined text-lg">edit_note</span>
                Modify Saved Challan
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default OpenChallanPage;
