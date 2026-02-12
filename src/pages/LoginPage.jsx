import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo_login.png";
import sms from "../assets/sms.png";
import eye_slash from "../assets/eye-slash.png";
//import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300 px-4 py-12">
      {/* <div className="fixed top-6 right-6">
        <button className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md text-slate-600 dark:text-slate-300 hover:scale-110 transition-transform" onclick="document.documentElement.classNameList.toggle('dark')">
          <span className="material-icons-outlined">dark_mode</span>
        </button>
      </div> */}
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8 md:p-12 transition-colors duration-300" style={{boxShadow: '0 10px 25px rgba(0, 159, 227, 0.5)'}}>
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-2 mb-2">
            <img src={logo} alt="Logo"/>
          </div>
          <h1 className="text-5xl font-black text-[#009FE3] tracking-tight">RAMS</h1>
        </div>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Login</h2>
          <p className="text-slate-500 dark:text-slate-400">Enter User name &amp; password</p>
        </div>
        <form action="#" className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" for="username">
              User Name
            </label>
            <div className="relative">
              <input className="w-full px-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 dark:text-white placeholder-slate-400" id="username" placeholder="Your Email ID" type="text" />
              {/* <span className="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                mail_outline
              </span> */}
              <img src={sms} alt="sms" className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-80"/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1" for="password">
              Password
            </label>
            <div className="relative">
              <input className="w-full px-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-slate-900 dark:text-white placeholder-slate-400" id="password" placeholder="Enter your password" type="password" />
              {/* <span className="material-icons-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-200">
                visibility_off
              </span> */}
              <img src={eye_slash} alt="eye" className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer hover:opacity-80"/>
            </div>
            <div className="flex justify-end">
              <a className="text-[#009FE3] hover:underline text-sm font-medium" href="#">Forgot Password?</a>
            </div>
          </div>
          <div className="pt-4 flex justify-center">
            <button className="w-full md:w-48 bg-secondary hover:bg-[#d11a50] active:scale-95 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-accent/20 transition-all duration-200 text-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-30 dark:opacity-10">
        <svg className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px]" fill="none" viewBox="0 0 400 400">
          <circle className="text-primary" cx="200" cy="200" r="150" stroke="currentColor" stroke-width="1"></circle>
          <circle className="text-accent" cx="200" cy="200" r="100" stroke="currentColor" stroke-width="1"></circle>
        </svg>
      </div>
    </div>
  );
};

export default LoginPage;
