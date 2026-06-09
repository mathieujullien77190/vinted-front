import { Wrapper } from "@/components/Wrapper";

import SignupComponent from "@/components/Signup";
import { NoAuth } from "@/components/Auth";
import Header from "@/components/Header";

export const Signup = () => {
  return (
    <NoAuth>
      <Header />
      <Wrapper className="flex justify-center py-10">
        <SignupComponent />
      </Wrapper>
    </NoAuth>
  );
};
