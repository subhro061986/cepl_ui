import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const BranchesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 md:p-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Branches</h1>
          <div className="flex items-center gap-4">
            <div className="relative flex-grow md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-icons-outlined text-slate-400 text-lg">search</span>
              </span>
              <input className="block w-full pl-10 pr-3 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg leading-5 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm" placeholder="Search branches..." type="text" />
            </div>
            <button className="bg-[#009FE3] hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium inline-flex items-center gap-2 transition-all shadow-sm">
              <span className="material-icons-outlined text-lg">add</span>
              Add Branch
            </button>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 shadow-md rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Branch Code</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Branch Name</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">BR/0001</td>
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Kolkata Corporate Office</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Kolkata</td>
                  <td className="px-6 py-4 text-sm text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-slate-400 hover:text-primary transition-colors" title="View">
                        <span className="material-icons-outlined text-xl">visibility</span>
                      </button>
                      <button className="text-slate-400 hover:text-blue-500 transition-colors" title="Edit">
                        <span className="material-icons-outlined text-xl">edit</span>
                      </button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                        <span className="material-icons-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">BR/0002</td>
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Pune Branch Office</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Pune</td>
                  <td className="px-6 py-4 text-sm text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-slate-400 hover:text-primary transition-colors" title="View">
                        <span className="material-icons-outlined text-xl">visibility</span>
                      </button>
                      <button className="text-slate-400 hover:text-blue-500 transition-colors" title="Edit">
                        <span className="material-icons-outlined text-xl">edit</span>
                      </button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                        <span className="material-icons-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">BR/0003</td>
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Bangalore Branch Office</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Bangalore</td>
                  <td className="px-6 py-4 text-sm text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-slate-400 hover:text-primary transition-colors" title="View">
                        <span className="material-icons-outlined text-xl">visibility</span>
                      </button>
                      <button className="text-slate-400 hover:text-blue-500 transition-colors" title="Edit">
                        <span className="material-icons-outlined text-xl">edit</span>
                      </button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                        <span className="material-icons-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">BR/0004</td>
                  <td className="px-6 py-4 text-sm text-slate-900 dark:text-white font-medium">Delhi Branch Office</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Delhi</td>
                  <td className="px-6 py-4 text-sm text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-slate-400 hover:text-primary transition-colors" title="View">
                        <span className="material-icons-outlined text-xl">visibility</span>
                      </button>
                      <button className="text-slate-400 hover:text-blue-500 transition-colors" title="Edit">
                        <span className="material-icons-outlined text-xl">edit</span>
                      </button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                        <span className="material-icons-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">Showing <span className="font-medium text-slate-700 dark:text-slate-200">1</span> to <span className="font-medium text-slate-700 dark:text-slate-200">4</span> of <span className="font-medium text-slate-700 dark:text-slate-200">4</span> branches</p>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed">
                <span className="material-icons-outlined text-lg">chevron_left</span>
              </button>
              <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-400 cursor-not-allowed">
                <span className="material-icons-outlined text-lg">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default BranchesPage;
