import { useTranslation } from 'react-i18next';
import LogoImage from "/app/assets/images/Logo.svg"


export default function Logo(){
    const { t } = useTranslation();
    return (
        <img src={LogoImage} className="h-[48px] lg:h-[41px]" alt=""/>
    )
}