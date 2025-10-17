export function Button(props: {type?: "button" | "submit" | "reset", text: string}) {
    return (
        <button
            type={props.type ?? "button"}
            className="px-4 py-3.5 font-firsneue text-[18px] font-bold uppercase leading-none text-black bg-primary-bg hover:bg-secondary-bg cursor-pointer"
        >{props.text}</button>
    )
}