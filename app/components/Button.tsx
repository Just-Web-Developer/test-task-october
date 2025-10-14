export function Button(props: {type?: "button" | "submit" | "reset", text: string}) {
    return (
        <button
            type={props.type ?? "button"}
            className="px-4 py-3.5 font-tactic font-bold uppercase leading-none text-black bg-secondary hover:bg-primary cursor-pointer"
        >{props.text}</button>
    )
}