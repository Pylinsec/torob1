import React from "react";
import { useState } from "react";
export default JsonHeader(){
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
    return <></>
}