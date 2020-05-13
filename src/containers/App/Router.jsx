/* eslint-disable no-nested-ternary */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainWrapper from './MainWrapper';
import LogIn from '../LogIn/index';

// Admin Site
import AdminLayout from '../Layouts/AdminLayout/index';
import Dashboard from '../AdminSite/Dashboard/index';

import BinOrders from '../AdminSite/Bins/BinOrders/index';
import EditBinOrder from '../AdminSite/Bins/BinOrders/EditBinOrder/index';
import AddBinOrder from '../AdminSite/Bins/BinOrders/AddBinOrder/index';

import AvailableBins from '../AdminSite/Bins/AvailableBins/index';
import EditBin from '../AdminSite/Bins/AvailableBins/EditBins/index';
import AddBin from '../AdminSite/Bins/AvailableBins/AddBin/index';

import WasteCollection from '../AdminSite/Schedules/WasteCollection/index';
import WasteCollectionCalendar from '../AdminSite/Schedules/WasteCollection/calendar';
import AddWasteCollectionSchedule from '../AdminSite/Schedules/WasteCollection/AddWasteCollectionSchedule/index';
import WasteCollectinSheduleDetails from '../AdminSite/Schedules/WasteCollection/WasteCollectinSheduleDetails/index';

import AddTrainingSchedule from '../AdminSite/Schedules/Trainings/AddTrainingSchedule/index';
import TrainingDetail from '../AdminSite/Schedules/Trainings/TrainingDetail/index';

// Organization
import Organizations from '../AdminSite/Organizations/index';
import OrganizationProfile from '../AdminSite/Organizations/OrganizationProfile/index';
import AddOrganization from '../AdminSite/Organizations/AddOrganization/index';
import EditOrganization from '../AdminSite/Organizations/EditOrganization/index';
import YearlyCalendar from '../AdminSite/Organizations/YearlyCalendar/index';

// User
import Users from '../AdminSite/Users/index';
import AddUser from '../AdminSite/Users/AddUser/index';
import EditUser from '../AdminSite/Users/EditUser/index';


import Trainings from '../AdminSite/Schedules/Trainings/index';
// import WasteTypes from '../AdminSite/WasteTypes/index';

// Settings
import AdminSettings from '../AdminSite/Settings/index';
import AdminChangePassword from '../AdminSite/Settings/ChangePassword';

import Reporting from '../AdminSite/Reporting/index';

// Payment
import AdminPayment from '../AdminSite/Payment/index';
import AddNewInvoicePage from '../AdminSite/Payment/AddNewInvoiceForm';

// User Site
import UserLayout from '../Layouts/UserLayout/index';
import UserDashboard from '../UserSite/Dashboard/index';
import SchedulesPage from '../UserSite/Schedules/index';
import TrainingPage from '../UserSite/Training/index';
import TrainingDetailPage from '../UserSite/Training/TrainingDetails/index';
import UserProfilePage from '../UserSite/UserProfile/index';
import ChangePassword from '../UserSite/ChangePassword/index';
import OrganizationPage from '../UserSite/Organization/index';
import UserReporting from '../UserSite/Reporting/index';
import PaperWasteManagement from '../UserSite/Training/components/PaperWasteManagement';
import PlasticWasteManagement from '../UserSite/Training/components/PlasticWasteManagement';
import Invoice from '../UserSite/Payment/Invoice';
import Payment from '../UserSite/Payment/Payment';
import ThankYou from '../UserSite/Payment/ThankYou';
import PlasticQuiz from '../UserSite/Training/components/Quizzes/PlasticTest/PlasticTest';
import PaperQuiz from '../UserSite/Training/components/Quizzes/PaperTest/PaperTest';

import Landing from '../Landing/index';
import Report from '../Report/Reporting/index';
import ExactReport from '../Report/Reporting/reporting';
import PdfReport from '../UserSite/PdfReports/index';

const Schedules = () => (
  <Switch>
    <Route exact path="/schedules/waste-collection" component={WasteCollection} />
    <Route exact path="/schedules/waste-collection/calendar" component={WasteCollectionCalendar} />
    <Route exact path="/schedules/waste-collection/add" component={AddWasteCollectionSchedule} />
    <Route exact path="/schedules/waste-collection/:logisticsId" component={WasteCollectinSheduleDetails} />
    <Route exact path="/schedules/trainings" component={Trainings} />
    <Route exact path="/schedules/trainings/add" component={AddTrainingSchedule} />
    <Route exact path="/schedules/trainings/:trainingId" component={TrainingDetail} />
  </Switch>
);

