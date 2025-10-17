import {Button} from "~/components/Button";
import {useTranslation} from 'react-i18next';


export function ServiceItem(props: { itemData: {
        id: string,
        icon: string,
        iconHover: string,
        bgColorHoverClass: string,
        textColorClass: string,
    }; }) {
    let {
        id,
        icon,
        iconHover,
        bgColorHoverClass,
        textColorClass,
    } = props.itemData
    const {t} = useTranslation();

    return (
        <div
            className={`tab flex flex-col justify-center items-center gap-6 group bg-transparent ${bgColorHoverClass} ${textColorClass} h-[60vh] w-[20%] hover:w-[45%] transition-all duration-500 not-last:border-r-1 border-white/20`}>
            <div className="content flex flex-col justify-center items-center w-[16.25rem]">
                <div className="structureImageContainer relative">
                    <img className="structure-item-image opacity-100 group-hover:opacity-0 transition-all duration-500 w-[125px] h-[125px]"
                         src={icon} alt=""/>
                    <img
                        className="structure-item-hover-image absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        src={iconHover} alt=""/>
                </div>
                <div
                    className="tabContent max-w-68 flex flex-col mt-6 gap-6 max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500">
                    <h3 className={`uppercase text-center font-firsneue font-semibold ${textColorClass}`}>
                        {t(`home.services.items.${id}.header`)}
                    </h3>
                </div>
            </div>

        </div>
    )
}