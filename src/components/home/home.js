//react import
import React from "react";
//css files
import "./home.css";
import "./homeitem.css";

//svg files
import search from "./../../assets/svg/search.svg";
import torob_logo from "./../../assets/svg/torob_logo.svg";
// usestates
import { useState } from "react";

//components
import Baby from "../baby/baby";
import Login from "../login/login";
import Sport from "../sport/sport";
import Media from "../media/media";
import Mobile from "../mobile/mobile";
import Health from "../health/health";
import Others from "../others/others";
import Vihicle from "../vihicle/vihicle";
import Medical from "../medical/medical";
import Computer from "../computer/computer";
import Cultural from "../cultural/cultural";
import Clothing from "../clothiong/clothing";
import Appliance from "../appliance/appliance";
import Hypermarket from "../hypermarket/hypermarket";

function Home() {
  const [baby, setOpenBaby] = useState(false);
  const [media, setOpenMedia] = useState(false);
  const [sport, setOpenSport] = useState(false);
  const [login, setOpenLogin] = useState(false);
  const [health, setOpenHealth] = useState(false);
  const [mobile, setOpenMobile] = useState(false);
  const [others, setOpenOthers] = useState(false);
  const [medical, setOpenMedical] = useState(false);
  const [vihicle, setOpenVihicle] = useState(false);
  const [clothing, setOpenClothing] = useState(false);
  const [computer, setOpenComputer] = useState(false);
  const [cultural, setOpenCultural] = useState(false);
  const [appliance, setOpenAppliance] = useState(false);
  const [hypermarket, setOpenHypermarket] = useState(false);

  const header_json = [
    {
      title: "موبایل وتبلت",
      class: "mobile_div",
      modalFunc: Mobile,
      openModal: mobile,
      setOpenModal: setOpenMobile,
    },
    {
      title: "لب تاب ،کامپیوتر،اداری",
      class: "labtop_div",
      modalFunc: Computer,
      openModal: computer,
      setOpenModal: setOpenComputer,
    },

    {
      title: "هایپر مارکت",
      class: "hyper_div",
      modalFunc: Hypermarket,
      openModal: hypermarket,
      setOpenModal: setOpenHypermarket,
    },
    {
      title: "لوازم خانگی",
      class: "appliance_div",
      modalFunc: Appliance,
      openModal: appliance,
      setOpenModal: setOpenAppliance,
    },
    {
      title: "پوشاک،کیف و کفش",
      class: "clothing_div",
      modalFunc: Clothing,
      openModal: clothing,
      setOpenModal: setOpenClothing,
    },
    {
      title: "زیبایی و بهداشت",
      class: "health_div",
      modalFunc: Health,
      openModal: health,
      setOpenModal: setOpenHealth,
    },
    {
      title: "صوتی و تصویری",
      class: "media_div",
      modalFunc: Media,
      openModal: media,
      setOpenModal: setOpenMedia,
    },
    {
      title: "خودرو و سایر وسایل نقلیه",
      class: "vihicle_div",
      modalFunc: Vihicle,
      openModal: vihicle,
      setOpenModal: setOpenVihicle,
    },
    {
      title: "ورزش و سرگرمی",
      class: "sport_div",
      modalFunc: Sport,
      openModal: sport,
      setOpenModal: setOpenSport,
    },
    {
      title: "سلامت و پزشکی",
      class: "medical_div",
      modalFunc: Medical,
      openModal: medical,
      setOpenModal: setOpenMedical,
    },
    {
      title: "فرهنگی وهنری",
      class: "cultural_div",
      modalFunc: Cultural,
      openModal: cultural,
      setOpenModal: setOpenCultural,
    },
    {
      title: "کودک و نوزاد",
      class: "baby_div",
      modalFunc: Baby,
      openModal: baby,
      setOpenModal: setOpenBaby,
    },
    {
      title: "سایر دسته ها",
      class: "others_div",
      modalFunc: Others,
      openModal: others,
      setOpenModal: setOpenOthers,
    },
  ];
  return (
    <div className="relative  w-screen h-screen z-0">
      {/* ---------------------------modal login -------------------------------------------------- */}

      <div className="absolute z-50">
        {login && (
          <div className=" bg-black opacity-80 w-screen h-screen flex justify-center items-center ">
            <Login closeLogin={setOpenLogin} />
          </div>
        )}
      </div>
      {/* ---------------------------modal login -------------------------------------------------- */}
      <header className=" home_header bg-[#f9fafb] z-10">
        <div className="home_header_item_out">
          {header_json.map((item) => (
            <div onClick={() => item.setOpenModal((prevValue) => !prevValue)}>
              <a className={item.class}>
                <span>{item.title}</span>
              </a>
              {item.openModal && <item.modalFunc />}
            </div>
          ))}
        </div>

        <section className="home_header_sign flex flex-col  ">
          <button
            onClick={() => setOpenLogin((prevLogin) => !prevLogin)}
            className="home_btn"
          >
            ورود / ثبت نام
          </button>
        </section>
      </header>

      <main className=" home_main  w-full  relative  top-[300px] z-10">
        <div className="  flex flex-col items-center justify-center">
          <section className="flex justify-start flex-row-reverse mt-[15px] mb-[24px]">
            <div className="w-[85px] h-[85px] mt-[9px] ml-[12px] z-10 ">
              <a href="/">
                <img src={torob_logo} />
              </a>
            </div>

            <div>
              <h1 className="text-[#d73948] text-[40px] font-bold  text-right">
                ترب
              </h1>
              <span className="text-[ #808080] text-[14px] text-[#808080]">
                موتور جستجوی هوشمند خرید
              </span>
            </div>
          </section>
          <section className=" w-[478px] h-[46px] border-solid border-[1px] ">
            <form className="flex flex-row-reverse  bg-[#ffffff] rounded-[4px] border-[1px] border-solid border-[#1b1919]">
              <div className="w-[50px] h-[46px]  m-[1px] p-[13px]">
                <img src={search} className="h-[20px] w-[20px] " />
              </div>
              <input
                className="  text-[16px] w-[478px] h-[46px] py-[1px] px-[10px] text-right 
                
                  focus:outline-none focus:border-none  "
                placeholder="نام کالا را وارد کنید"
                name="query"
                autocomplete="off"
                value=""
              />
            </form>
          </section>
          <section className=" w-[478px] h-[56px] text-center my-[24px]">
            <button
              className="w-[120px] h-[40px] bg-[#d73948] rounded-[4px] text-white"
              href=""
            >
              تخفیف‌ها
            </button>
          </section>
        </div>
      </main>
      <footer className=" home_footer jsx-234733792 w-full h-[76px] fixed bottom-0 z-10 ">
        <div className="jsx-234733792 footer_row ">
          <a className="jsx-234733792  " href="">
            راهنمای خرید امن
          </a>
          <a className="jsx-234733792 " href="">
            پیگیری سفارش
          </a>
          <a className="jsx-234733792 " href="">
            تماس با ما
          </a>
          <a className="jsx-234733792 " href="">
            درباره ترب
          </a>
        </div>
        <div className="jsx-234733792  footer-row float-left">
          <a className="jsx-234733792 " href="">
            لیست فروشگاه‌ها
          </a>
          <a rel="" href="" target="_blank" className="jsx-234733792 ">
            ثبت‌نام‌ فروشگاه‌ها
          </a>
          <a rel="" href="" target="_blank" className="jsx-234733792 ">
            پنل فروشگاه‌ها
          </a>
          <a className="jsx-234733792 " href="">
            فرصت‌های شغلی
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
