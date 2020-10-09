import React, { ReactElement, ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export default function Main({children}: Props): ReactElement {
    return (
        <div className="content">
            {children}
        </div>
    )
}
