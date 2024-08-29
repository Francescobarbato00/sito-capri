import HeroSection from './components/HeroSection';
import ConferenceSection from './components/ConferenceSection';
import ParallaxSection from './components/ParallaxSection';
import EventSchedule from './components/EventSchedule';
import Header from './components/Header';
import ScrollingLogos from './components/ScrollingLogos';  // Import the ScrollingLogos component
import LogisticsInfoSection from './components/LogisticsInfoSection'; // Import the new section
import Footer from './components/Footer'; // Import the footer
import { CommentSuggestionSection, VideoSection } from './components/CommentVideoSections';
import { ContactForm, GoogleMap } from './components/ContactMapSections';
import ChatButton from "./components/ChatButton";
export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ChatButton />
      <ConferenceSection />
      <ParallaxSection />
      <LogisticsInfoSection />
      <EventSchedule />
      <ScrollingLogos /> {/* Add the ScrollingLogos component here */}
      <CommentSuggestionSection />
      <VideoSection />
      <ContactForm />
      <GoogleMap />
      <Footer/>
    </div>
  );
}
