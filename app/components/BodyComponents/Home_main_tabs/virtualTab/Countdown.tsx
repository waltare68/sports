import { useEffect, useState } from "react";

interface Countdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface GameDay {
    date: string;
    startTime: string;
    event: string;
    gameweek: string;
}

interface CountdownTimerProps {
    startTime: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ startTime }) => {
    const [countdown, setCountdown] = useState<Countdown>(calculateCountdown(startTime));
    const [live, setLive] = useState<boolean>(false);

    function calculateCountdown(targetTime: string): Countdown {
        const customtargetTime = "16:00:00";

        const customtargetDate = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Africa/Nairobi', // EAT timezone
        }).format(new Date());

        const [hrs, mins, secs] = customtargetTime.split(":");
        const customTargettedDate = new Date(customtargetDate);

        customTargettedDate.setHours(parseInt(hrs), parseInt(mins), parseInt(secs), 0);
        const currentDate = new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' });
        const mytime = new Date(currentDate).getTime();

        const timeDifference = customTargettedDate.getTime() - mytime;

        if (timeDifference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(calculateCountdown(startTime));
            const allZero = Object.values(calculateCountdown(startTime)).every(value => value === 0);

            if (allZero) {
                setLive(false);
                clearInterval(interval);
            }
            else{
                setLive(true)
            }

        }, 1000);

        return () => clearInterval(interval);
    }, [startTime]);

    return (
        <>
            <div className="virtuals__ongoing__virtuals-header-one">
                <h5 className="virtuals__ongoing__virtuals-season text-white">
                    {countdown.hours}:{countdown.minutes} min: {countdown.seconds} seconds
                </h5>
                <h5>{live ? 'Bets Open' : 'Bets Closed'}</h5>
            </div>

        </>
    );
};


export default CountdownTimer

