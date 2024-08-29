// components/Conference.jsx
import ConferenceDetails from './ConferenceDetails';
import CountdownTimer from './CountdownTimer';

const Conference = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('/certosa.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6">
        <ConferenceDetails />
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Conference;
