import { useState } from "react";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from './Form.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface formProps {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>

}

function Form({ setTasks }: formProps) {
    const [task, setTask] = useState("")
    const [time, setTime] = useState("00:00")

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    task,
                    time,
                    selected: false,
                    concluded: false,
                    id: uuidv4()
                }
            ])
        setTask("")
        setTime("00:00")
    }

    return (
        <form className={style.novaTarefa} onSubmit={addTask} >
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="txt"
                    name="tarefa"
                    id="tarefa"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="O que você quer estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    min="00:00:00"
                    required
                />
            </div>
            <Button type="submit">
                Adicionar
            </Button>
        </form>
    )
}

export default Form 