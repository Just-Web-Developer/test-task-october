import { useTranslation } from 'react-i18next';


export default function Logo(){
    const { t } = useTranslation();
    return (
        <img src="/app/assets/images/Logo.svg" className="w-[6.5625rem]" alt=""/>
    )
}