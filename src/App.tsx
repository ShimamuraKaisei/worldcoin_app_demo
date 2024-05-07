import { Center } from "@chakra-ui/react";
import { VerificationLevel } from "@worldcoin/idkit";
import { IDKitWidget } from '@worldcoin/idkit';

function App() {
  // TODO: Calls your implemented server route
  const verifyProof = async () => {
    throw new Error("TODO: verify proof server route")
  };

  // TODO: Functionality after verifying
  const onSuccess = () => {
    console.log("Success")
  };

  // ...

  return (
    <>
      <Center h={`100vh`}>
        <IDKitWidget
          app_id="app_staging_91a0edb2b99792168b7e43ae28b8e2db"
          action="test_vote"
          verification_level={VerificationLevel.Device}
          handleVerify={verifyProof}
          onSuccess={onSuccess}// Assign a valid value of type 'VerificationLevel' to the 'verification_level' property
        >
          {({ open }) => <button onClick={open}>Verify with World ID</button>}
        </IDKitWidget>

        {/* <IDKitWidget
            app_id="app_8be012f2a086a9335ed47562eb20eca9"
            action="main_test_vote"
            verification_level={VerificationLevel.Device}
            handleVerify={verifyProof}
            onSuccess={onSuccess}>
            {({ open }) => (
              <button
                onClick={open}
              >
                Verify with World ID
              </button>
            )}
        </IDKitWidget> */}
      </Center>
    </>
  )
}

export default App
