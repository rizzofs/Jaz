import Hero from './components/Hero'
import Members from './components/Members'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App w-full min-h-screen relative bg-bts-dark text-white overflow-hidden">
       <Hero />
       <Members />
       <Footer />
    </div>
  )
}

export default App
