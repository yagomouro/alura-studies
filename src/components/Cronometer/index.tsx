import { useState, useEffect } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from './Cronometer.module.scss'

interface cronometerProps {
    selected: ITask | undefined,
    finishTask: () => void
}

export default function Cronometer({ selected, finishTask }: cronometerProps) {
    const [time, setTime] = useState<number>()

    useEffect(() => {
        if (selected?.time) {
            setTime(timeToSeconds(selected.time))
        }
    }, [selected])

    function countdown(count: number = 0) {
        setTimeout(() => {
            if (count > 0) {
                setTime(count - 1)
                return countdown(count - 1)
            } finishTask()
        }, 1000)
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => countdown(time)}>
                Começar!
            </Button>
        </div>
    )
}