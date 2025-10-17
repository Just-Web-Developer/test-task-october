import {useTranslation} from 'react-i18next';
import {Button} from "~/components/Button";


export function Motto() {
    const {t} = useTranslation();
    return (
        <div className="flex flex-col mb-10 sm:mb-[56.5px] lg:mb-0 mt-auto mx-auto lg:mt-[50vh] transform lg:-translate-y-1/2 lg:ml-[50vw] lg:mr-0 gap-6 sm:gap-8 w-max h-max">
            <h1 className="uppercase text-primary font-firsneue font-semibold text-[65px] sm:text-[110px] lg:text-[80px] 2xl:text-[120px] leading-none tracking-[-1.95px] sm:tracking-[-3.3px] lg:tracking-[-2.4px] xl:tracking-[-3.6px]">{t('home.motto.motto.0')}<br/>{t('home.motto.motto.1')}</h1>
            <Button type="button" text={t('home.motto.buttonText')}/>
        </div>
    )
}