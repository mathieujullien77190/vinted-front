import { Auth } from "@/components/Auth";
import PublishComponent from "@/components/Publish";

export const Publish = () => {
  return (
    <Auth>
      <PublishComponent />
    </Auth>
  );
};
