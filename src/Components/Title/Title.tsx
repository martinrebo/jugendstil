import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import './title.css'

interface Props {
    title: string,
    description: string,
    linkTo: string,
    linkContent: string
}

export default function Title({ title, description, linkTo, linkContent }: Props): ReactElement {
    let cursorOptions = {
        show: true,
        blink: true,
        element: '|',
        hideWhenDone: true,
        hideWhenDoneDelay: 0,
    }

    const [state, setState] = useState({ renderMsg: false })
    const onHeaderTyped = () => {
        setState({ renderMsg: true })
    }

    return (
        <div className="title">
            <Typist
                cursor={cursorOptions}
                onTypingDone={onHeaderTyped}
            >
                <h1>{title}</h1>
            </Typist>
            {state.renderMsg ? (<Typist avgTypingDelay={20} cursor={cursorOptions} >
                <h2> {description} </h2>
                <Link className="link" to={linkTo}> {linkContent}</Link>
            </Typist>) : null}

        </div >
    )
}
