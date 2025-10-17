export function LangSelector(){
    let availableLangs = [
        {
            id: "ua",
            name: "УКР"
        },
        {
            id: "en",
            name: "ENG"
        },
    ]
    let activeLang = "ua"
    return (
        <div className="flex uppercase font-bold leading-none text-[12px] font-firsneue">
            {availableLangs.map((lang) => {
                return (
                    <a key={lang.id} href="" className={`${activeLang === lang.id ? "bg-primary text-secondary" : "text-primary bg-transparent hover:bg-secondary-bg"} lang-item px-1 py-1.5 w-12 text-center transition-all duration-200`}>{lang.name}</a>
                )
            })}

        </div>
    )
}