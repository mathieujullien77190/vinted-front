import { Auth } from "@/components/Auth";
import Header from "@/components/Header";
import PublishComponent from "@/components/Publish";

export const Publish = () => {
  return (
    <Auth>
      <Header />
      <PublishComponent />
    </Auth>
  );
};
