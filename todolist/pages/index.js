import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div className='flex flex-col h-screen justify-between'>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  )
}
