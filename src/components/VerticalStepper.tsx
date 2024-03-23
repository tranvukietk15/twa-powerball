import { useState } from "react";
import "./VerticalStepper.css";
import { Card, FlexBoxCol } from "./styled/styled";

class StepDate {
	public title: string;
	public description: string;
	public completed: boolean;
	public endDate: Date;

	constructor(
		title: string,
		description: string,
		completed: boolean,
		endDate: Date
	) {
		this.title = title;
		this.description = description;
		this.completed = completed;
		this.endDate = endDate;
	}
}

const VerticalStepper = () => {
	const pollingInterval = 5000;
	const [activeStep, setActiveStep] = useState(0);

	const handleStepChange = (stepIndex: number) => {
		setActiveStep(stepIndex);
	};

	const [steps, setSteps] = useState([
		{
			title: "Waiting for pool start",
			description: "No one can purchase",
			completed: true,
			date_end: "2024-03-10T23:59:59.000Z",
		},
		{
			title: "Pool Start",
			description: "Pool starts at 2023.03.20 11:00 (UTC)",
			completed: true,
			date_end: "2024-03-20T23:59:59.000Z",
		},
		{
			title: "Pool Ended",
			description: "Pool ends at 2023.04.15 16:00 (UTC)",
			completed: false,
			date_end: "2024-04-15T23:59:59.000Z",
		},
		{
			title: "Claim tokens",
			description: "Claim at 2024-05-01 01:00 (UTC)",
			completed: false,
			date_end: "2024-05-01T23:59:59.000Z",
		},
	]);

	// useEffect(() => {
	// 	const now = new Date();
	// 	steps.forEach((x) => {
	// 		const date = new Date(x.date_end);
	// 		if (now >= date) {
	// 			x.completed = true;
	// 		}
	// 	});

	// 	setSteps(steps);
	// }, []);

	// useEffect(() => {
	// 	const now = new Date();
	// 	const checkForUpdates = async () => {
	// 		// Simulate fetching updated step data (replace with your actual API call)
	// 		steps.forEach((x) => {
  //       const date = new Date(x.date_end);
  //       console.log({date, value: now >= date});
        
	// 			if (now >= date) {
	// 				x.completed = true;
	// 			}
	// 		});
	// 		setSteps(steps);
	// 	};

	// 	const intervalId = setInterval(checkForUpdates, pollingInterval);

	// 	return () => clearInterval(intervalId);
	// }, [pollingInterval]);

	return (
		<Card>
			<FlexBoxCol>
				<div>
					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons"
						rel="stylesheet"
					/>
					<div>
						{steps.map((step, i) => (
							<div key={`step_${i}`}>
								<div
									style={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<div
										className="material-icons"
										style={{
											color: step.completed
												? "#2faddd"
												: "grey",
										}}
									>
										check_circle
									</div>
									<div className="step-text">
										{step.title}
									</div>
								</div>
								<div
									style={{
										...(i !== steps.length - 1 && {
											borderLeft: "solid 1px #ccc",
											marginTop: 4,
											marginBottom: 4,
										}),
										marginLeft: 12,
										paddingLeft: 20,
										paddingTop: 8,
										paddingBottom: 8,
										height: 50,
									}}
								>
									{step.description}
								</div>
							</div>
						))}
					</div>
				</div>
			</FlexBoxCol>
		</Card>
	);
};

export default VerticalStepper;
