import {ServiceItem} from "~/homeSections/services/serviceItem";
import {SectionHeader} from "~/components/SectionHeader";

import {useTranslation} from 'react-i18next';


import airplaneIcon from "~/assets/images/AirplaneTilt-stroke.svg"
import airplaneIconHover from "~/assets/images/AirplaneTilt-fill.svg"

import personIcon from "~/assets/images/PersonSimpleRun-stroke.svg"
import personIconHover from "~/assets/images/PersonSimpleRun-fill.svg"

import bicycleIcon from "~/assets/images/Bicycle-stroke.svg"
import bicycleIconHover from "~/assets/images/Bicycle-fill.svg"

import carIcon from "~/assets/images/CarProfile-stroke.svg"
import carIconHover from "~/assets/images/CarProfile-fill.svg"

import sailboatIcon from "~/assets/images/Sailboat-stroke.svg"
import sailboatIconHover from "~/assets/images/Sailboat-fill.svg"

import {useState} from "react";


export function Services() {
    const {t} = useTranslation();
    const [activeCard, setActiveCard] = useState(0);

    function cardTapHandler(index: number){
        setActiveCard(index);
    }

    let serviceItems = [
        {
            id: "airplane",
            icon: airplaneIcon,
            iconHover: airplaneIconHover,
            bgColorHoverClass: "hover:bg-[#5194AD]",
            bgColorClass: "bg-[#5194AD]",
            textColorClass: "text-[#ffffff]",
        },
        {
            id: "person",
            icon: personIcon,
            iconHover: personIconHover,
            bgColorHoverClass: "hover:bg-[#8E1F1F]",
            bgColorClass: "bg-[#8E1F1F]",
            textColorClass: "text-[#ffffff]",
        },
        {
            id: "bicycle",
            icon: bicycleIcon,
            iconHover: bicycleIconHover,
            bgColorHoverClass: "hover:bg-[#511F8E]",
            bgColorClass: "bg-[#511F8E]",
            textColorClass: "text-[#ffffff]",
        },
        {
            id: "car",
            icon: carIcon,
            iconHover: carIconHover,
            bgColorHoverClass: "hover:bg-[#C28412]",
            bgColorClass: "bg-[#C28412]",
            textColorClass: "text-[#ffffff]",
        },
        {
            id: "sailboat",
            icon: sailboatIcon,
            iconHover: sailboatIconHover,
            bgColorHoverClass: "hover:bg-[#3A8067]",
            bgColorClass: "bg-[#3A8067]",
            textColorClass: "text-[#ffffff]",
        }
    ]
    return (
        <section>
            <SectionHeader text={t("home.services.sectionName")}/>
            <div className="services-desktop border-white/20 border-t-1 border-b-1  hidden md:flex">
                {
                    serviceItems.map((item, i) => {
                        return (
                            <ServiceItem key={item.id} itemData={item}/>
                        )
                    })
                }
            </div>
            <div className="services-mobile flex flex-col md:hidden border-white/20 border-t-1 border-b-1">
                <div className="all-services flex w-full">
                    {serviceItems.map((item, i) => {
                        return (
                            <div onClick={() => cardTapHandler(i)} className={`flex justify-center items-center transition-all duration-300 w-full p-4 not-last:border-r-1 border-white/20 ${activeCard === i ? item.bgColorClass : 'bg-transparent'}`}>
                                <img src={activeCard === i ? item.iconHover : item.icon} className="w-12 h-12" alt=""/>
                            </div>
                        )
                    })}
                </div>
                <div className={`transition-all duration-300 active-service flex flex-col gap-6 justify-center items-center px-[55px] py-[87.5px] ${serviceItems[activeCard].bgColorClass}`}>
                    <img className="w-40 h-40" src={serviceItems[activeCard].iconHover} alt=""/>
                    <p className="h-8 text-primary font-semibold uppercase text-base leading-none tracking-[-0.36px] text-center">{t(`home.services.items.${serviceItems[activeCard].id}.header`)}</p>
                </div>
            </div>
        </section>

    )
}