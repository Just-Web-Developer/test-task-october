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


export function Services(){
        const {t} = useTranslation();

    let strctureItems = [
        {
            id: "airplane",
            icon: airplaneIcon,
            iconHover: airplaneIconHover,
            bgColorClass: "hover:bg-[#5194AD]",
            textColorClass: "text-[#ffffff]",
        },
        {
            id: "person",
            icon: personIcon,
            iconHover: personIconHover,
            bgColorClass: "hover:bg-[#8E1F1F]",
            textColorClass: "text-[#ffffff]",
        },
        {
            id: "bicycle",
            icon: bicycleIcon,
            iconHover: bicycleIconHover,
            bgColorClass: "hover:bg-[#511F8E]",
            textColorClass: "text-[#ffffff]",
        },
        {
            id: "car",
            icon: carIcon,
            iconHover: carIconHover,
            bgColorClass: "hover:bg-[#C28412]",
            textColorClass: "text-[#ffffff]",
        },
        {
            id: "sailboat",
            icon: sailboatIcon,
            iconHover: sailboatIconHover,
            bgColorClass: "hover:bg-[#3A8067]",
            textColorClass: "text-[#ffffff]",
        }
    ]
    return (
        <section>
            <SectionHeader text={t("home.services.sectionName")}/>
            <div className="flex border-white/20 border-t-1 border-b-1 ">
                {
                    strctureItems.map((item, i) => {
                        return(
                            <ServiceItem key={item.id} itemData={item} />
                        )
                    })
                }
            </div>
        </section>

    )
}