import { useCallback, useState } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import DoctorSection from './components/DoctorSection';
import ServicesSection from './components/ServicesSection';
import WhyUs from './components/WhyUs';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import FaqSection from './components/FaqSection';
import BookingSection from './components/BookingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AppointmentModal from './components/AppointmentModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);

  const openBooking = useCallback((service?: string) => {
    setBookingService(service);
    setBookingOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-ink antialiased">
      <NavBar onBook={() => openBooking()} />
      <main>
        <Hero onBook={() => openBooking()} />
        <StatsBar />
        <DoctorSection onBook={() => openBooking()} />
        <ServicesSection onBook={openBooking} />
        <WhyUs />
        <ReviewsSection />
        <GallerySection />
        <FaqSection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
      <AppointmentModal open={bookingOpen} onClose={() => setBookingOpen(false)} service={bookingService} />
    </div>
  );
}
