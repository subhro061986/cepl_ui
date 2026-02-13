import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const AssetsConfigurationSitePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1920px] mx-auto">

        <section className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Asset Configuration Change at site</h1>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8 items-end">
          <div className="col-span-1">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Branch</label>
            <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
              <option>Kolkata-Park ST</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Warehouse</label>
            <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
              <option>Kolkata</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Doc No</label>
            <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 italic text-gray-900" placeholder="(Auto generated for new)" type="text" />
          </div>
          <div className="col-span-1">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Doc Date</label>
            <div className="relative">
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" type="text" value="12 / 10 / 2025" />
              <span className="material-icons-outlined absolute right-2 top-1 text-gray-400">calendar_month</span>
            </div>
          </div>
          <div className="col-span-1">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Search Doc. No</label>
            <div className="relative">
              <input className="w-full text-xs border px-3 py-2 border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" placeholder="Search" type="text" />
              <span className="material-icons-outlined absolute right-2 top-1 text-gray-400">search</span>
            </div>
          </div>
          <div className="col-span-1 flex items-center space-x-2">
           
              <input type="checkbox" className="mr-1" /> Edit / View
           
          </div>
        </div>

        <section className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8" data-purpose="customer-details">
          <h2 className="text-sm font-bold text-gray-800 mb-4">Customer Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Customer Name</label>
              <select className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Order No</label>
              <select className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Asset Group (to be modified)</label>
              <select className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Qty</label>
              <input className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500" placeholder="Type here" type="text" />
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">

          <section className="lg:col-span-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col">
            <h2 className="text-sm font-bold text-gray-800 mb-4">Assets taken to site</h2>
            <div className="overflow-x-auto flex-grow">
              <table className="w-full text-left border-collapse border border-gray-100">
                <thead>
                  <tr className="bg-gray-50 text-[10px] uppercase font-semibold text-gray-500">
                    <th className="border border-gray-200 px-3 py-2">Challan No</th>
                    <th className="border border-gray-200 px-3 py-2">Challan Date</th>
                    <th className="border border-gray-200 px-3 py-2">Item Sl#</th>
                    <th className="border border-gray-200 px-3 py-2">Item description</th>
                    <th className="border border-gray-200 px-3 py-2">Value</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr>
                    <td className="border border-gray-200 px-3 py-1.5"><select className="w-full border-none p-0 text-xs text-gray-400"><option>Select</option></select></td>
                    <td className="border border-gray-200 px-3 py-1.5 bg-gray-50 text-gray-400">Auto Populated</td>
                    <td className="border border-gray-200 px-3 py-1.5"><select className="w-full border-none p-0 text-xs text-gray-400"><option>Select</option></select></td>
                    <td className="border border-gray-200 px-3 py-1.5 bg-gray-50 text-gray-400">Auto Populated</td>
                    <td className="border border-gray-200 px-3 py-1.5"><select className="w-full border-none p-0 text-xs text-gray-400"><option>Select</option></select></td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-3 py-2 text-blue-600">C110</td>
                    <td className="border border-gray-200 px-3 py-2">23/11/2025</td>
                    <td className="border border-gray-200 px-3 py-2">R234</td>
                    <td className="border border-gray-200 px-3 py-2">RAM 16GB</td>
                    <td className="border border-gray-200 px-3 py-2 text-right">2000</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-200 px-3 py-2 text-blue-600">C123</td>
                    <td className="border border-gray-200 px-3 py-2">23/11/2025</td>
                    <td className="border border-gray-200 px-3 py-2">R235</td>
                    <td className="border border-gray-200 px-3 py-2">RAM 16GB</td>
                    <td className="border border-gray-200 px-3 py-2 text-right">2000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-sky-500 text-white px-3 py-1 rounded text-xs font-semibold flex items-center">
                <span className="mr-1">+</span> Add New Row
              </button>
            </div>
          </section>

          <section className="lg:col-span-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-sm font-bold text-gray-800 mb-4">Modification</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">Assets Sl# No. Modified</label>
                <select className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500">
                  <option>KB1234</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">Asset group</label>
                <input className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500" type="text" value="Desktop" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">Original Specification</label>
                <input className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500 bg-gray-50" readonly="" type="text" value="i3/16GB/512 GB" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1">Original Cost</label>
                <input className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500 bg-gray-50" readonly="" type="text" value="43,000" />
              </div>
              <div className="col-span-1 lg:col-span-1">
                <label className="block text-[10px] font-bold text-gray-700 mb-1">Modified Specification</label>
                <input className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500" type="text" value="i3/32GB/512 GB" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-700 mb-1 text-sky-600">Revised Cost</label>
                <input className="w-full text-xs border px-3 py-2 border-slate-300 rounded focus:ring-sky-500 font-bold" type="text" value="50,000" />
              </div>
            </div>
            <div className="flex justify-end">
              <button className="bg-sky-500 text-white px-4 py-2 rounded text-xs font-bold">Change configuration</button>
            </div>
          </section>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-gray-600">Asset</span>
                <input className="w-20 text-xs border px-3 py-2 border-slate-300 rounded" type="text" value="K1234" />
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-500">
                  <span className="material-icons-outlined">edit</span>
                </button>
                <button className="text-red-400">
                  <span className="material-icons-outlined">delete</span>
                </button>
              </div>
            </div>
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-1 text-gray-500 font-medium"></th>
                  <th className="px-2 py-1 text-gray-500 font-medium">Existing</th>
                  <th className="px-2 py-1 text-gray-500 font-medium">New</th>
                  <th className="px-2 py-1 text-gray-500 font-medium">New Sl#</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-2 py-1 font-bold">Processor</td><td className="px-2 py-1">i3</td><td className="px-2 py-1 text-gray-400">No change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 1</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1">16 GB</td><td className="px-2 py-1 text-gray-400">KP/123</td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 2</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1">16 GB</td><td className="px-2 py-1 text-gray-400">KP/123</td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 3</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1 text-gray-400">No Change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 4</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1 text-red-500">Remove</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 1</td><td className="px-2 py-1">500 GB</td><td className="px-2 py-1">1 TB</td><td className="px-2 py-1 text-gray-400">MP/126</td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 2</td><td className="px-2 py-1">1 TB</td><td className="px-2 py-1 text-gray-400">No Change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 3</td><td className="px-2 py-1">1 TB</td><td className="px-2 py-1 text-gray-400">No Change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 4</td><td className="px-2 py-1">500 GB</td><td className="px-2 py-1 text-red-500">Remove</td><td className="px-2 py-1"></td></tr>
              </tbody>
              <tfoot className="border-t-2 border-gray-100">
                <tr>
                  <td className="px-2 py-2 font-bold">Cost</td>
                  <td className="px-2 py-2 font-bold">43000</td>
                  <td className="px-2 py-2 font-bold">50000</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-gray-600">Asset</span>
                <input className="w-20 text-xs border border-gray-300 rounded px-3 py-2" type="text" value="K3365" />
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-500">
                  <span className="material-icons-outlined">edit</span>
                </button>
                <button className="text-red-400">
                  <span className="material-icons-outlined">delete</span>
                </button>
              </div>
            </div>
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-1 text-gray-500 font-medium"></th>
                  <th className="px-2 py-1 text-gray-500 font-medium">Existing</th>
                  <th className="px-2 py-1 text-gray-500 font-medium">New</th>
                  <th className="px-2 py-1 text-gray-500 font-medium">New Sl#</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-2 py-1 font-bold">Processor</td><td className="px-2 py-1">i3</td><td className="px-2 py-1 text-gray-400">No change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 1</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1">16 GB</td><td className="px-2 py-1 text-gray-400">KP/123</td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 2</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1">16 GB</td><td className="px-2 py-1 text-gray-400">KP/123</td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 3</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1 text-gray-400">No Change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 4</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1 text-red-500">Remove</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 1</td><td className="px-2 py-1">500 GB</td><td className="px-2 py-1">1 TB</td><td className="px-2 py-1 text-gray-400">MP/126</td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 2</td><td className="px-2 py-1">1 TB</td><td className="px-2 py-1 text-gray-400">No Change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 3</td><td className="px-2 py-1">1 TB</td><td className="px-2 py-1 text-gray-400">No Change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 4</td><td className="px-2 py-1">500 GB</td><td className="px-2 py-1 text-red-500">Remove</td><td className="px-2 py-1"></td></tr>
              </tbody>
              <tfoot className="border-t-2 border-gray-100">
                <tr>
                  <td className="px-2 py-2 font-bold">Cost</td>
                  <td className="px-2 py-2 font-bold">43000</td>
                  <td className="px-2 py-2 font-bold">50000</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-gray-600">Asset</span>
                <input className="w-20 text-xs border border-slate-300 rounded px-3 py-2" type="text" value="K3365" />
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-500">
                  <span className="material-icons-outlined text-sm">edit</span>
                </button>
                <button className="text-red-400">
                  <span className="material-icons-outlined text-sm">delete</span>
                </button>
              </div>
            </div>
            <table className="w-full text-left text-[11px] border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 py-1 text-gray-500 font-medium"></th>
                  <th className="px-2 py-1 text-gray-500 font-medium">Existing</th>
                  <th className="px-2 py-1 text-gray-500 font-medium">New</th>
                  <th className="px-2 py-1 text-gray-500 font-medium">New Sl#</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="px-2 py-1 font-bold">Processor</td><td className="px-2 py-1">i3</td><td className="px-2 py-1 text-gray-400">No change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 1</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1">16 GB</td><td className="px-2 py-1 text-gray-400">KP/123</td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 2</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1">16 GB</td><td className="px-2 py-1 text-gray-400">KP/123</td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 3</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1 text-gray-400">No Change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">RAM 4</td><td className="px-2 py-1">8 GB</td><td className="px-2 py-1 text-red-500">Remove</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 1</td><td className="px-2 py-1">500 GB</td><td className="px-2 py-1">1 TB</td><td className="px-2 py-1 text-gray-400">MP/126</td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 2</td><td className="px-2 py-1">1 TB</td><td className="px-2 py-1 text-gray-400">No Change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 3</td><td className="px-2 py-1">1 TB</td><td className="px-2 py-1 text-gray-400">No Change</td><td className="px-2 py-1"></td></tr>
                <tr><td className="px-2 py-1 font-bold">HDD 4</td><td className="px-2 py-1">500 GB</td><td className="px-2 py-1 text-red-500">Remove</td><td className="px-2 py-1"></td></tr>
              </tbody>
              <tfoot className="border-t-2 border-gray-100">
                <tr>
                  <td className="px-2 py-2 font-bold">Cost</td>
                  <td className="px-2 py-2 font-bold">43000</td>
                  <td className="px-2 py-2 font-bold">50000</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
          <div className="max-w-[1920px] mx-auto flex justify-end space-x-3">
            <button className="px-8 py-2 border border-slate-900 rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">Save</button>
            <button className="px-8 py-2 bg-secondary text-white rounded-lg text-sm font-bold shadow-md hover:bg-pink-600">Add to Cart</button>
          </div>
        </div>

      </main>
    </>
    
  );
};

export default AssetsConfigurationSitePage;
