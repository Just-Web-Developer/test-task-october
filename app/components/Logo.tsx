import { useTranslation } from 'react-i18next';


export default function Logo(){
        const { t } = useTranslation();
    return (
        <p className="uppercase bg-primary-bg p-2 text-primary font-backwards leading-none text-3xl">{t('title')}</p>
    )
}