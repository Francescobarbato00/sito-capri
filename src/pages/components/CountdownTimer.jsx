import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [mounted, setMounted] = useState(false);

  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-10-04T00:00:00'); // Data dell'evento settata per il 4 ottobre 2024 a mezzanotte
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setTimeLeft(calculateTimeLeft());

      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [mounted]);

  if (!mounted) {
    return <div>Caricamento...</div>;
  }

  return (
    <div className="flex justify-center mt-10 space-x-8 text-white text-2xl font-bold">
      {Object.keys(timeLeft).map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <span className="text-6xl">{timeLeft[unit]}</span>
          <span className="mt-2 text-lg text-blue-500 capitalize">
            {unit === 'days' ? 'Giorni' : unit === 'hours' ? 'Ore' : unit === 'minutes' ? 'Minuti' : 'Secondi'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
