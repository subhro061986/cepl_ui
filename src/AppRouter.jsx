import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import CompanySetupPage from "./pages/CompanySetupPage";
import BranchesPage from "./pages/BranchesPage";
import UsersPage from "./pages/UsersPage";
import WarehousePage from "./pages/WarehousePage";
import VendorMasterPage from "./pages/VendorMasterPage";
import VendorListPage from "./pages/VendorListPage";
import CustomerListPage from "./pages/CustomerListPage";
import CustomerMasterPage from "./pages/CustomerMasterPage";
import ProductTemplatePage from "./pages/ProductTemplatePage";
import ProductListPage from "./pages/ProductListPage";
import ProductCreatePage from "./pages/ProductCreatePage";
import OrderReceivePage from "./pages/OrderReceivePage";
import CustomerRateContractPage from "./pages/CustomerRateContractPage";
import RunningOpenOrderPage from "./pages/RunningOpenOrderPage";
import OrderInHandPage from "./pages/OrderInHandPage";
import OrderFulfilmentPage from "./pages/OrderFulfilmentPage";
import OrderFulfilmentRentalPage from "./pages/OrderFulfilmentRentalPage";
import BulkOrderFulfilmentPage from "./pages/BulkOrderFulfilmentPage";

const Navigation = () => {
  return (
    <Router>
      

      <Routes>
        <Route path="/" Component={LoginPage} />
        <Route path="/dashboard" Component={DashboardPage} />
        <Route path="/register" Component={RegisterPage} />
        <Route path="/company-setup" Component={CompanySetupPage} />
        <Route path="/branches" Component={BranchesPage} />
        <Route path="/users" Component={UsersPage} />
        <Route path="/warehouse" Component={WarehousePage} />
        <Route path="/vendor-master" Component={VendorMasterPage} />
        <Route path="/vendor-list" Component={VendorListPage} />
        <Route path="/customer-list" Component={CustomerListPage} />
        <Route path="/customer-master" Component={CustomerMasterPage} />
        <Route path="/product-list" Component={ProductListPage} />
        <Route path="/product-template" Component={ProductTemplatePage} />
        <Route path="/product-create" Component={ProductCreatePage} />
        <Route path="/order-receive" Component={OrderReceivePage} />
        <Route path="/customer-rate-contract" Component={CustomerRateContractPage} />
        <Route path="/running-open-order" Component={RunningOpenOrderPage} />
        <Route path="/order-in-hand" Component={OrderInHandPage} />
        <Route path="/order-fulfilment" Component={OrderFulfilmentPage} />
        <Route path="/order-fulfilment-rental" Component={OrderFulfilmentRentalPage} />
        <Route path="/bulk-order-fulfilment" Component={BulkOrderFulfilmentPage} />
      </Routes>
    </Router>
  );
};

export default Navigation;
