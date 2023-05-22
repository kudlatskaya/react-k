import React, {useEffect, useState} from 'react';

const ResetEffect = () => {
    const [text, setText] = useState('')

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            setText(state => state + e.key)
        }
        window.document.addEventListener('keypress', handler)

        return () => window.document.removeEventListener('keypress', handler)
    }, [])

    return (
        <div>
            Text: {text}
        </div>
    );
};

export default ResetEffect;