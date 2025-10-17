import type {Route} from "./+types/home";
import {useTranslation} from 'react-i18next';
import {Button} from "~/components/Button";

import {HomeHeader} from "~/homeSections/header";
import {Services} from "~/homeSections/services";
import {FAQ} from "~/homeSections/faq";

export function meta({}: Route.MetaArgs) {
    const {t} = useTranslation();
    return [
        {title: t("home.title")},
        {name: "description", content: t("home.meta.description")},
    ];
}

export default function Home() {
    return (
        <div>
            <HomeHeader/>
            <Services/>
            <FAQ/>
        </div>
    );
}
