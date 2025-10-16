import {SectionHeader} from "~/components/SectionHeader";
import {useTranslation} from 'react-i18next';


export function FAQ(){
    const {t} = useTranslation();

    return (
        <section>
            <SectionHeader text={t("home.faq.sectionName")}/>
            <div className="grid grid-cols-3 border-white/20 border-t-1 border-b-1 mb-10 ">

            </div>
        </section>
    )
}