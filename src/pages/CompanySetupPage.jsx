import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const CompanySetupPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1200px] mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Company</h1>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8">
          <form className="space-y-12">
            <section>
              <h2 className="text-lg font-semibold mb-6 border-b border-slate-100 dark:border-slate-800 pb-2">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">Company Name</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" type="text" value="Computer Exchange Pvt. Ltd." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">CIN</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" type="text" value="U30007WB2010PTC144782" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">PAN</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" type="text" value="AADCC9166D" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">GSTIN</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" type="text" value="19AADCC9166D1ZJ" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">ISD</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" type="text" value="123456+" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">Contact Person</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" type="text" value="John Smith" />
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-6 border-b border-slate-100 dark:border-slate-800 pb-2">Address Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">Registered Office Address</label>
                  <textarea className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" rows="2">Park Centre' 24 Park Street, Ground Floor</textarea>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">PIN</label>
                  <div className="relative">
                    <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5 pr-10" type="text" value="700016" />
                    <span className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">Post Office</label>
                  <select className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5">
                    <option>Park Street</option>
                    <option>Middleton Row</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">District</label>
                  <select className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5">
                    <option>Kolkata</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">State</label>
                  <select className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5">
                    <option>West Bengal</option>
                  </select>
                </div>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">City</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" type="text" value="Kolkata" />
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold mb-6 border-b border-slate-100 dark:border-slate-800 pb-2">Banking Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">A/C</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" type="text" value="36150491589" />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">IFS Code</label>
                  <div className="relative">
                    <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5 pr-10" type="text" value="SBIN0000001" />
                    <span className="material-icons-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">Bank</label>
                  <input className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" type="text" value="State Bank of India" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1.5">Branch</label>
                  <textarea className="w-full bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg focus:ring-accent-blue focus:border-accent-blue text-sm px-4 py-2.5" rows="1">Sbi Capital Market Branch, Mumbai</textarea>
                </div>
              </div>
            </section>
            <div className="flex justify-end pt-4">
              <button className="bg-[#d11a50] hover:bg-pink-700 text-white font-semibold py-2.5 px-10 rounded-lg transition duration-200 shadow-md flex items-center gap-2" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
    
  );
};

export default CompanySetupPage;
