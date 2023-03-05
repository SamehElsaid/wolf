import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Popup from "../../Components/Popup/Popup";
export default function CheckOut() {
  const allCode = useSelector((ele) => ele.auth.code);
  const [code, setCode] = useState("");
  const [product, setProduct] = useState(false);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [ret, setRet] = useState(0);
  const [openPopUp,setOpenPopUp]=useState(false)
  const addProduct = (e) => {
    e.preventDefault();
    const myItems = allCode.filter((ele) => ele.name.trim().includes(code.trim()));
    if (code.trim().length === 0) {
      toast.error("يجد ادخال الكود", { theme: "dark" });
    } else {
      if (myItems.length > 0) {
        setProduct(myItems);
        setOpenPopUp(true)
      } else {
        toast.error("الكود غير موجود", { theme: "dark" });
      }
    }
  };
  useEffect(()=>{
    if(products.length >0){
        let totalAll = 0
        products.forEach(ele=>{
            totalAll+= ele.price * ele.num
        })
        setTotal(totalAll);
    }else{
      setTotal(0)
    }
  },[products.length ,ret])
  const plusPro = (e) => {
    console.log(e);
    const newS = products
    const proNew = newS.find((ele) => ele.id === e);
    console.log(proNew);
    proNew.num += 1;
    setProducts([...newS])
    setRet(ret+1)
  };
  const minPro = (e) => {
    console.log(e);
    const newS = products
    const proNew = newS.find((ele) => ele.id === e);
    console.log(proNew);
    if(proNew.num <= 1){
    }else{
        proNew.num -= 1;
        setProducts([...newS])
        setRet(ret+1)
    }
  };
  const deletPro = (e)=>{
    const proNew = products.filter((ele) => ele.id !== e);
    setProducts(proNew)
        setRet(ret+1)
  }
  return (
    <div className="App || backgroundVG  || min-h-screen || text-white">
      <Popup
        setCode={setCode}
        products={products}
        setProducts={setProducts}
        product={product}
        setProduct={setProduct}
        openPopUp={openPopUp}
        setOpenPopUp={setOpenPopUp}
      />
      <div className="flex || justify-center || items-center || min-h-screen">
        <div className="container || px-5 || min-h-screen">
          <div className="w-[100px] || bgWolf  mx-auto">
            <img src="./wolf.png" alt="" className="w-full" />
          </div>
          <form
            onSubmit={addProduct}
            className="rtl || px-3 || w-full || py-2  || inputStyle || rounded-none || flex || items-center"
          >
            <input
              type="text"
              placeholder="أسم المنتج"
              className="bg-transparent || outline-none || w-full"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button
              type="submit"
              className="rotate-180 || text-2xl || flex || hover:text-red-600 || transition-colors || duration-300"
            >
              <AiOutlineSend />
            </button>
          </form>
          <div className="w-[100%] || flex || flex-col || mt-10 || select-none">
            <h2 className="py-4 sdas  md:text-xl select-none  font-semibold text-center flex items-center justify-center gap-3">
              الطلبات
            </h2>
            <div className="hidden md:flex flex-row-reverse text-right border-b justify-between border-white/30 pr-3.5 py-3">
              <h2 className="w-[200px] border-l  border-white/30">الصنف</h2>
              <h2 className="w-[100px] border-l pr-3 border-white/30">السعر</h2>
              <h2 className="w-[100px] border-l pr-3 border-white/30">كميه</h2>
              <h2 className="w-[100px] border-l pr-3 border-white/30">
                اجمالي
              </h2>
              <h2 className="w-[60px] border-l pr-3 border-white/30">أضافه</h2>
              <h2 className="w-[60px] border-l pr-3 border-white/30">نقص</h2>
              <h2 className="w-[50px] pr-3">حذف</h2>
            </div>
            <div className=" overflow-auto pr-1 md:pr-0 || flex || flex-col || || gap-3 my-3 md:my-0 scrollStyle h-[calc(100vh-80px-2.5rem-100px-200px)] md:h-[calc(100vh-60px-40px-2.5rem-49px-100px-200px)] ">
              {products.length !== 0 ? (
                products.map((pro) => (
                  <div
                    key={pro.id}
                    className="block md:flex || inputStyle || relative  flex-row-reverse text-right md:border-b md:justify-between border-white/30 py-3 md:pr-[13px]"
                  >
                    <div onClick={()=>{deletPro(pro.id)}} className="iconPop md:hidden || absolute">
                      <IoMdClose />
                    </div>
                    <h2 className="w-full md:w-[200px] md:pr-2 border-b md:border-b-0 mb-3 md:mb-0 pb-3 md:pb-0 md:border-l  border-white/30 || flex md:block || items-center || justify-center || gap-2">
                      <span>{pro.name} </span>
                      <span className="flex md:hidden || font-bold ">
                        :الصنف
                      </span>
                    </h2>
                    <h2 className="w-full md:w-[100px] md:pr-3 border-b md:border-b-0 pb-3 mb-3 md:mb-0 md:pb-0 md:border-l  border-white/30 || flex md:block || items-center || justify-center || gap-2">
                      <span className="flex  || flex-row-reverse || gap-1">
                        <span>{pro.price}</span>
                        <span>جنيه</span>
                      </span>
                      <span className="flex md:hidden || font-bold ">
                        :سعر القطعه
                      </span>
                    </h2>
                    <h2 className="hidden  md:w-[100px] md:pr-3 border-b md:border-b-0 pb-3 mb-3 md:mb-0 md:pb-0 md:border-l  border-white/30 || md:flex  || items-center || justify-center || gap-2">
                      <span className="flex  || flex-row-reverse || gap-1">
                        <span> {pro.num}</span>
                      </span>
                      <span className="flex md:hidden || font-bold ">
                        :كميه
                      </span>
                    </h2>
                    <h2 className=" md:hidden md:w-[100px]  border-b md:border-b-0 pb-3 mb-3 md:mb-0 md:pb-0 md:pr-3 md:border-l  border-white/30 || flex || items-center || justify-center || gap-2">
                      <span className="flex  || flex-row-reverse || gap-1">
                        <span
                          onClick={() => {
                            plusPro(pro.id);
                          }}
                          className="text-[18px]  || cursor-pointer || select-none || hover:text-red-500 || transition-colors || duration-300"
                        >
                          {" "}
                          +
                        </span>
                        <span className="w-[100px] || text-center">
                          {pro.num}
                        </span>
                        <span onClick={()=>{minPro(pro.id)}} className={`${pro.num >1 ?`visableControl` : `unvisableControl`} text-[18px] || cursor-pointer || select-none || hover:text-red-500 || transition-colors || duration-300`}>
                          {" "}
                          -
                        </span>
                      </span>
                    </h2>
                    <h2 className="w-full md:w-[100px] md:pr-3 md:border-l  border-white/30 || flex md:block || items-center || justify-center || gap-2">
                      <span className="flex  || flex-row-reverse || gap-1">
                        <span>{pro.num * pro.price}</span>
                        <span>جنيه</span>
                      </span>
                      <span className="flex md:hidden || font-bold ">
                        :أجمالي القطع
                      </span>
                    </h2>
                    <h2 className="hidden md:block w-[60px] text-center border-l cursor-pointer  border-white/30">
                      +
                    </h2>
                    <h2
                      className={`  hidden md:block w-[60px]   text-center border-l cursor-pointer  border-white/30`}
                    >
                      -
                    </h2>
                    <h2 className="hidden md:block w-[50px] cursor-pointer text-center">
                      x
                    </h2>
                  </div>
                ))
              ) : (
                <h2 className="inputStyle || py-12 || font-bold || mt-5">
                  لا يوجد طلبات
                </h2>
              )}
            </div>
            <h2 className="flex md:text-2xl mt-auto mb-5  text-right border-y justify-between border-white/30 py-3">
              {" "}
              <span className=" font-bold flex items-center flex-row gap-2">
                <span>جنية</span> <span>{total}</span>
              </span>
              <span className="font-bold ">صافي الفاتوره</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
