import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const StockValidationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1920px] mx-auto">

        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Stock Validation</h1>
        </div>

        <section className="bg-white rounded-lg p-6 shadow-card mb-6" data-purpose="primary-filters">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-end">
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">Branch</label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
                <option>Main Branch</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">Warehouse</label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
                <option>WH-Central-01</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">Doc No.</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="Auto Generated" readonly="" type="text" />
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">Doc Date</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="Sys Date" readonly="" type="text" />
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">Search Doc No</label>
              <div className="relative">
                <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 pr-10" placeholder="Search" type="text" />
                <span className="material-icons-outlined absolute right-3 top-1 text-gray-400">
                  search
                </span>
              </div>
            </div>
            <div className="col-span-1">
              <button className="w-full bg-secondary text-white font-bold py-1.5 rounded shadow-sm hover:opacity-90">Edit/View</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 items-end mt-6">
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">Date of Stock Checking</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 pr-10" placeholder="dd/mm/yyyy" type="text" />
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">Asset Type <span className="text-[10px] text-gray-400">(Product/Accessory/Component)</span></label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
              </select>
              
            </div>
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">Asset Group</label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
              </select>
            </div>
            <div className="col-span-1">
              <button className="w-full bg-primary text-white font-bold py-1.5 rounded shadow-sm hover:opacity-90">Download template</button>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-card mb-6" data-purpose="auditor-details">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
            <div className="col-span-1">
              <label className="block text-xs font-bold text-gray-700 mb-1">Auditor Name</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="Type here" type="text" />
            </div>
            <div className="col-span-1 flex items-end">
              <button className="w-full bg-primary text-white font-bold py-1.5 rounded shadow-sm hover:opacity-90">Upload File</button>
            </div>
            <div className="col-span-1 flex items-end">
              <button className="w-full bg-primary text-white font-bold py-1.5 rounded shadow-sm hover:opacity-90">View Error</button>
            </div>
          </div>
          <div className="overflow-x-auto border rounded border-gray-200">
            <table className="min-w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3">File No</th>
                  <th className="px-4 py-3">Auditor Name</th>
                  <th className="px-4 py-3">File Name</th>
                  <th className="px-4 py-3">Date Of Upload</th>
                  <th className="px-4 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-600">S001</td>
                  <td className="px-4 py-3 text-gray-600">Mr Xyz</td>
                  <td className="px-4 py-3 text-gray-600">Stk-Kol-D001</td>
                  <td className="px-4 py-3 text-gray-600">23-12-2025</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-4 text-gray-400">
                      <button className="text-gray-500 hover:text-gray-700">
                        <span className="material-icons-outlined">visibility</span>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <span className="material-icons-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 text-gray-600">S002</td>
                  <td className="px-4 py-3 text-gray-600">Mr. Abc</td>
                  <td className="px-4 py-3 text-gray-600">Stk-Kol-D002</td>
                  <td className="px-4 py-3 text-gray-600">23-12-2025</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-4 text-gray-400">
                      <button className="text-gray-500 hover:text-gray-700">
                        <span className="material-icons-outlined">visibility</span>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <span className="material-icons-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-600">S003</td>
                  <td className="px-4 py-3 text-gray-600">Mr. Pqr</td>
                  <td className="px-4 py-3 text-gray-600">Stk-Kol-D003</td>
                  <td className="px-4 py-3 text-gray-600">23-12-2025</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-4 text-gray-400">
                      <button className="text-gray-500 hover:text-gray-700">
                        <span className="material-icons-outlined">visibility</span>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <span className="material-icons-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-2 flex gap-12 text-[10px] text-gray-400 uppercase font-bold">
            <span>(Auto Generated)</span>
            <span className="ml-16">(User defined)</span>
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-card mb-6" data-purpose="list-of-discrepancies">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-[#009FE3]">List of Discrepancies</h2>
            <div className="flex gap-4">
              <button className="bg-primary text-white px-8 py-2 rounded font-bold hover:opacity-90">Validate</button>
              <button className="bg-primary text-white px-8 py-2 rounded font-bold hover:opacity-90">View/Download Full Report</button>
            </div>
          </div>
          <div className="overflow-x-auto border rounded border-gray-200">
            <table className="min-w-full text-xs text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-3 py-3">Serial No.</th>
                  <th className="px-3 py-3">Model</th>
                  <th className="px-3 py-3">Brand</th>
                  <th className="px-3 py-3">Brief Description</th>
                  <th className="px-3 py-3">Discrepancies</th>
                  <th className="px-3 py-3">Branch/ WH</th>
                  <th className="px-3 py-3">Defeat/ Remark</th>
                  <th className="px-3 py-3">Action Taken</th>
                  <th className="px-3 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-3 text-gray-600">S245889</td>
                  <td className="px-3 py-3 text-gray-600">HP-123</td>
                  <td className="px-3 py-3 text-gray-600">HP</td>
                  <td className="px-3 py-3 text-gray-600">i7/8core/16GB/1TB</td>
                  <td className="px-3 py-3 text-gray-600">Defective</td>
                  <td className="px-3 py-3 text-gray-600"></td>
                  <td className="px-3 py-3 text-gray-600">Screen broken</td>
                  <td className="px-3 py-3">
                    <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="Type here" type="text" />
                  </td>
                  <td className="px-3 py-3 text-center">
                    <button className="text-red-500 hover:opacity-75">
                        <span className="material-icons-outlined">delete</span>
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-3 text-gray-600">S347824</td>
                  <td className="px-3 py-3 text-gray-600">Del-345</td>
                  <td className="px-3 py-3 text-gray-600">Del</td>
                  <td className="px-3 py-3 text-gray-600">5/4core/8GB/1TB</td>
                  <td className="px-3 py-3 text-gray-600">Not found</td>
                  <td className="px-3 py-3 text-gray-600"></td>
                  <td className="px-3 py-3 text-gray-600"></td>
                  <td className="px-3 py-3">
                    <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="Type here" type="text" />
                  </td>
                  <td className="px-3 py-3 text-center">
                    <button className="text-red-500 hover:opacity-75">
                      <span className="material-icons-outlined">delete</span>
                    </button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-3 text-gray-600">K23455</td>
                  <td className="px-3 py-3 text-gray-600">Mac-14</td>
                  <td className="px-3 py-3 text-gray-600">Apple</td>
                  <td className="px-3 py-3 text-gray-600">i5/4core/8GB/1TB</td>
                  <td className="px-3 py-3 text-gray-600">Other Branch, Defective</td>
                  <td className="px-3 py-3 text-gray-600">Pune</td>
                  <td className="px-3 py-3 text-gray-600">Key Missing</td>
                  <td className="px-3 py-3">
                    <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="Type here" type="text" />
                  </td>
                  <td className="px-3 py-3 text-center">
                    <button className="text-red-500 hover:opacity-75">
                      <span className="material-icons-outlined">delete</span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-3 text-gray-600"></td>
                  <td className="px-3 py-3 text-gray-600"></td>
                  <td className="px-3 py-3 text-gray-600"></td>
                  <td className="px-3 py-3 text-gray-600"></td>
                  <td className="px-3 py-3 text-gray-600">Unlisted</td>
                  <td className="px-3 py-3 text-gray-600"></td>
                  <td className="px-3 py-3 text-gray-600"></td>
                  <td className="px-3 py-3"></td>
                  <td className="px-3 py-3"></td>
                </tr>

                <tr className="h-8 border-t border-gray-100"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr className="h-8 border-t border-gray-100"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 shadow-card" data-purpose="approval-footer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="max-w-xs">
              <label className="block text-xs font-bold text-gray-700 mb-1">Approved By</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="DB" readonly="" type="text" />
              <span className="text-[10px] text-gray-400 font-bold uppercase">(Auto Populated)</span>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Remarks</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="Type here" type="text" />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <button className="px-10 py-2 border border-gray-900 text-gray-800 rounded font-bold hover:bg-gray-50">Save</button>
            <button className="px-10 py-2 border border-gray-900 text-gray-800 rounded font-bold hover:bg-gray-50">Submit</button>
            <button className="px-10 py-2 border border-gray-900 text-gray-800 rounded font-bold hover:bg-gray-50">Reject</button>
            <button className="px-10 py-2 bg-secondary text-white rounded font-bold hover:opacity-90">Approve</button>
          </div>
        </section>

      </main>
    </>
    
  );
};

export default StockValidationPage;
