import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const ProductListPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6">
        <div className="flex flex-col gap-6 max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Product Management</h1>
            <div className="flex gap-3">
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-md active:scale-95">
                Create Product
              </button>
              <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-md active:scale-95">
                Clear Filters
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Branch</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-md py-2 px-3 text-sm focus:ring-primary focus:border-primary">
                <option>Kolkata</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Pune</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Warehouse</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-md py-2 px-3 text-sm focus:ring-primary focus:border-primary">
                <option>Select</option>
                <option>Main Warehouse</option>
                <option>Satellite Hub</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Item Group</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-md py-2 px-3 text-sm focus:ring-primary focus:border-primary">
                <option>Select</option>
                <option>Desktop</option>
                <option>Laptop</option>
                <option>Server</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-md py-2 px-3 text-sm focus:ring-primary focus:border-primary">
                <option>Select</option>
                <option>Office A</option>
                <option>Room 203</option>
              </select>
            </div>
            <div className="space-y-1.5 lg:col-span-1">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Specification Search</label>
              <div className="relative">
                <input className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-md py-2 px-3 pr-10 text-sm focus:ring-primary focus:border-primary" placeholder="Search..." type="text" />
                <span className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1">Free text search</p>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Availability for rent</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 rounded-md py-2 px-3 text-sm focus:ring-primary focus:border-primary">
                <option>Select</option>
                <option>Available</option>
                <option>Reserved</option>
                <option>Rented</option>
              </select>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto custom-scrollbar">
              <table className="w-full text-left border-collapse min-w-[1200px]">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Item Group</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Model</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Brand</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Part No</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Sl. #</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Specification</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Branch</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Warehouse</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Location</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Original Cost</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Data Status</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Availability For Rent</th>
                    <th className="px-4 py-4 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider text-center">View Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 text-sm">Desktop</td>
                    <td className="px-4 py-4 text-sm">D340</td>
                    <td className="px-4 py-4 text-sm font-medium">HP</td>
                    <td className="px-4 py-4 text-sm">HP-D-250</td>
                    <td className="px-4 py-4 text-sm">KB-1234</td>
                    <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">i3/16GB/500GB/win10Pro</td>
                    <td className="px-4 py-4 text-sm">Pune</td>
                    <td className="px-4 py-4 text-sm">NA</td>
                    <td className="px-4 py-4 text-sm">M/S XYX</td>
                    <td className="px-4 py-4 text-sm font-mono">23000</td>
                    <td className="px-4 py-4 text-sm"><span className="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-[11px] font-bold uppercase">Submitted</span></td>
                    <td className="px-4 py-4 text-sm"><a className="text-primary hover:underline font-medium" href="#">With Customer</a></td>
                    <td className="px-4 py-4 text-sm text-center">
                      <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">visibility</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 text-sm">Desktop</td>
                    <td className="px-4 py-4 text-sm">D340</td>
                    <td className="px-4 py-4 text-sm font-medium">HP</td>
                    <td className="px-4 py-4 text-sm">HP-D-250</td>
                    <td className="px-4 py-4 text-sm">KB-1234</td>
                    <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">i3/16GB/500GB/win10Pro</td>
                    <td className="px-4 py-4 text-sm">Pune</td>
                    <td className="px-4 py-4 text-sm">NA</td>
                    <td className="px-4 py-4 text-sm">Pune</td>
                    <td className="px-4 py-4 text-sm font-mono">23000</td>
                    <td className="px-4 py-4 text-sm"><span className="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-[11px] font-bold uppercase">Submitted</span></td>
                    <td className="px-4 py-4 text-sm"><a className="text-primary hover:underline font-medium" href="#">Under repair</a></td>
                    <td className="px-4 py-4 text-sm text-center">
                      <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">visibility</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 text-sm">Desktop</td>
                    <td className="px-4 py-4 text-sm">D340</td>
                    <td className="px-4 py-4 text-sm font-medium">HP</td>
                    <td className="px-4 py-4 text-sm">HP-D-250</td>
                    <td className="px-4 py-4 text-sm">KB-1234</td>
                    <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">i3/16GB/500GB/win10Pro</td>
                    <td className="px-4 py-4 text-sm">Pune</td>
                    <td className="px-4 py-4 text-sm">NA</td>
                    <td className="px-4 py-4 text-sm">Pune</td>
                    <td className="px-4 py-4 text-sm font-mono">23000</td>
                    <td className="px-4 py-4 text-sm"><span className="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-[11px] font-bold uppercase">Submitted</span></td>
                    <td className="px-4 py-4 text-sm"><a className="text-primary hover:underline font-medium" href="#">Reserved for client</a></td>
                    <td className="px-4 py-4 text-sm text-center">
                      <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">visibility</span></button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-4 py-4 text-sm">Desktop</td>
                    <td className="px-4 py-4 text-sm">D340</td>
                    <td className="px-4 py-4 text-sm font-medium">HP</td>
                    <td className="px-4 py-4 text-sm">HP-D-250</td>
                    <td className="px-4 py-4 text-sm">KB-1234</td>
                    <td className="px-4 py-4 text-sm text-slate-500 dark:text-slate-400">i3/16GB/500GB/win10Pro</td>
                    <td className="px-4 py-4 text-sm">Pune</td>
                    <td className="px-4 py-4 text-sm">NA</td>
                    <td className="px-4 py-4 text-sm">Pune</td>
                    <td className="px-4 py-4 text-sm font-mono">23000</td>
                    <td className="px-4 py-4 text-sm"><span className="px-2 py-0.5 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-[11px] font-bold uppercase">Submitted</span></td>
                    <td className="px-4 py-4 text-sm"><a className="text-primary hover:underline font-medium" href="#">Awaiting Disposal</a></td>
                    <td className="px-4 py-4 text-sm text-center">
                      <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons-outlined">visibility</span></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <p className="text-xs text-slate-500 dark:text-slate-400">Showing 1 to 4 of 4 entries</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs border border-slate-300 dark:border-slate-600 rounded disabled:opacity-50" disabled="">Previous</button>
                <button className="px-3 py-1 text-xs bg-primary text-white rounded">1</button>
                <button className="px-3 py-1 text-xs border border-slate-300 dark:border-slate-600 rounded">Next</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default ProductListPage;
