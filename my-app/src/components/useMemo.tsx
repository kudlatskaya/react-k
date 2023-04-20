import {useState} from 'react'

const MemoComponent = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let initialNumber = 1

    const factorial = (number: number) => {
        for(let i = 1; i <= number; i++) {
            initialNumber *= i
        }

        return number
    }


    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
    <hr/>
        <div>
            Result for a!: {factorial(a)}
        </div>
        <div>
            Result for b!: {factorial(b)}
        </div>
    </>
}

export default MemoComponent