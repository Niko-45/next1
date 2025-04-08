export default function ProductById({ params } : { params: { id: string } }) {
	return <div className='text-2xl text-center mt-5'>{params.id}</div>
}
