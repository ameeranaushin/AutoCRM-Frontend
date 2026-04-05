import Nav from './components/Nav';
import Hero from './components/Hero';
import DemoSection from './components/DemoSection';
import PainPoints from './components/PainPoints';
import Reviews from './components/Reviews';
import Solution from './components/Solution';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <DemoSection />
      <PainPoints />
      <Reviews />
      <Solution />
      <SocialProof />
      <Pricing />
      <BookingForm />
    </main>
  );
}
