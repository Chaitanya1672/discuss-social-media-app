'use client'

import { Button } from "@nextui-org/react"
import { useFormStatus } from "react-dom"

type ButtonType = "button" | "submit" | "reset";

interface FormButtonProps{
  children: React.ReactNode,
  type: ButtonType
}
export default function FormButton({children,type}: FormButtonProps){
  const {pending} = useFormStatus()
  return (
    <Button type={type} isLoading={pending}>
      {children}
    </Button>
  )
}