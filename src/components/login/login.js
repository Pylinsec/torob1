//react import
import React from "react";
//svg files
import close from "./../../assets/svg/close.svg";

//function
export default function Login({ closeLogin }) {
  const handelModalFalse = () => {
    closeLogin(false);
  };
  return (
    <main
      tabIndex={0}
      onBlur={handelModalFalse}
      className="bg-[#FFF] absolute top-[80px]  flex  z-50 opacity-100"
    >
      <div className="w-[400px] h-[300px] bg-[#FFFFFF] ">
        <span className="">
          <img
            onClick={() => closeLogin(false)}
            className=" cursor-pointer mt-[5px]"
            src={close}
            alt="closeicon"
          />
        </span>
        <section className=" text-center">
          <hr className="my-[10px]" />
          <div className="text-center text-[14px] relative top-[-25px] ">
            ورود یا ثبت نام
          </div>
        </section>
        <section className="h-[219px] py-[15px] px-[30px]">
          <div className="pb-[5px] mr-[35px] text-right text-[#333] text-[14px]">
            شماره موبایل{" "}
          </div>
          <div className="text-center">
            <input className="w-[300px] h-[34px] bg-[#FFFFFF] text-[14px] font-bold px-[12px] py-[6px] rounded-[4px] border-[1px] border-solid border-[#cccc]"></input>
            <div className="h-[28px]">
              <p className=" text-[13px] text-right text-[#BF1F25] hidden">
                باید ۱۱ رقم باشد و با 09 شروع شود.
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              className="w-[225px] h-[33px]  text-white bg-[#d73948] rounded-[4px]  px-[12px] py-[6px]"
              type="submit"
            >
              دریافت کد تایید
            </button>
          </div>
          <footer className="text-center text-[11px] pt-[20px]">
            <p>ثبت نام در ترب به معنی مواقثت با شرایط استفاده از ترب است</p>
            <p>قبلاً در ترب حساب کاربری داشتم.</p>
          </footer>
        </section>
      </div>
    </main>
  );
}
