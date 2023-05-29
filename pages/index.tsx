import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PrincipalLayout } from '@/components/layout/PrincipalLayout'
import { Button } from '@/components/UI/Button'
import { Select } from '@/components/UI/Select'



export default function Home() {
  return (

    <PrincipalLayout title='Market Project' pageDescription='' imgURL=''>

      <form className='w-full'>
        <h2 className='text-xl font-semibold text-center my-2'>¿Que buscas?</h2>
        <input className='p-1 rounded-lg w-full bg-gray-50 border my-2 border-gray-400 placeholder:text-sm dark:bg-gray-800 dark:border-gray-600' placeholder='Estoy buscando...' />
        <div className='flex justify-between'>
          <Select predetermined="Todo Chile" options={["hola", "chao"]} />
          <Select predetermined="Todas las categorias" options={["hola", "chao"]} />
        </div>
        <Button text='Buscar' customize='w-full' />
      </form>

    </PrincipalLayout>

  )
}
