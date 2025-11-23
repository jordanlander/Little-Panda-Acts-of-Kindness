import { useState, useEffect } from "react";

type CountdownTimerProps = {
  targetDate: Date;
};

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.expired) {
    return (
      <div className="text-sm text-foreground/70">
        Sale has ended
      </div>
    );
  }

  return (
    <div className="flex gap-4 justify-center items-center text-foreground/90">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold font-heading">{timeLeft.days}</span>
        <span className="text-xs uppercase tracking-wide">Days</span>
      </div>
      <span className="text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold font-heading">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-xs uppercase tracking-wide">Hours</span>
      </div>
      <span className="text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold font-heading">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-xs uppercase tracking-wide">Mins</span>
      </div>
      <span className="text-2xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold font-heading">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-xs uppercase tracking-wide">Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
