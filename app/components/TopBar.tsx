import Logo from "/app/components/Logo";
import {LangSelector} from "/app/components/LangSelector";
import {SocialButtons} from "~/components/SocialButtons";
import {useTranslation} from 'react-i18next';


export function TopBar() {
    const {t} = useTranslation();
    return (
        <div className="absolute top-0 grid grid-cols-2 items-center w-full px-6 py-[1.125rem] ">
            <div className="left-part flex ">
                <Logo/>
                <p className="description hidden lg:flex ml-[71.25px] 2xl:ml-[191.4px] font-semibold text-[14px] leading-[20px] w-52 text-primary -mt-1">{t('home.header.description')}</p>
            </div>
            <div className="right-part flex justify-end">
                <div className="desktop-content hidden lg:flex justify-between w-full">
                    <SocialButtons/>
                    <LangSelector/>
                </div>
                <div className="nav-button block lg:hidden bg-secondary-bg p-1 w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <rect y="2" width="32" height="4" fill="white"/>
                        <rect x="8" y="14" width="16" height="4" fill="white"/>
                        <rect y="26" width="32" height="4" fill="white"/>
                    </svg>
                </div>
            </div>

        </div>
    )
}