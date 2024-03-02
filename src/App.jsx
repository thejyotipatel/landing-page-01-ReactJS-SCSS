import {
  EmailSignupContainer,
  Footer,
  Header,
  HostingItemsList,
  Navbar,
  RelatedDealItemsList,
} from './components'

function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Header />
        <HostingItemsList />
        <RelatedDealItemsList />
        <EmailSignupContainer />
      </main>
      <Footer />
    </>
  )
}

export default App
