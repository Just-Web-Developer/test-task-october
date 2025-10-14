import { useTranslation } from 'react-i18next';
import Logo from "~/components/Logo";


export function HomeHeader() {
    const { t } = useTranslation();

    return (
        <section className="h-screen overflow-hidden home-screen">
            <nav className="sticky flex items-center px-6 py-[1.125rem] ">
                <div className="logo">
                    <Logo/>
                </div>
            </nav>
        </section>
    )
}