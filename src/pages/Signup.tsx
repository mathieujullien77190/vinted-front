import { Wrapper } from "@/components/Wrapper";

import SignupComponent from "@/components/Signup";
import { NoAuth } from "@/components/Auth";

export const Signup = () => {
  return (
    <NoAuth>
      <Wrapper className="flex justify-center py-10">
        <SignupComponent />
      </Wrapper>
    </NoAuth>
  );
};
