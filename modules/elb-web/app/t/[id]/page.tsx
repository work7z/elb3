import React from 'react'
import { PageProps } from '../../types/pages'


export default function Page(props:PageProps<{id:number},{}>) {
    return <h1>this is a topic page,{props.params.id}</h1>
}