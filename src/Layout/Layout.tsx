import React, { ReactElement, ReactNode } from 'react'
import './layout.css'

interface Props {
    children: ReactNode
}

export default function Layout({children}: Props): ReactElement {
    return (
        <div className="App">
            {children}
        </div>
    )
}



