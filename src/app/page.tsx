import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Marketing from '@/components/Marketing'
import Experience from '@/components/Experience'
import Blog from '@/components/Blog'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ChatWidget from '@/components/ChatWidget'
import SEO from '@/components/SEO'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function Home() {
  return (
    <ErrorBoundary>
      <SEO />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <Marketing />
        <Experience />
        {/* <Blog /> */}
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <ScrollToTop />
        <ChatWidget />
      </main>
    </ErrorBoundary>
  )
}

