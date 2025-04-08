import { createElement } from 'react'

export default function ProductById({ params } :{params:{id:number}}) {
	return <div className='text-2xl text-center mt-5'>{params.id}</div>
}