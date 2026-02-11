import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const ProcurementPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1600px] mx-auto px-6 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Procurement</h1>
          <div className="flex gap-3">
            <button className="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded text-sm font-semibold flex items-center gap-2">
              <span className="material-icons-outlined text-sm">upload</span> Upload Reference
            </button>
            <button className="border border-gray-900 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2 rounded text-sm font-semibold flex items-center gap-2">
              <span className="material-icons-outlined text-sm">print</span> Print
            </button>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 card grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="form-label">Branch</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors">
                <option>Kolkata</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="form-label">Warehouse</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors">
                <option>Axis Mall</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="form-label">Procurement Type</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors">
                <option>Own</option>
              </select>
            </div>
            <div className="col-span-1">
              <label className="form-label">Document No</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" readonly="" type="text" value="D002" />
            </div>
            <div className="col-span-1">
              <label className="form-label">Doc. Date</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" type="text" value="25 / 12 / 2025" />
              <span className="text-[10px] text-gray-400 block mt-1">(Sys Date for new)</span>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 card">
            <label className="form-label text-gray-900 dark:text-gray-100 mb-4">Search for Doc. No</label>
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <label className="form-label">From Date</label>
                <div className="relative">
                  <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" type="text" value="12 / 10 / 2025" />
                  <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-400">calendar_today</span>
                </div>
              </div>
              <div className="flex-1">
                <label className="form-label">To Date</label>
                <div className="relative">
                  <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" type="text" value="12 / 10 / 2025" />
                  <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-400">calendar_today</span>
                </div>
              </div>
              <button className="bg-primary py-2 text-white w-10  rounded flex items-center justify-center">Go</button>
              <div className="flex-1">
                <label className="form-label">Doc. No</label>
                <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors">
                  <option>New</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold flex items-center gap-2">
            Add Item <span className="material-icons-outlined text-sm">add</span>
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded text-sm font-semibold">
            Update Master
          </button>
        </div>
        <div className="card bg-white dark:bg-gray-900">
          <div className="mb-4">
            <span className="text-sm font-bold text-primary">Line no :</span>
            <span className="text-sm text-gray-500">(Auto Generated)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div>
              <label className="form-label">Part No</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors"><option>Select</option></select>
            </div>
            <div>
              <label className="form-label">Quantity</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="Numeric" type="text" />
            </div>
            <div>
              <label className="form-label">Item Group</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="From Master" type="text" />
            </div>
            <div>
              <label className="form-label">Sl#</label>
              <button className="bg-primary text-white text-[11px] font-bold py-2.5 w-full rounded shadow-sm">Add Sl #</button>
            </div>
            <div>
              <label className="form-label">Brand</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="From Master" type="text" />
            </div>
            <div>
              <label className="form-label">Model</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="From Master" type="text" />
            </div>
            <div>
              <label className="form-label">Purchased from</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="Type Here" type="text" />
            </div>
            <div>
              <label className="form-label">Bill No</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="Type Here" type="text" />
            </div>
            <div>
              <label className="form-label">Bill Date</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="Type Here" type="text" />
            </div>
            <div>
              <label className="form-label">Rate</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="Type Here" type="text" />
            </div>
            <div>
              <label className="form-label">HSN Code</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="From Master" type="text" />
            </div>
            <div>
              <label className="form-label">Warranty Period In mnts</label>
              <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="Type here" type="text" />
            </div>
            <div>
              <label className="form-label">Warranty Type</label>
              <select className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors">
                <option>Select</option>
              </select>
            </div>
            <div className="flex items-end pb-1.5">
              <label className="flex items-center gap-2 cursor-pointer">
                <input className="rounded text-primary focus:ring-primary w-4 h-4 border-gray-300" type="checkbox" />
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">ADP</span>
              </label>
            </div>
            <div className="col-span-full grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <div className="lg:col-span-3">
                <label className="form-label">Note</label>
                <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="Type here" type="text" />
              </div>
              <div className="lg:col-span-3">
                <label className="form-label">Brief Specification</label>
                <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" placeholder="Formated Spec. from Master" type="text" />
              </div>
              <div className="flex items-end">
                <button className="bg-secondary hover:bg-opacity-90 text-white w-full py-2.5 rounded text-xs font-bold flex items-center justify-center gap-1">
                  Upload spec. sheet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card bg-white dark:bg-gray-900 p-4">
            <div className="text-xs font-bold text-primary mb-4">Line No. 01</div>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-y-6 gap-x-4">
              <div>
                <div className="form-label">Part No.</div>
                <div className="text-xs font-bold">K25-26/SC-156</div>
              </div>
              <div>
                <div className="form-label">Quantity</div>
                <div className="text-xs font-bold">5</div>
              </div>
              <div>
                <div className="form-label">Item Group</div>
                <div className="text-xs font-bold">Keyboard</div>
              </div>
              <div>
                <div className="form-label">Sl #</div>
                <button className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded">View SL#</button>
              </div>
              <div>
                <div className="form-label">Brand</div>
                <div className="text-xs font-bold">HP</div>
              </div>
              <div>
                <div className="form-label">Model</div>
                <div className="text-xs font-bold">NA</div>
              </div>
              <div>
                <div className="form-label">Purchased from</div>
                <div className="text-xs font-bold">1 Starmax Infotech</div>
              </div>
              <div>
                <div className="form-label">Bill No</div>
                <div className="text-xs font-bold">17234</div>
              </div>
              <div>
                <div className="form-label">Bill Date</div>
                <div className="text-xs font-bold">04-09-2024</div>
              </div>
              <div>
                <div className="form-label">Warranty Period In months</div>
                <div className="text-xs font-bold">04</div>
              </div>
              <div>
                <div className="form-label">Warranty Type</div>
                <div className="text-xs font-bold">Onsite</div>
              </div>
              <div className="lg:col-span-2">
                <div className="form-label">Brief Specification</div>
                <div className="text-xs font-bold">KB/X/y/Z</div>
              </div>
              <div className="lg:col-span-2">
                <div className="form-label">Note</div>
                <div className="text-xs font-bold">This is for Del.</div>
              </div>
              <div>
                <div className="form-label">Rate</div>
                <div className="text-xs font-bold">350</div>
              </div>
              <div>
                <div className="form-label">HSN Code</div>
                <div className="text-xs font-bold">12564</div>
              </div>
              <div className="flex items-end justify-end gap-2 lg:col-span-12">
                <button className="border border-gray-900 dark:border-gray-600 px-3 py-1.5 text-[11px] font-bold rounded">View Spec</button>
                <button className="border border-gray-900 dark:border-gray-600 px-3 py-1.5 text-[11px] font-bold rounded text-red-500">Delete</button>
              </div>
            </div>
          </div>
          <div className="card bg-white dark:bg-gray-900 p-4">
            <div className="text-xs font-bold text-primary mb-4">Line No. 02</div>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-9 gap-y-6 gap-x-4">
              <div>
                <div className="form-label">Part No.</div>
                <div className="text-xs font-bold">K25-26/SC-156</div>
              </div>
              <div>
                <div className="form-label">Quantity</div>
                <div className="text-xs font-bold">5</div>
              </div>
              <div>
                <div className="form-label">Item Group</div>
                <div className="text-xs font-bold">Keyboard</div>
              </div>
              <div>
                <div className="form-label">Sl #</div>
                <button className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded">View SL#</button>
              </div>
              <div>
                <div className="form-label">Brand</div>
                <div className="text-xs font-bold">HP</div>
              </div>
              <div>
                <div className="form-label">Model</div>
                <div className="text-xs font-bold">NA</div>
              </div>
              <div>
                <div className="form-label">Purchased from</div>
                <div className="text-xs font-bold">1 Starmax Infotech</div>
              </div>
              <div>
                <div className="form-label">Bill No</div>
                <div className="text-xs font-bold">17234</div>
              </div>
              <div>
                <div className="form-label">Bill Date</div>
                <div className="text-xs font-bold">04-09-2024</div>
              </div>
              <div>
                <div className="form-label">Warranty Period In months</div>
                <div className="text-xs font-bold">04</div>
              </div>
              <div>
                <div className="form-label">Warranty Type</div>
                <div className="text-xs font-bold">Onsite</div>
              </div>
              <div className="lg:col-span-2">
                <div className="form-label">Brief Specification</div>
                <div className="text-xs font-bold">KB/X/y/Z</div>
              </div>
              <div className="lg:col-span-2">
                <div className="form-label">Note</div>
                <div className="text-xs font-bold">This is for Del.</div>
              </div>
              <div>
                <div className="form-label">Rate</div>
                <div className="text-xs font-bold">350</div>
              </div>
              <div>
                <div className="form-label">HSN Code</div>
                <div className="text-xs font-bold">12564</div>
              </div>
              <div className="flex items-end justify-end gap-2 lg:col-span-12">
                <button className="border border-gray-900 dark:border-gray-600 px-3 py-1.5 text-[11px] font-bold rounded">View Spec</button>
                <button className="border border-gray-900 dark:border-gray-600 px-3 py-1.5 text-[11px] font-bold rounded text-red-500">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-medium">Received By:</span>
              <span className="font-bold">EC</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-medium">Received on:</span>
              <div className="relative w-36">
                <input className="w-full bg-slate-50 dark:bg-slate-900 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md text-sm focus:ring-primary focus:border-primary transition-colors" type="text" value="12/10/2024" />
                <span className="material-icons-outlined absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">calendar_month</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-medium">Accepted By:</span>
              <span className="font-bold">EC</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-medium">Accepted on:</span>
              <span className="font-bold">12/12/2024</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-8 py-2 border border-gray-900 dark:border-gray-600 text-xs font-bold rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Save</button>
            <button className="px-8 py-2 border border-gray-900 dark:border-gray-600 text-xs font-bold rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Receive</button>
            <button className="px-8 py-2 border border-gray-900 dark:border-gray-600 text-xs font-bold rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Accept</button>
            <button className="px-8 py-2 bg-secondary text-white text-xs font-bold rounded shadow-sm hover:opacity-90 transition-opacity">Submit</button>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default ProcurementPage;
