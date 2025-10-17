import { useTranslation } from 'react-i18next';


export default function Logo(){
    const { t } = useTranslation();
    return (
        <img src="/app/assets/images/Logo.svg" className="h-[48px] lg:h-[41px]" alt=""/>
    )
}