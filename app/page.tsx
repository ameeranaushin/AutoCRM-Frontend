import Nav from './components/Nav';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import BookingForm from './components/BookingForm';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PainPoints />
      <Solution />
      <SocialProof />
      <Pricing />
      <BookingForm />
    </main>
  );
}
