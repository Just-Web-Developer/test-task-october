import {SectionHeader} from "~/components/SectionHeader";
import {useTranslation} from 'react-i18next';
import {FAQItem} from "~/homeSections/faq/faqItem";


export function FAQ(){
    const {t} = useTranslation();
    let faqItems = [...t('home.faq.questions', {returnObjects: true})]
    let lastIndexWithBottom = (faqItems.length - ((faqItems.length % 3) || 3))
    faqItems = faqItems.map((faqItem, i) => {
        faqItem.borderStyles = []
        if (i !== faqItems.length - 1) faqItem.borderStyles.push('border-b-1')
        if ((i + 1) % 3 !== 0) faqItem.borderStyles.push('border-r-1')
        if (i >= lastIndexWithBottom) faqItem.borderStyles.push('md:border-b-0')



        faqItem.borderStyles = faqItem.borderStyles.join(' ')
        return faqItem
    })
    return (
        <section>
            <SectionHeader text={t("home.faq.sectionName")}/>
            <div className="grid grid-cols-1 md:grid-cols-3 border-white/20 border-t-1 border-b-1 mb-10 ">
                {faqItems.map((faqItem, i) => {
                    return (
                        <FAQItem key={i} question={faqItem.question} answer={faqItem.answer} borderStyles={faqItem.borderStyles}/>
                    )
                })}
            </div>
        </section>
    )
}