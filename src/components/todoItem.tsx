import { prisma } from "@/db";

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    togleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({ id, title, complete, togleTodo}: TodoItemProps) {
    return (
        <li className=" flex gap-1 items-center " >
            <input id={id} type="checkbox" className="cursor-pointer peer" defaultChecked={complete} onChange={e => togleTodo(id, e.target.checked)}/>
            <label htmlFor="{id}" className="peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        </li>
    )
}