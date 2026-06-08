import { Wrapper } from "@/components/Wrapper";

import SigninComponent from "@/components/Signin";
import { NoAuth } from "@/components/Auth";

export const Signin = () => {
  return (
    <NoAuth>
      <Wrapper className="flex justify-center py-10">
        <SigninComponent />
      </Wrapper>
    </NoAuth>
  );
};
