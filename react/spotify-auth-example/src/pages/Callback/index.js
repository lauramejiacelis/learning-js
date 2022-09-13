import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { getToken } from "services/spotify";

export default () => {
  const [params] = useSearchParams();
  console.log(params)

  const navigate = useNavigate();

  useEffect(() => {
    const code = params.get("code");

    getToken(code)
      .then(({ ok }) => {
        if (ok) {
          return navigate("/homemenu");
        }

        //TODO: implement error state
        console.error("Something went wrong");
      })
      .catch(() => {
        //TODO: implement error state
      });
  }, [params]);

  //TODO: implement spinner
  return "callback";
};
