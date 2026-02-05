import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo_login.png";
import sms from "../assets/sms.png";
import eye_slash from "../assets/eye-slash.png";
//import TopMenu from "../layout/TopMenu";
//import Footer from "../layout/Footer";


const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8" style={{boxShadow: '0 10px 25px rgba(0, 159, 227, 0.5)'}}>
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center space-x-2 mb-4">
          <img src={logo} alt="Logo"/>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Signup</h2>
      </div>
      <form className="bg-card-light dark:bg-card-dark shadow-xl rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-100 dark:border-gray-700">Company Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Company Name</label>
                <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">CIN</label>
                  <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">PAN</label>
                  <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">GSTIN</label>
                  <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">ISD</label>
                  <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
                </div>
              </div>
              <div className="w-1/2 pr-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Contact Person</label>
                <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-100 dark:border-gray-700">Address Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Registered Office Address</label>
                <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">PIN</label>
                  <div className="relative">
                    <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none pr-10" placeholder="Type here" type="text" />
                    <span className="material-icons-outlined absolute right-3 top-2.5 text-gray-400">search</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Post Office</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
                    <option disabled="" selected="" value="">Select</option>
                    <option value="1">Central P.O.</option>
                    <option value="2">North District P.O.</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">District</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
                    <option disabled="" selected="" value="">Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">State</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
                    <option disabled="" selected="" value="">Select</option>
                  </select>
                </div>
              </div>
              <div className="w-1/2 pr-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">City</label>
                <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6 pt-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-100 dark:border-gray-700">Banking Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">A/C</label>
                <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">IFS Code</label>
                <div className="relative">
                  <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none pr-10" placeholder="Type here" type="text" />
                  <span className="material-icons-outlined absolute right-3 top-2.5 text-gray-400">search</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Bank</label>
                <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Branch</label>
                <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6 pt-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 border-b pb-2 border-gray-100 dark:border-gray-700">User Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Full Name</label>
                <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="text" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="email" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Contact No.</label>
                  <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="tel" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Department</label>
                  <select className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none appearance-none">
                    <option disabled="" selected="" value="">Select</option>
                    <option>Sales</option>
                    <option>Technical</option>
                    <option>Account</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Password</label>
                  <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="password" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Re-enter password</label>
                  <input className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Type here" type="password" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-end">
          <button className="bg-[#d11a50] hover:bg-opacity-90 text-white font-bold py-3.5 px-12 rounded-xl transition-all shadow-lg hover:shadow-primary/30 transform active:scale-95 text-lg" type="submit">
            Save
          </button>
        </div>
      </form>
      {/* <div className="fixed bottom-6 right-6">
        <button className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg text-gray-500 dark:text-gray-200 hover:scale-110 transition-transform flex items-center justify-center" onclick="document.documentElement.classNameList.toggle('dark')">
          <span className="material-icons-outlined">contrast</span>
        </button>
      </div> */}
    </div>
  );
};

export default RegisterPage;
