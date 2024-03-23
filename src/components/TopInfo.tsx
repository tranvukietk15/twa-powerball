import { useEffect, useState } from "react";
import { Countdown } from "./Countdown";
import { Card } from "./styled/styled";

export const TopInfo = () => {
	const [state, setState] = useState({
		seconds: 0,
		hours: 0,
		minutes: 0,
		days: 0,
		isItBday: false,
	});

	const month = 4;
	const day = 15;

	// get current time
	const currentTime = new Date();
	// get current year
	const currentYear = currentTime.getFullYear();

	// Getting the Birthday in Data Object
	// WE subtract 1 from momnth ; Months start from 0 in Date Object
	// Bithday Boolean
	const isItBday =
		currentTime.getDate() === day && currentTime.getMonth() === month - 1;

	useEffect(() => {
		setInterval(() => {
			const countdown = () => {
				// Getting the Current Date
				const dateAtm = new Date();

				// if the Birthday has passed
				// then set the Birthday countdown for next year
				let endTime = new Date(currentYear, month - 1, day, 23, 59, 59);
				if (dateAtm > endTime) {
					endTime = new Date(currentYear + 1, month - 1, day);
				} else if (
					dateAtm.getFullYear() ===
					endTime.getFullYear() + 1
				) {
					endTime = new Date(currentYear, month - 1, day);
				}

				// Getitng Current Time
				const currentTime = dateAtm.getTime();
				// Getting Birthdays Time
				const birthdayTime = endTime.getTime();

				// Time remaining for the Birthday
				const timeRemaining = birthdayTime - currentTime;

				let seconds = Math.floor(timeRemaining / 1000);
				let minutes = Math.floor(seconds / 60);
				let hours = Math.floor(minutes / 60);
				let days = Math.floor(hours / 24);

				seconds %= 60;
				minutes %= 60;
				hours %= 24;

				// Setting States
				setState((prevState) => ({
					...prevState,
					seconds,
					minutes,
					hours,
					days,
					isItBday,
				}));
				// console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItBday}`);
			};
			if (!isItBday) {
				countdown();
			} else {
				setState((prevState) => ({
					...prevState,
					isItBday: true,
				}));
			}
		}, 1000);
	}, [currentYear, day, isItBday, month]);

	return (
		<>
			<Card className="max-w-sm">
				{!state.isItBday && (
					<Countdown countdownData={state} name={"Presale end"} />
				)}
			</Card>
		</>
	);
};