const OrganizationPages = () => (
  <Switch>
    <Route exact path="/organizations/" component={Organizations} />
    <Route exact path="/organizations/profile" component={OrganizationProfile} />
    <Route exact path="/organizations/add" component={AddOrganization} />
    <Route exact path="/organizations/schedule/:organizationId" component={YearlyCalendar} />
    <Route exact path="/organizations/edit/:organizationId" component={EditOrganization} />
  </Switch>
);

const UserPages = () => (
  <Switch>
    <Route exact path="/users/" component={Users} />
    <Route exact path="/users/profile" component={OrganizationProfile} />
    <Route exact path="/users/add" component={AddUser} />
    <Route exact path="/users/edit/:userId" component={EditUser} />
  </Switch>
);

const Bins = () => (
  <Switch>
    <Route path="/bin/orders/edit/:binOrderId" component={EditBinOrder} />
    <Route path="/bin/orders/add" component={AddBinOrder} />
    <Route path="/bin/orders" component={BinOrders} />
    <Route path="/bin/available-bins" component={AvailableBins} />
    <Route path="/bin/edit/:binId" component={EditBin} />
    <Route path="/bin/add" component={AddBin} />
  </Switch>
);

const PaymentPages = () => (
  <Switch>
    <Route exact path="/payment/organizations/:organizationId" component={AdminPayment} />
    <Route exact path="/payment/add_new_invoice/organizations/:organizationId" component={AddNewInvoicePage} />
  </Switch>
);

const adminWrappedRoutes = () => (
  <div>
    <AdminLayout />
    <div className="container__wrap">
      <Route exact path="/" component={Dashboard} />
      <Route path="/bin" component={Bins} />
      <Route path="/schedules" component={Schedules} />
      <Route path="/organizations" component={OrganizationPages} />
      <Route path="/users" component={UserPages} />
      <Route path="/settings" component={AdminSettings} />
      <Route path="/change_password" component={AdminChangePassword} />
      <Route path="/reporting" component={Reporting} />
      <Route path="/payment" component={PaymentPages} />
      <Route exact path="/organizations/profile" component={OrganizationProfile} />
    </div>
  </div>
);

const userWrappedRoutes = () => (
  <div>
    <UserLayout />
    <div className="container__wrap">
      <Route exact path="/" component={UserDashboard} />
      <Route exact path="/schedules" component={SchedulesPage} />
      <Route exact path="/profile" component={UserProfilePage} />
      <Route exact path="/change_password" component={ChangePassword} />
      <Route exact path="/organization" component={OrganizationPage} />
      <Route exact path="/reporting" component={UserReporting} />
      <Route exact path="/training" component={TrainingPage} />
      <Route exact path="/training/edit/:trainingId" component={TrainingDetailPage} />
      <Route exact path="/training/paper_waste_management" component={PaperWasteManagement} />
      <Route exact path="/training/plastic_waste_management" component={PlasticWasteManagement} />
      <Route exact path="/training/plastic_quiz" component={PlasticQuiz} />
      <Route exact path="/training/paper_quiz" component={PaperQuiz} />
      <Route exact path="/invoice" component={Invoice} />
      <Route exact path="/payment/:paymentId" component={Payment} />
      <Route exact path="/thankyou" component={ThankYou} />
    </div>
  </div>
);

// export const getCurrentUser = () => {
//   console.log(localStorage.getItem('user'));
//   return localStorage.getItem('user');
// };

const user = JSON.parse(localStorage.getItem('user'));

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/log_in" component={LogIn} />
        <Route exact path="/landing" component={Landing} />
        {/* <Route exact path="/report" component={ExactReport} /> */}
        <Route exact path="/report" component={Report} />
        <Route path="/report/:reportId" component={ExactReport} />
        <Route path="/pdf_report/:reportId" component={PdfReport} />
        {/* <Route path="/bin/orders/edit/:binOrderId" component={EditBinOrder} /> */}
        {user && user.type === 'ADMIN' && <Route path="/" component={adminWrappedRoutes} /> }
        {user && user.type === 'OPERATION' && <Route path="/" component={adminWrappedRoutes} /> }
        {user && user.type === 'USER' && <Route path="/" component={userWrappedRoutes} /> }
        <Redirect to="/log_in" />
        {/* (
           userType === 'USER' && <Route path="/" component={userWrappedRoutes} />
         ) :
           (<Redirect to="/log_in" />)
         } */}
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
