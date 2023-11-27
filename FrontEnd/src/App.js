import "./style.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import SignUpPage from "./components/customer/SignUpPage";
import Header from "./components/Headers/Header";
import SignInPage from "./components/customer/SignInPage";

import SuccessMessage from "./components/Headers/SignupSuccess";
import AutoMobile from "./components/Admins/AutomobileCreation";
import AutomobileBody from "./components/Headers/AutomobileBody";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/app/store";

import Shimmer from "./components/Headers/Shimmer";
import AdminAutomobileEdit from "./components/Admins/AdminAutomobileEdit"

import AdminPage from "./components/Admins/AdminPage";
import { AuthProvider } from "./utils/AuthContext";
import Aboutus from "./components/Headers/Aboutus";
import CustomerDetails from "./components/customer/EditCustomer";
import Automobilefilter from "./components/automobiles/AutomobilesPage";

import Footer from "./components/Footer/Footer";
import CarTable from "./components/cart/CartTemplate";
import ContactUs from "./components/Headers/ContactUs";
import Logout from "./components/customer/Logout";
import Automobile from "./components/Admins/AutomobileCreation";
import Amadmin from "./components/Admins/AdminEdits";
import { PersistGate } from 'redux-persist/integration/react';
import AuthorizedComponent from "./components/Admins/Customerdetails";

import Team from "./components/automobiles/DevTeam";
import AutoMobileUpdate from "./components/Admins/EditAutoMobileadmin";
function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <div>
              <Header />

              <Outlet />{/* this is a react router concept where header and footer common for all pages but <outlet?> will hange according to page path */}

              <Footer />
            </div>
          </PersistGate>
        </Provider>
      </AuthProvider>
    </>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AutomobileBody />,
      },
      {
        path: "/signIn",
        element: <SignInPage />,
      },
      {
        path: "/signUp",
        element: <SignUpPage />,
      },
      {
        path: "/signUp/signUpSuccess/",
        element: <SuccessMessage />,
      },
      {
        path: "/admin",
        element: <AutoMobile />,
      },
      {
        path: "/home",
        element: <AutomobileBody />,
      },

      {
        path: "/shim",
        element: <Shimmer />,
      },
      
      {
        path: "/cartPage",
        element: <CarTable />,
      },
      {
        path: "/Aboutus",
        element: <Aboutus />,
      },
      {
        path: "/EditCustomer",
        element: <CustomerDetails />,
      },
     
      {
        path: "/automobile",
        element: <Automobilefilter />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
      {
        path: "/adminPage",
        element: <AdminPage />,
      },
      { path: "/Admin/Automobile",
       element: <Automobile /> 
      },
      {
        path:"/Admin/Amadmin",
        element:<Amadmin/>
      }
      ,
      {
        path:"/Admin/AuthorizedComponent",
        element:<AuthorizedComponent/>
      },
     
      {
        path:"/AdminAutomobileEdit/:id",
        element:<AdminAutomobileEdit/>
      },{
        path:"/devteam",
        element:<Team/>
      },
      {
        path:"Admin/Amadmin/:id",
        element:<AutoMobileUpdate/>
      },
     
    ],
  },
]);

export default AppRouter;
