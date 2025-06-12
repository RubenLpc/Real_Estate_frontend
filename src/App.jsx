import { Suspense, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";

import Website from "./pages/Website.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties/Properties.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property.jsx";
import UserDetailContext from "./context/UserDetailContext.js";
import Bookings from "./pages/Bookings/Bookings.jsx";
import Favourites from "./pages/Favourites/Favourites.jsx";
import AdminProperties from "./pages/Properties/AdminProperties.jsx";
import AddPropertyModal from "./components/AddPropertyModal/AddPropertyModal.jsx";
import CookieBanner from "./components/CookieBanner/CookieBanner.jsx";
import Privacy from "./pages/Privacy/Privacy.jsx";
import Impressum from "./pages/Impressum/Impressum.jsx";

function App() {
  const queryClient = new QueryClient();
  const [modalOpened, setModalOpened] = useState(false);

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  const handleAddPropertyClick = () => {
    
    setModalOpened(true);
  
};
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <CookieBanner />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/parola" element={<AdminProperties />} /> {/* ✅ admin */}
                <Route path="/create" element={<AddPropertyModal opened={true} setOpened={handleAddPropertyClick} />} /> {/* ✅ admin */}
                <Route path="/privacy" element={<Privacy />} /> {/* ✅ admin */}
                <Route path="/impressum" element={<Impressum />} />



                
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
