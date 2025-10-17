import { useTranslation } from 'react-i18next';
import {TopBar} from "/app/components/TopBar";
import {Navbar} from "/app/components/Navbar";
import {Motto} from "/app/homeSections/header/Motto";


export function HomeHeader() {
    const { t } = useTranslation();

    return (
        <section className="h-screen overflow-hidden home-screen flex">
            <TopBar/>
            <Navbar/>
            <Motto/>
        </section>
    )
}