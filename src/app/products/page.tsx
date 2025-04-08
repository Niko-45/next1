"use client" // Fixed the directive (added space)
import Image from "next/image"
import Link from "next/link"

interface ProductComponentProps {
  src: string
  text: string
  link: string
}

function ProductComponent({ src, text, link }: ProductComponentProps) {
  return (
    <div className="w-[30%] flex bg-yellow-50 flex-col items-center p-5 h-[150px] border-[1px] border-amber-300 text-green-700 space-y-2 rounded-[5px]">
      <Image src={src || "/placeholder.svg?height=80&width=80"} alt="" width={80} height={80} />
      <p>
        <Link href={link}>{text}</Link>
      </p>
    </div>
  )
}

export default function Products() {
  return (
    <>
      <div className="flex space-y-5 mt-[20px] justify-between flex-wrap w-[90%] m-auto">
        <ProductComponent src={""} text={"Product 1"} link="products/1" />
        <ProductComponent src={""} text={"Product 2"} link="products/2" />
        <ProductComponent src={""} text={"Product 3"} link="products/3" />
        <ProductComponent src={""} text={"Product 4"} link="products/4" />
        <ProductComponent src={""} text={"Product 5"} link="products/5" />
        <ProductComponent src={""} text={"Product 6"} link="products/6" />
      </div>
    </>
  )
}
