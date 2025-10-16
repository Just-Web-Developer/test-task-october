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
        {name: "description", content: t("home.description")},
    ];
}

export default function Home() {
    const {t} = useTranslation();
    return (
        <div className="pb-20">
            {/*<div className="fixed right-6 top-6 z-50">*/}
            {/*    <Button type="button" text={t('home.fillFormButton')}/>*/}
            {/*</div>*/}
            <HomeHeader/>
            <Services/>
            <FAQ/>
        </div>
    );
}
