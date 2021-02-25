import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetUser } from "@/actions/user";
import Redirect from "@/components/shared/Redirect";
import withAuth from "@/hoc/withAuth";

const Secret = ({ title }) => {
  const { data, error, loading } = useGetUser();

  if (loading) {
    return <p>Loading..</p>;
  }

  if (!data) {
    return <Redirect to="/api/v1/login" />;
  } else {
    return (
      <BaseLayout user={data} loading={loading}>
        <BasePage>
          <h1>I am index Secret! - {title}</h1>
        </BasePage>
      </BaseLayout>
    );
  }
};

// High order component - HOC
// simple function that takes a componenet and returns
// new componenet with some extended functionality

// function withAuth(Component) {
//   return function (props) {
//     return <Component title="hello world" {...props} />;
//   };
// }
// const withAuth = (Component) => (props) => (
//   <Component title="hello world" {...props} />
// );

export default withAuth(Secret);
