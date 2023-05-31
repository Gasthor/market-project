import Image from 'next/image'
import { Inter } from 'next/font/google'
import { PrincipalLayout } from '@/components/layout/PrincipalLayout'
import { Button } from '@/components/UI/Button'
import { Select } from '@/components/UI/Select'
import { ItemProduct } from '@/components/UI/ItemProduct'



export default function Home() {
  return (

    <PrincipalLayout title='Market Project' pageDescription='' imgURL=''>

      <form className='w-full mb-2'>
        <h2 className='text-xl font-semibold text-center my-2'>¿Que buscas?</h2>
        <input className='p-1 rounded-lg w-full bg-gray-50 border my-2 border-gray-400 placeholder:text-sm dark:bg-gray-800 dark:border-gray-600' placeholder='Estoy buscando...' />
        <div className='flex justify-between'>
          <Select predetermined="Todo Chile" options={["hola", "chao"]} />
          <Select predetermined="Todas las categorias" options={["hola", "chao"]} />
        </div>
        <Button text='Buscar' customize='w-full' />
      </form>
      <h2 className='text-xl font-semibold text-center my-2'>Publicaciones recientes</h2>
      <div className='flex flex-row overflow-x-scroll w-full snap-x'>
        <ItemProduct title='Test producto' description='Prueba de item de un produnto' city='Coquimbo' category='Test' />
        <ItemProduct title='Test producto' description='Prueba de item de un produnto' city='Coquimbo' category='Test' />
      </div>
    </PrincipalLayout>

  )
}
