import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect = ({ to }) => {
  const router = useRouter();

  useEffect(() => {
    // use effect is executed on render, the seocond argument [] makes it execute only once
    router.push(to);
  }, []);

  return null;
};

export default Redirect;
