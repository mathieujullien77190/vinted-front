import { Wrapper } from "@/components/Wrapper";

import SigninComponent from "@/components/Signin";
import { NoAuth } from "@/components/Auth";
import Header from "@/components/Header";

export const Signin = () => {
  return (
    <NoAuth>
      <Header />
      <Wrapper className="flex justify-center py-10">
        <SigninComponent />
      </Wrapper>
    </NoAuth>
  );
};
