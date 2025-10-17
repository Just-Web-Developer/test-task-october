export function SectionHeader (props: {
    text: string,
}){
    return (
        <div className="px-6 lg:px-10 py-[1.875rem]">
            <h2 className="font-tactic font-bold text-primary text-[1.75rem] leading-none">{props.text}</h2>
        </div>
    )
}