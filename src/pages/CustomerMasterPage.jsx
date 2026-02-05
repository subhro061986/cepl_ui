import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const CustomerMasterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Vendor Name</label>
            <div className="relative">
              <select className="w-full bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm focus:ring-primary focus:border-primary appearance-none">
                <option>Customer Name</option>
              </select>
              <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">expand_more</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Vendor Type</label>
            <div className="relative">
              <select className="w-full bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm focus:ring-primary focus:border-primary appearance-none">
                <option>Asset Rental</option>
              </select>
              <span className="material-icons-outlined absolute right-2 top-2 text-slate-400 pointer-events-none">expand_more</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Vendor Code</label>
            <input className="w-full bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm focus:ring-primary focus:border-primary" type="text" value="CK004" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">ISD</label>
            <input className="w-full bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded px-3 py-2 text-sm focus:ring-primary focus:border-primary" type="text" />
          </div>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold hover:bg-opacity-90 transition-all flex items-center gap-1 mb-8">
          <span className="material-icons-outlined text-[18px]">add</span> Add Location
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 custom-shadow border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">Kolkata <span className="text-sm font-normal text-slate-500 dark:text-slate-400">(Registered Office)</span></h2>
              <button className="text-slate-400 hover:text-primary transition-colors">
                <span className="material-icons-outlined">edit_note</span>
              </button>
            </div>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <p><span className="font-medium">Branch :</span> Kolkata Park-ST</p>
              <p><span className="font-medium">Address :</span> 601 W Temple Street street Cathedral of Our Lady of the...</p>
              <div className="flex justify-between">
                <p><span className="font-medium">City :</span> Kolkata</p>
                <p><span className="font-medium">State :</span> West Bengal</p>
                <p><span className="font-medium">Pin :</span> 700091</p>
              </div>
              <div className="flex justify-between">
                <p><span className="font-medium">CIN No :</span> CN 98234</p>
                <p><span className="font-medium">PAN No :</span> ASDOK7867M</p>
              </div>
              <p><span className="font-medium">GST :</span> 19MTAHB709421Z</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase font-semibold">
                  <tr>
                    <th className="px-2 py-2">Name</th>
                    <th className="px-2 py-2">Email</th>
                    <th className="px-2 py-2">Phone</th>
                    <th className="px-2 py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  <tr>
                    <td className="px-2 py-3 font-semibold">S.K Mani</td>
                    <td className="px-2 py-3">manisk@xyz.com</td>
                    <td className="px-2 py-3">970035678</td>
                    <td className="px-2 py-3 text-green-600 font-medium">Primary</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 font-semibold">P.K Lal</td>
                    <td className="px-2 py-3">lalpk@xyz.com</td>
                    <td className="px-2 py-3">983457623</td>
                    <td className="px-2 py-3 text-slate-400">Deactivated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 custom-shadow border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">Pune</h2>
              <button className="text-slate-400 hover:text-primary transition-colors">
                <span className="material-icons-outlined">edit_note</span>
              </button>
            </div>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <p><span className="font-medium">Branch :</span> Pune</p>
              <p><span className="font-medium">Address :</span> 22 Deccan Street</p>
              <div className="flex justify-between">
                <p><span className="font-medium">City :</span> Pune</p>
                <p><span className="font-medium">State :</span> Maharashtra</p>
                <p><span className="font-medium">Pin :</span> 411001</p>
              </div>
              <div className="flex justify-between">
                <p><span className="font-medium">CIN No :</span> CN 98234</p>
                <p><span className="font-medium">PAN No :</span> ASDOK7867M</p>
              </div>
              <p><span className="font-medium">GST :</span> 19MTAHB709421Z</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase font-semibold">
                  <tr>
                    <th className="px-2 py-2">Name</th>
                    <th className="px-2 py-2">Email</th>
                    <th className="px-2 py-2">Phone</th>
                    <th className="px-2 py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  <tr>
                    <td className="px-2 py-3 font-semibold">S.K Mani</td>
                    <td className="px-2 py-3">manisk@xyz.com</td>
                    <td className="px-2 py-3">970035678</td>
                    <td className="px-2 py-3 text-green-600 font-medium">Primary</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 font-semibold">P.K Lal</td>
                    <td className="px-2 py-3">lalpk@xyz.com</td>
                    <td className="px-2 py-3">983457623</td>
                    <td className="px-2 py-3 text-slate-400">Deactivated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 custom-shadow border border-slate-100 dark:border-slate-700">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">Delhi</h2>
              <button className="text-slate-400 hover:text-primary transition-colors">
                <span className="material-icons-outlined">edit_note</span>
              </button>
            </div>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <p><span className="font-medium">Branch :</span> Delhi</p>
              <p><span className="font-medium">Address :</span> Desh Bandhu Gupta Rd, St Nagar, Krishna Nagar, Karol Bagh</p>
              <div className="flex justify-between">
                <p><span className="font-medium">City :</span> New Delhi</p>
                <p><span className="font-medium">State :</span> Delhi</p>
                <p><span className="font-medium">Pin :</span> 110005</p>
              </div>
              <div className="flex justify-between">
                <p><span className="font-medium">CIN No :</span> CN 98234</p>
                <p><span className="font-medium">PAN No :</span> ASDOK7867M</p>
              </div>
              <p><span className="font-medium">GST :</span> 19MTAHB709421Z</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 uppercase font-semibold">
                  <tr>
                    <th className="px-2 py-2">Name</th>
                    <th className="px-2 py-2">Email</th>
                    <th className="px-2 py-2">Phone</th>
                    <th className="px-2 py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  <tr>
                    <td className="px-2 py-3 font-semibold">S.K Mani</td>
                    <td className="px-2 py-3">manisk@xyz.com</td>
                    <td className="px-2 py-3">970035678</td>
                    <td className="px-2 py-3 text-green-600 font-medium">Primary</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-3 font-semibold">P.K Lal</td>
                    <td className="px-2 py-3">lalpk@xyz.com</td>
                    <td className="px-2 py-3">983457623</td>
                    <td className="px-2 py-3 text-slate-400"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button className="bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-2 rounded font-semibold hover:bg-slate-50 transition-all">
            Save
          </button>
          <button className="bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-2 rounded font-semibold hover:bg-slate-50 transition-all">
            Validate
          </button>
          <button className="bg-[#d11a50] text-white px-8 py-2 rounded font-semibold hover:bg-opacity-90 transition-all shadow-md shadow-accent-pink/20">
            Submit
          </button>
        </div>
      </main>
    </>
    
  );
};

export default CustomerMasterPage;
