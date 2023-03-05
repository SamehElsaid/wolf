import React from "react";
import { toast } from "react-toastify";

export default function Popup({
  product,
  setProduct,
  products,
  setProducts,
  setCode,
  openPopUp,
  setOpenPopUp,
}) {
  const selectProd = (e) => {
      const myProduct = product.find(ele=> ele.id === e.id)
      console.log(products);
      const pro = products.find(ele=> ele.id === e.id)
      if(pro){
          toast.error(`هذا المنتج موجود بالفعل`, { theme: "dark" });
      }else{
          setProducts([...products,{id:myProduct.id,name:myProduct.name,num:1,price:myProduct.price}])
          toast.success(`تم اضافه ${myProduct.name}`, { theme: "dark" });
      }
  };
  return (
    <div
      className={`${
        openPopUp ? `visableControl` : `unvisableControl`
      } fixed inset-0 bg-black/60 || flex items-center justify-center z-20`}
    >
      <div className="w-[80%]">
        
        <div className="inputStyle p-2">
        <div className="h-[calc(100vh-200px)] || scrollStyle || overflow-auto || flex || flex-col || gap-3 || py-2 || px-3">
          {product && product.length !== 0 ? (
            product.map((pro) => (
              <div
                key={pro.id}
                className="block md:flex || inputStyle || relative  flex-row-reverse text-right md:border-b md:justify-between border-white/30 py-3 md:pr-[13px]"
              >
                <h2 className="w-full md:w-[200px] md:pr-2 border-b md:border-b-0 mb-3 md:mb-0 pb-3 md:pb-0 md:border-l  border-white/30 || flex md:block || items-center || justify-center || gap-2">
                  <span>{pro.name} </span>
                  <span className="flex md:hidden || font-bold ">:الصنف</span>
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
                <div className="|| mx-auto || text-center">
                  <button
                    onClick={() => {
                        selectProd(pro)
                    }}
                    className=" px-10  || font-bold || py-2 || inputStyle || hover:bg-[#ffffff4d] || duration-300 || transition-colors"
                  >
                    أختيار
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h2 className="inputStyle || py-12 || font-bold || mt-5">
              لا يوجد طلبات
            </h2>
          )}
        </div>
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              setCode("")
              setOpenPopUp(false);
            }}
            className=" px-10 || font-bold || py-2 || inputStyle "
          >
            رجوع
          </button>
        </div>
      </div>
    </div>
  );
}
