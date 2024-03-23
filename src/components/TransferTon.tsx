import { useState } from "react";
import styled from "styled-components";
import { Address, toNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { Card, FlexBoxCol, FlexBoxRow, Button, Input } from "./styled/styled";
import "./NumberInput.css";
import TonWeb from "tonweb";
import { useCounterContract } from "../hooks/useCounterContract";
// import { TonConnectButton } from "@tonconnect/ui-react";

const regex = /^[0-9]*([.][0-9]*)?$/;


export function TransferTon() {
  const { sender, connected, wallet } = useTonConnect();
  const { value, address } = useCounterContract();

  const [tonAmount, setTonAmount] = useState("");
  const tonRecipient = "UQCX3o_8tUxrAScwYHVf5at9guv-2NgTyKq5ADxLRREhVrnA";
  // const tonRecipient = "UQBO3Pj5S5dI-M1XKpWgitW3uPcp-HUwVyQpX9plvjzIuUKu";
  const handleChange = (event: any) => {
    const newValue = event.target.value;
    

    if (regex.test(newValue) || newValue === '') {
      setTonAmount(newValue);
    }
  };

  const handleInnerButtonClick = () => {
		// Simulate click action for inner button (replace with your logic)
    console.log("Inner button clicked:", tonAmount);
    console.log({wallet});
    
	};

  return (
		<Card>
			<FlexBoxCol>
				<h3>Buy IDO</h3>
				<FlexBoxRow>
					<div className="input-wrapper">
						<input
							type="text"
							onChange={handleChange}
							value={tonAmount}
						/>
						{/* <button onClick={handleInnerButtonClick}>Max</button> */}
					</div>
				</FlexBoxRow>
				{/* <FlexBoxRow>
          <label>To </label>
          <Input
            style={{ marginRight: 8 }}
            value={tonRecipient}
            onChange={(e) => setTonRecipient(e.target.value)}
          ></Input>
        </FlexBoxRow> */}
				<Button
					disabled={!connected}
					style={{ marginTop: 10, height: 45 }}
					onClick={sendTransactionHandler()}
				>
					Transfer
				</Button>
			</FlexBoxCol>
		</Card>
  );

  function sendTransactionHandler() {
    return async () => {
      sender.send({
        to: Address.parse(tonRecipient),
        value: toNano(tonAmount),
      }).then(() => {

      }).catch(() => {
        console.warn('100')
      });
    };
  }
}
