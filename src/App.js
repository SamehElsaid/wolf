import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { db } from "./FireBase/firebase";
import CheckOut from "./Pages/CheckOut/CheckOut";
import { CODE } from "./Redux/authSlice/authSlice";
import "react-toastify/dist/ReactToastify.css";
import { SlNotebook, SlWallet } from "react-icons/sl";
import { AiOutlineSetting } from "react-icons/ai";
function App() {
  const dispatch = useDispatch();
  const code = () => {
    let sub = onSnapshot(query(collection(db, "code")), (snapshot) => {
      let fetch = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      dispatch(CODE(fetch));
    });
    return sub;
  };
  useEffect(() => {
    code();
  }, []);
  return (
    <div className="relative">
      <ToastContainer />
      <CheckOut />
      <div className="absolute || select-none || right-0 || left-0 || text-xl || bottom-0 | flex || justify-center || py-2 || px-3 || menuStyle || text-white">
        <div className="w-[calc(100%/3)] || cursor-pointer || text-center || flex || flex-col || items-center || justify-center">
          <AiOutlineSetting />
          <span className="text-sm || font-semibold">الاعدادات</span>
        </div>
        <div className="w-[calc(100%/3)] || cursor-pointer || text-center || flex || flex-col || items-center || justify-center">
          <SlWallet />
          <span className="text-sm || font-semibold">النقدية</span>
        </div>
        <div className="w-[calc(100%/3)] || cursor-pointer || text-center || flex || flex-col || items-center || justify-center">
          <SlNotebook />
          <span className="text-sm || font-semibold">الديون</span>
        </div>
      </div>
    </div>
  );
}

export default App;
