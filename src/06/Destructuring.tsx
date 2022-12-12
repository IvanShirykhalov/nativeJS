import React from 'react';

type DestructuringType = {
    title: string
    man: ManType

}

export type ManType = {
    name: string
    age: 29
    lessons: {
        title: string
    }[]
    address: {
        street: {
            title: string
        }
    }
}
export const Destructuring: React.FC<DestructuringType> = ({title, man}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>{man.address.street.title}</div>
        </div>
    )
}
