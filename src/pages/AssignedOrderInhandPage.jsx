import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const AssignedOrderInhandPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="p-6 max-w-[1600px] mx-auto space-y-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold tracking-tight">Assigned Order In Hand</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Service Engineer Name</label>
              <input className="w-full px-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md focus:ring-primary focus:border-primary text-sm" type="text" value="Mr. ABC" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Branch</label>
              <select className="w-full bg-white dark:bg-slate-800 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md focus:ring-primary focus:border-primary text-sm">
                <option>Kolkata</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Warehouse</label>
              <select className="w-full bg-white dark:bg-slate-800 px-3 py-2 border border-slate-300 dark:border-slate-700 rounded-md focus:ring-primary focus:border-primary text-sm">
                <option>Axis Mall</option>
                <option>City Center</option>
                <option>North Hub</option>
              </select>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Order ID</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Customer Name</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Billing Address</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Shipping Address</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">PO. No</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">PO Date</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Rental Start</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Return Date</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Order Type</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Billing Type</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Sales Exec</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-center">Select</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="bg-primary/5 hover:bg-primary/10 transition-colors">
                    <td className="px-4 py-4 font-medium">1011</td>
                    <td className="px-4 py-4">M/s SPG</td>
                    <td className="px-4 py-4">XYZ</td>
                    <td className="px-4 py-4">XYZABC</td>
                    <td className="px-4 py-4">1234</td>
                    <td className="px-4 py-4 whitespace-nowrap">23-12-2023</td>
                    <td className="px-4 py-4 whitespace-nowrap">01-01-2024</td>
                    <td className="px-4 py-4 whitespace-nowrap">01-01-2025</td>
                    <td className="px-4 py-4">One time</td>
                    <td className="px-4 py-4">Monthly</td>
                    <td className="px-4 py-4">DDG</td>
                    <td className="px-4 py-4 text-center">
                      <input checked="" className="w-4 h-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 dark:bg-slate-800" name="orderSelect" type="radio" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-4 font-medium">1012</td>
                    <td className="px-4 py-4">L&amp;T</td>
                    <td className="px-4 py-4">23, CDM St. Kolkata</td>
                    <td className="px-4 py-4">23, CDM St. Kolkata</td>
                    <td className="px-4 py-4">234</td>
                    <td className="px-4 py-4 whitespace-nowrap">24-12-2023</td>
                    <td className="px-4 py-4 whitespace-nowrap">01-01-2024</td>
                    <td className="px-4 py-4 whitespace-nowrap">01-01-2025</td>
                    <td className="px-4 py-4">One time</td>
                    <td className="px-4 py-4">Monthly</td>
                    <td className="px-4 py-4">DDG</td>
                    <td className="px-4 py-4 text-center">
                      <input className="w-4 h-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 dark:bg-slate-800" name="orderSelect" type="radio" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-4 font-medium">1013</td>
                    <td className="px-4 py-4">ACC ltd</td>
                    <td className="px-4 py-4">24, Rod Street, Kolkata</td>
                    <td className="px-4 py-4">24, BB Ganguli Street, Kol</td>
                    <td className="px-4 py-4">3456</td>
                    <td className="px-4 py-4 whitespace-nowrap">25-12-2023</td>
                    <td className="px-4 py-4 whitespace-nowrap">01-01-2024</td>
                    <td className="px-4 py-4 whitespace-nowrap">01-01-2025</td>
                    <td className="px-4 py-4">One time</td>
                    <td className="px-4 py-4">Monthly</td>
                    <td className="px-4 py-4">DDG</td>
                    <td className="px-4 py-4 text-center">
                      <input className="w-4 h-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 dark:bg-slate-800" name="orderSelect" type="radio" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-4 font-medium">1014</td>
                    <td className="px-4 py-4">Book &amp; Co</td>
                    <td className="px-4 py-4">82,Park Street, Kolkata</td>
                    <td className="px-4 py-4">24, BB Ganguli Street, Kol</td>
                    <td className="px-4 py-4">5552</td>
                    <td className="px-4 py-4 whitespace-nowrap">26-12-2023</td>
                    <td className="px-4 py-4 whitespace-nowrap">01-01-2024</td>
                    <td className="px-4 py-4 whitespace-nowrap">01-01-2025</td>
                    <td className="px-4 py-4">One time</td>
                    <td className="px-4 py-4">Monthly</td>
                    <td className="px-4 py-4">DDG</td>
                    <td className="px-4 py-4 text-center">
                      <input className="w-4 h-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 dark:bg-slate-800" name="orderSelect" type="radio" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold tracking-tight">Details of order No : 1011</h2>
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">PO Line No.</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Item</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Description</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Qty To Deliver</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-right">Effective Rate</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider">Delivery Scheduled</th>
                    <th className="px-4 py-3 font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2">
                      <input checked="" className="rounded text-green-600 focus:ring-green-500 border-slate-300 dark:border-slate-700" type="checkbox" />
                      <span>Select All</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-4">01</td>
                    <td className="px-4 py-4 font-medium">Desktop</td>
                    <td className="px-4 py-4">i3/4/1TB/Win 10Pro/Keyboard/Mouse/18.5" Monitor</td>
                    <td className="px-4 py-4">10</td>
                    <td className="px-4 py-4 text-right">1600</td>
                    <td className="px-4 py-4">Immediate</td>
                    <td className="px-4 py-4 text-center">
                      <input checked="" className="rounded text-green-600 focus:ring-green-500 border-slate-300 dark:border-slate-700 dark:bg-slate-800" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-4">02</td>
                    <td className="px-4 py-4 font-medium">Desktop</td>
                    <td className="px-4 py-4">i5/8/512 SSD/Win 10Pro</td>
                    <td className="px-4 py-4">5</td>
                    <td className="px-4 py-4 text-right">2400</td>
                    <td className="px-4 py-4">Immediate</td>
                    <td className="px-4 py-4 text-center">
                      <input checked="" className="rounded text-green-600 focus:ring-green-500 border-slate-300 dark:border-slate-700 dark:bg-slate-800" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-4">03</td>
                    <td className="px-4 py-4 font-medium">Laptop</td>
                    <td className="px-4 py-4">i3/4/500GB/win10Pro/14"/Carry Care</td>
                    <td className="px-4 py-4">15</td>
                    <td className="px-4 py-4 text-right">1800</td>
                    <td className="px-4 py-4">Immediate</td>
                    <td className="px-4 py-4 text-center">
                      <input checked="" className="rounded text-green-600 focus:ring-green-500 border-slate-300 dark:border-slate-700 dark:bg-slate-800" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-4">04</td>
                    <td className="px-4 py-4 font-medium">Laptop</td>
                    <td className="px-4 py-4 text-slate-400">—</td>
                    <td className="px-4 py-4 text-slate-400">—</td>
                    <td className="px-4 py-4 text-right text-slate-400">—</td>
                    <td className="px-4 py-4">Immediate</td>
                    <td className="px-4 py-4 text-center">
                      <input checked="" className="rounded text-green-600 focus:ring-green-500 border-slate-300 dark:border-slate-700 dark:bg-slate-800" type="checkbox" />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-4 py-4">05</td>
                    <td className="px-4 py-4 font-medium">Printer Mono</td>
                    <td className="px-4 py-4 text-slate-400">—</td>
                    <td className="px-4 py-4 text-slate-400">—</td>
                    <td className="px-4 py-4 text-right text-slate-400">—</td>
                    <td className="px-4 py-4">Immediate</td>
                    <td className="px-4 py-4 text-center">
                      <input checked="" className="rounded text-green-600 focus:ring-green-500 border-slate-300 dark:border-slate-700 dark:bg-slate-800" type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-end pt-4 pb-12">
            <button className="bg-secondary hover:bg-pink-700 text-white px-10 py-3 rounded-md font-bold text-sm shadow-lg transition-all active:scale-95 uppercase tracking-wide">
              Initiate Order fulfilment
            </button>
          </div>
        </div>
      </main>
    </>
    
  );
};

export default AssignedOrderInhandPage;
