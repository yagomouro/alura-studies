import { ITask } from '../../../types/task'
import style from './Item.module.scss'

interface itemProps extends ITask {
    selectTask: (taskSelected: ITask) => void,
}

export default function Item(
    {
        task,
        time,
        selected,
        concluded,
        id,
        selectTask
    }: itemProps) {
    return (
        <li className={`${style.item} ${selected ? style.itemSelecionado : ""} ${concluded ? style.itemCompletado : ""}`} 
        onClick={() => !concluded && selectTask(
            {
                task,
                time,
                selected,
                concluded,
                id
            })}>
            <h3>{task}</h3>
            <span>{time}</span>
            {concluded && <span className={style.concluido} aria-label="Tarefa completada"></span>}
        </li>

    )
}
