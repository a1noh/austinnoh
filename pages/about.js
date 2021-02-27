import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
const About = () => {
  const { data, error, loading } = useGetUser();
  debugger;
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>I am index About!</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default About;
