import { useSearchParams } from "react-router-dom";

export default () => {
  const [params] = useSearchParams();

  console.log(params.get("code"));

  return "Callback ";
};
