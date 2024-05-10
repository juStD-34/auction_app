import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
    {timeLeft.days > 0 && (
      <span className=' font-bold text-2xl'>{timeLeft.days} Ngày: </span>
    )}
    {timeLeft.hours >= 0 && (
      <span className=' font-bold text-2xl'>{timeLeft.hours} Giờ: </span>
    )}
    {timeLeft.minutes >= 0 && (
      <span className=' font-bold text-2xl'>{timeLeft.minutes} Phút: </span>
    )}
    {timeLeft.seconds >= 0 && (
      <span className=' font-bold text-2xl'>{timeLeft.seconds} Giây: </span>
    )}
    {(timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) && (
      <span>00:00:00</span>
    )}
  </div>
  );
};

export default CountdownTimer;
