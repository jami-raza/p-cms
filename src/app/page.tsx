import Image from 'next/image'
import { Form } from './components/form'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href={'/portfolio'}>
      Portfolio
      </Link>
      <Form/>
    </main>
  )
}
