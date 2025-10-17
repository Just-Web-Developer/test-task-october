import {useTranslation} from 'react-i18next';


export function Navbar() {
    const {t} = useTranslation();
    let navItems = [...t('navbar', {returnObjects: true})];

    return (
        <nav className="hidden lg:flex flex-col absolute top-1/2 left-6 transform -translate-y-1/2 z-10 text-primary">
            {navItems.map((item) => {
                return (
                    <a key={item.link} className="transition-all duration-500 p-2 hover:bg-secondary-bg" href={item.link}>{item.text}</a>
                )
            })}
        </nav>
    )
}