interface ProductPageProps {
	params: Promise<{
	  id: string
	}>
 }
 
 export default async function ProductById({ params }: ProductPageProps) {
	const { id } = await params
	return <div className="text-2xl text-center mt-5">{id}</div>
 }
 