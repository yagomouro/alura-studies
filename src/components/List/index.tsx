import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss"

interface listProps {
    tasks: ITask[],
    selectTask: (taskSelected: ITask) => void
}

export default function List({ tasks, selectTask }: listProps) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item) => (
                    <Item
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
} 