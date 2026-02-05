import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo_login.png";
import sms from "../assets/sms.png";
import eye_slash from "../assets/eye-slash.png";
import TopMenu from "../layout/TopMenu";
//import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const DashboardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopMenu/>
      <main className="max-w-[1600px] mx-auto p-6 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <div className="bg-white card-shadow dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-icons-outlined">pan_tool</span>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">Customer wise assets to be returned in next <span className="text-primary font-bold">30 days</span></h3>
            </div>
            <button className="btn_primary_outline mt-6 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <span className="material-icons-outlined text-sm">arrow_circle_left</span>
              Click here for Details
            </button>
          </div>
          <div className="bg-white card-shadow dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-icons-outlined">shopping_cart_checkout</span>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">Orders to be <br /><span className="text-primary font-bold">Fulfilled</span></h3>
            </div>
            <button className="btn_primary_outline mt-6 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <span className="material-icons-outlined text-sm">arrow_circle_left</span>
              Click here for Details
            </button>
          </div>
          <div className="bg-white card-shadow dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-icons-outlined">person_pin_circle</span>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">Region wise top <br /><span className="text-primary font-bold">15 customers</span></h3>
            </div>
            <button className="btn_primary_outline mt-6 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <span className="material-icons-outlined text-sm">arrow_circle_left</span>
              Click here for Details
            </button>
          </div>
          <div className="bg-white card-shadow dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-icons-outlined">assessment</span>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">Customer wise outstanding more than <span className="text-primary font-bold">60 days</span></h3>
            </div>
            <button className="btn_primary_outline mt-6 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <span className="material-icons-outlined text-sm">arrow_circle_left</span>
              Click here for Details
            </button>
          </div>
          <div className="bg-white card-shadow  dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-icons-outlined">inventory</span>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">Assets in <br /><span className="text-primary font-bold">stock</span></h3>
            </div>
            <button className="btn_primary_outline mt-6 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <span className="material-icons-outlined text-sm">arrow_circle_left</span>
              Click here for Details
            </button>
          </div>
          <div className="bg-white card-shadow dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <span className="material-icons-outlined">pending_actions</span>
              </div>
              <h3 className="text-sm font-medium text-slate-600 dark:text-slate-400">Pending <br /><span className="text-primary font-bold">Support Request</span></h3>
            </div>
            <button className="btn_primary_outline mt-6 flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
              <span className="material-icons-outlined text-sm">arrow_circle_left</span>
              Click here for Details
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">Region Wise <span className="text-slate-400 font-normal">Sales Per Month</span></h2>
              <select className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 py-2 focus:ring-primary focus:border-primary transition-all">
                <option>Kolkata</option>
                <option>Pune</option>
                <option>Bangalore</option>
                <option>Delhi</option>
              </select>
            </div>
            <div className="relative h-64 flex items-end justify-between gap-2 px-2">
              <div className="absolute -left-8 inset-y-0 flex flex-col justify-between text-[10px] text-slate-400">
                <span>35</span>
                <span>30</span>
                <span>25</span>
                <span>20</span>
                <span>15</span>
                <span>10</span>
                <span>5</span>
                <span>0</span>
              </div>
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
                <div className="w-full border-b border-slate-400"></div>
                <div className="w-full border-b border-slate-400"></div>
                <div className="w-full border-b border-slate-400"></div>
                <div className="w-full border-b border-slate-400"></div>
                <div className="w-full border-b border-slate-400"></div>
                <div className="w-full border-b border-slate-400"></div>
                <div className="w-full border-b border-slate-400"></div>
                <div className="w-full border-b border-slate-400"></div>
              </div>
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-8 bg-primary rounded-t-sm chart-bar" style={{"height": "54%"}}></div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">Jan</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-8 bg-primary rounded-t-sm chart-bar" style={{"height": "72%"}}></div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">Feb</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-3 relative">
                <div className="absolute bottom-[90%] left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 p-2 rounded mb-2 z-10">
                  <p className="text-[9px] text-slate-400 uppercase font-bold">March Sales</p>
                  <p className="text-xs font-bold text-primary">1,264</p>
                </div>
                <div className="w-8 bg-primary rounded-t-sm chart-bar" style={{"height": "82%"}}></div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">Mar</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-8 bg-primary rounded-t-sm chart-bar" style={{"height": "48%"}}></div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">Apr</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-8 bg-primary rounded-t-sm chart-bar" style={{"height": "78%"}}></div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">May</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-8 bg-primary rounded-t-sm chart-bar" style={{"height": "62%"}}></div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">Jun</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-8 bg-primary rounded-t-sm chart-bar" style={{"height": "55%"}}></div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">Jul</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-8 bg-primary rounded-t-sm chart-bar" style={{"height": "92%"}}></div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">Aug</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-3">
                <div className="w-8 bg-primary rounded-t-sm chart-bar" style={{"height": "72%"}}></div>
                <span className="text-[10px] font-medium text-slate-500 uppercase">Sep</span>
              </div>
            </div>
            <div className="absolute left-2 -rotate-90 origin-left text-[10px] text-slate-400 font-medium translate-y-32">Rs. in lakhs</div>
          </div>
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center">
            <div className="flex w-full items-center justify-center gap-8 lg:flex-row flex-col">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle className="donut-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#4CB0AC" stroke-dasharray="251.2" stroke-dashoffset="180" stroke-width="12"></circle>
                  <circle className="donut-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#FBB03B" stroke-dasharray="251.2" stroke-dashoffset="200" stroke-width="12"></circle>
                  <circle className="donut-segment dark:stroke-slate-700" cx="50" cy="50" fill="transparent" r="40" stroke="#E2E8F0" stroke-dasharray="251.2" stroke-dashoffset="230" stroke-width="12"></circle>
                  <circle className="donut-segment" cx="50" cy="50" fill="transparent" r="40" stroke="#0EA5E9" stroke-dasharray="251.2" stroke-dashoffset="100" stroke-width="12"></circle>
                </svg>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Region Wise <span className="text-slate-400 font-normal">Sales</span></h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Kolkata</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FBB03B]"></span>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Pune</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#4CB0AC]"></span>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Bangalore</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Delhi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;
