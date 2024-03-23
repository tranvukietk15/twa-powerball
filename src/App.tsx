import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk";
import { PieChart } from "./components/Chart";
import { TopInfo } from "./components/TopInfo";
import { Introduce } from "./components/Introduce";
import VerticalStepper from "./components/VerticalStepper";

const StyledApp = styled.div`
	background-color: #e8e8e8;
	color: black;

	@media (prefers-color-scheme: dark) {
		background-color: #222;
		color: white;
	}
	min-height: 100vh;
	padding: 20px 20px;
`;

const AppContainer = styled.div`
	max-width: 900px;
	margin: 0 auto;
	font-family: Inter, sans-serif;
`;

function App() {
	const { network } = useTonConnect();

	return (
		<StyledApp>
			<AppContainer>
				<FlexBoxCol>
					<FlexBoxRow>
						<TonConnectButton />
						{/* <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button> */}
					</FlexBoxRow>
					<TopInfo />
					<Introduce />
					{/* <Counter /> */}
					<TransferTon />
					<VerticalStepper />
					<PieChart />
					{/* <Jetton /> */}
				</FlexBoxCol>
			</AppContainer>
		</StyledApp>
	);
}

export default App;
