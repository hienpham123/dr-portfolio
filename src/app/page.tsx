import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Marketing from '@/components/Marketing'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Marketing />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ChatWidget />
    </main>
  )
}

