import { InputHTMLAttributes } from 'react'
import './Input.module.css'

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props}></input>
}