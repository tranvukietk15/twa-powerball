import { connected } from "process";
import {
	Card,
	FlexBoxCol,
	FlexBoxRow,
	Ellipsis,
	Button,
} from "./styled/styled";
import "./DegonIntro.css";
import dagonIcon from "../degon.png";

export const Introduce = () => {
	return (
		<>
			<div className="Container">
				<Card>
					<FlexBoxCol>
						<div className="degon-summary">
							<div className="icon-container">
								<img
									src={dagonIcon}
									alt="Degon Dragon Icon"
									className="circle-icon"
								/>
							</div>
							<h2>Degon: Beyond the Meme</h2>
							<p>
								Degon is more than just a meme token; it's your
								key to exclusive benefits and a thriving
								community.
							</p>
							<ul className="benefits">
								<li>
									**Free Dragon NFT:** Claim your unique
									Dragon NFT, a symbol of community membership
									and access to exclusive perks.
								</li>
								<li>
									**Degon Token Airdrops:** Receive regular
									airdrops of Degon tokens, with the potential
									for significant value growth.
								</li>
							</ul>
							{/* <a href="#" className="join-button">Join Degon Community & Claim Your NFT</a> */}
						</div>
					</FlexBoxCol>
				</Card>
			</div>
		</>
	);
};
