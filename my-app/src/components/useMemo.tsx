import {useMemo, useState} from 'react'

const MemoComponent = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let result = 1

        for(let i = 1; i <= a; i++) {
            let fake = 0
            while(fake < 100000000) {
                fake++
                let fakeVal = Math.random()
            }
            result *= i
        }

        return result
    }, [a])

    for(let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>

        <div> Result for a!: {resultA} </div>
        <div> Result for b!: {resultB} </div>
    </>
}

export default MemoComponent