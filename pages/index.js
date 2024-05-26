import Head from 'next/head'
import Navbar from '../components/Navbar'
import Preview from '../components/Preview'
import Scroll from '../components/Scroll'

export default function Home() {

  return (
    <div >
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/netflix_logo.ico" />
      </Head>

      <Navbar />
      <div className='w-screen'>
        <Preview />
      </div>
      <div className='mt-2'>
        <Scroll />
      </div>
    </div>
  )
}
