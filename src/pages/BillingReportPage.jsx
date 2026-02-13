import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const BillingReportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1920px] mx-auto p-6">
        <h1 className="text-xl font-bold mb-6 text-gray-800">Billing Report</h1>

        <section className="bg-white p-6 rounded-lg shadow-sm mb-6 border border-gray-100" data-purpose="filter-controls">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
            <div>
              <label className="form-label">Customer Name:</label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="form-label">Customer Address:</label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="form-label">Contact Person<span className="text-gray-700 text-xs">(Primary)</span></label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="form-label">Contact Person No.</label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="form-label">Contact Person<span className="text-gray-700 text-xs">(Other)</span></label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="form-label">Contact Person No. <span className="text-gray-700 text-xs">(Others)</span></label>
              <select className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500">
                <option>Select</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4 items-end">
            <div>
              <label className="form-label">Billing due date <span className="text-[10px] text-gray-400">(Multi select)</span></label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" type="text" value="12 / 10 / 2025" />
              
            </div>
            <div>
              <label className="form-label">GST No</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 bg-gray-50 italic" disabled="" placeholder="Auto populated" type="text" />
            </div>
            <div>
              <label className="form-label">CGST %</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 bg-gray-50 italic" disabled="" placeholder="Auto populated" type="text" />
            </div>
            <div>
              <label className="form-label">SGST %</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 bg-gray-50 italic" disabled="" placeholder="Auto populated" type="text" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <label className="form-label mb-0">IGST Enabled</label>
              <input className="rounded text-blue-600" type="checkbox" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
            <div>
              <label className="form-label">Doc. No</label>
              <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500" disabled="" type="text" value="Sys. Generated" />
            </div>
            <div>
              <label className="form-label">Doc. Date</label>
              <div className="relative">
                <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 bg-gray-50 pr-8" disabled="" type="text" value="Sys Date" />
                <span className="material-icons-outlined absolute right-2 top-1.5 text-gray-400">calendar_month</span>
              </div>
            </div>
            <div className="lg:col-span-1">
              <label className="form-label">Select existing doc. No.</label>
              <div className="relative">
                <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 pr-8" type="text" />
                <span className="material-icons-outlined absolute right-2 top-1.5 text-gray-400">search</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-blue-500 text-white px-6 py-2 rounded text-xs font-semibold hover:bg-blue-600 transition-colors">Edit / View</button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

          <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100" data-purpose="excel-column-selection">
            <h2 className="section-title">Select Cols for Excel Output</h2>
            <div className="space-y-2">

              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span className="text-xs font-medium">Qty</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span className="text-xs font-medium">Fright</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span className="text-xs font-medium">Order No</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span className="text-xs font-medium">Period Start Date</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span className="text-xs font-medium">Period End Date</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span className="text-xs font-medium">Shipping Address</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span className="text-xs font-medium">User Name</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span className="text-xs font-medium">Remarks</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-50">
                <span className="text-xs font-medium">Invoice No. &amp; date</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-xs font-medium">Internal Note</span>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
            </div>
          </section>

          <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100" data-purpose="excel-grouping">
            <h2 className="section-title">Select Groups for Excel Output</h2>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-3">Group by</span>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">1. Order No</span>
                    <input className="rounded text-blue-600" type="checkbox" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">2. Period Start Date &amp; Period End Date</span>
                    <input className="rounded text-blue-600" type="checkbox" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium">3. Shipping Address</span>
                    <input className="rounded text-blue-600" type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 block mb-2">Group By Sequence</span>
                <div className="space-y-2">
                  <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 pr-8" type="text" value="01" />
                  <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 pr-8" type="text" value="02" />
                  <input className="w-full text-xs px-3 py-2 border border-slate-300 rounded shadow-sm focus:ring-sky-500 focus:border-sky-500 pr-8" type="text" value="03" />
                </div>
                <span className="text-[10px] text-gray-400 mt-1 block">(Text Box numeric)</span>
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-6">
            <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100" data-purpose="fright-config">
              <h2 className="section-title">Fright</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">Is Fright Applicable</span>
                  <input className="rounded text-blue-600" type="checkbox" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium">Is Fright Consolidated</span>
                  <input className="rounded text-blue-600" type="checkbox" />
                </div>
              </div>
            </section>
            <section className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex-grow" data-purpose="accessory-config">
              <h2 className="section-title">Aressory</h2>
              <div className="flex items-center gap-2 mb-4">
                <label className="text-xs font-medium">Display on Excel</label>
                <input className="rounded text-blue-600" type="checkbox" />
              </div>
              <div className="overflow-hidden border border-gray-100 rounded">
                <table className="w-full text-left text-[11px]">
                  <thead className="bg-gray-50 text-gray-600 border-b border-gray-100">
                    <tr>
                      <th className="px-2 py-1.5 font-bold">Accessory Group</th>
                      <th className="px-2 py-1.5 font-bold">Specification</th>
                      <th className="px-2 py-1.5 font-bold">Quantity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    <tr>
                      <td className="px-2 py-1.5 text-gray-500">Monitor</td>
                      <td className="px-2 py-1.5 text-gray-500">14"</td>
                      <td className="px-2 py-1.5 text-gray-500">10</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1.5 text-gray-500">Mouse</td>
                      <td className="px-2 py-1.5 text-gray-500">USB</td>
                      <td className="px-2 py-1.5 text-gray-500">10</td>
                    </tr>
                    <tr>
                      <td className="px-2 py-1.5 text-gray-500">UPS</td>
                      <td className="px-2 py-1.5 text-gray-500">500W</td>
                      <td className="px-2 py-1.5 text-gray-500">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

        </div>

        <section className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 overflow-hidden" data-purpose="report-data-table">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left text-[11px] min-w-[1200px]">
              <thead className="bg-gray-50 text-gray-500 border-b border-gray-100 font-bold">
                <tr>
                  <th className="px-3 py-3 whitespace-nowrap">Sl/No</th>
                  <th className="px-3 py-3 whitespace-nowrap">Challan No.</th>
                  <th className="px-3 py-3 whitespace-nowrap">Challan Date</th>
                  <th className="px-3 py-3 whitespace-nowrap">Brand &amp; Model No</th>
                  <th className="px-3 py-3 whitespace-nowrap">Configuration</th>
                  <th className="px-3 py-3 whitespace-nowrap">Serial No.</th>
                  <th className="px-3 py-3 whitespace-nowrap">Qty</th>
                  <th className="px-3 py-3 whitespace-nowrap">Rate</th>
                  <th className="px-3 py-3 whitespace-nowrap">Fright</th>
                  <th className="px-3 py-3 whitespace-nowrap">Total</th>
                  <th className="px-3 py-3 whitespace-nowrap">Order No</th>
                  <th className="px-3 py-3 whitespace-nowrap">Period Start Date</th>
                  <th className="px-3 py-3 whitespace-nowrap">Period End Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">

                <tr className="hover:bg-blue-50/30">
                  <td className="px-3 py-3">01</td>
                  <td className="px-3 py-3 text-blue-600 font-medium">911,942</td>
                  <td className="px-3 py-3 text-gray-500">30/11/2024, 25/10/2025</td>
                  <td className="px-3 py-3 text-gray-600">Apple, MacBook Pro M1</td>
                  <td className="px-3 py-3 text-gray-500">M1/2.60GHz/8GB/256 SSD/adpt/cc</td>
                  <td className="px-3 py-3 text-gray-500">FVFFLMVNQ05D</td>
                  <td className="px-3 py-3 font-medium">01</td>
                  <td className="px-3 py-3 text-gray-600">4500</td>
                  <td className="px-3 py-3">
                    <input className="text-[10px] w-16 p-1 border-gray-200 rounded" placeholder="Type here" type="text" />
                  </td>
                  <td className="px-3 py-3 font-bold text-gray-700">4500</td>
                  <td className="px-3 py-3 text-gray-500">1011</td>
                  <td className="px-3 py-3 text-gray-500">01-10-2025</td>
                  <td className="px-3 py-3 text-gray-500">31-10-2025</td>
                </tr>

                <tr className="bg-gray-50/10"><td className="px-3 py-3">02</td><td colspan="12"></td></tr>
                <tr><td className="px-3 py-3">03</td><td colspan="12"></td></tr>
                <tr className="bg-gray-50/10"><td className="px-3 py-3">04</td><td colspan="12"></td></tr>
                <tr><td className="px-3 py-3">05</td><td colspan="12"></td></tr>
                <tr className="bg-gray-50/10"><td className="px-3 py-3">06</td><td colspan="12"></td></tr>
                <tr><td className="px-3 py-3">07</td><td colspan="12"></td></tr>
                <tr className="bg-gray-50/10"><td className="px-3 py-3">08</td><td colspan="12"></td></tr>
                <tr><td className="px-3 py-3">09</td><td colspan="12"></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex flex-col items-end space-y-4">
          <div className="w-full max-w-xs space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-600">Total</label>
              <input className="input-field w-32 px-3 py-2 border border-slate-300 rounded bg-gray-50 italic text-right" disabled="" type="text" value="Calculated" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-gray-600">Fright</label>
                <a className="text-[10px] text-blue-500 hover:underline" href="#">Change</a>
              </div>
              <input className="input-field w-32 px-3 py-2 border border-slate-300 rounded bg-gray-50 italic text-right" disabled="" type="text" value="Calculated" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-600">SGST</label>
              <input className="input-field px-3 py-2 border border-slate-300 rounded w-32 bg-gray-50 italic text-right" disabled="" type="text" value="Calculated" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-600">CGST</label>
              <input className="input-field px-3 py-2 border border-slate-300 rounded w-32 bg-gray-50 italic text-right" disabled="" type="text" value="Calculated" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-gray-600">IGST</label>
              <input className="input-field w-32 px-3 py-2 border border-slate-300 rounded bg-gray-50 italic text-right" disabled="" type="text" value="Calculated" />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-gray-200">
              <label className="text-sm font-bold text-gray-800">GND Total</label>
              <input className="input-field w-32 px-3 py-2 border border-slate-300 rounded bg-gray-50 italic text-right font-bold text-gray-800" disabled="" type="text" value="Calculated" />
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <button className="px-10 py-2 border border-gray-900 rounded text-sm font-semibold hover:bg-gray-50 transition-colors">Save</button>
            <button className="px-10 py-2 bg-secondary text-white rounded text-sm font-semibold hover:bg-pink-600 transition-colors">Genarate Excel</button>
          </div>
        </div>

      </main>
    </>
    
  );
};

export default BillingReportPage;
