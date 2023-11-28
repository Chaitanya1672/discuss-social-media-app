'use client'
import { search } from "@/actions";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";


export default function SearchInput(){
  const searchParams = useSearchParams()
  const term = searchParams.get('term')
  return (
    <form action={search}>
      <Input name="term" defaultValue={ term || ''}/>
    </form>
  )
}