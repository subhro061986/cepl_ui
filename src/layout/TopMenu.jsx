import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo_login.png";


const TopMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
          <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
              <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                      {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                          <span className="material-icons-outlined text-xl">computer</span>
                      </div>
                      <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">computer<span className="text-primary">exchange</span></span> */}
                      <img src={logo} alt="Logo"/>
                  </div>
                  <div className="flex items-center gap-6">
                      {/* <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" id="themeToggle">
                          <span className="material-icons-outlined dark:hidden">dark_mode</span>
                          <span className="material-icons-outlined hidden dark:block">light_mode</span>
                      </button> */}
                      <a className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">Contact</a>
                      <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
                      <div className="flex items-center gap-3">
                          <span className="text-sm font-medium hidden md:block">Aditi Sharma</span>
                          <img alt="User Profile" className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-800 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-9c8JMH2n4THgUboxvMfqxjzJcgkYKSEqs3LBTg54Smm-QQffJPjGD-LAHB1VXW8POpmJ7SIvZCNBw5Cnj1EjTF1SisQI3sfS2IMU6A3n-V5flFdj9IuIy19GY1NEkrvY7_0GjlhtUblZQNsHrmPIpm9WaUhCBU0YyAS_x7S9nYjJ8FzUcz1cohzVs27143W6ZuNxIeU5bBx3kTxEMoagKqnpZNllaxrKqJUpP4_1G2FBXRXTHwiT5ScWtbcGbw02UZDp1rsL_ms" />
                      </div>
                  </div>
              </div>
          </header>
          <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
              <div className="max-w-[1600px] mx-auto px-6 flex items-center gap-1">
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-primary border-b-2 border-[#009FE3] min-w-[100px]" href="#">
                      <span className="material-icons-outlined text-[#009FE3]">dashboard</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#009FE3]">Dashboard</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors min-w-[100px]" href="#">
                      <span className="material-icons-outlined">settings</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider">CE Setup</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors min-w-[100px]" href="#">
                      <span className="material-icons-outlined">tune</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-center">Master Config</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors min-w-[100px]" href="#">
                      <span className="material-icons-outlined">inventory_2</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider">Product</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors min-w-[100px]" href="#">
                      <span className="material-icons-outlined">warehouse</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider">Inventory</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors min-w-[100px]" href="#">
                      <span className="material-icons-outlined">shopping_cart</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider">Order</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors min-w-[100px]" href="#">
                      <span className="material-icons-outlined">description</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider">Challan</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors min-w-[100px]" href="#">
                      <span className="material-icons-outlined">receipt_long</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider">Billing</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors min-w-[100px]" href="#">
                      <span className="material-icons-outlined">bar_chart</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider">Reports</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 py-4 px-4 text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors min-w-[100px]" href="#">
                      <span className="material-icons-outlined">notifications</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider">Alerts</span>
                  </a>
              </div>
          </nav>
    </>
  );
};

export default TopMenu;