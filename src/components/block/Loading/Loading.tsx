import ReactLoading from "react-loading";
import { COLOR } from "../../../constants/color";
import { Flexbox, Typography } from "../../atoms";
import { LoadingProps } from "./Loading.types";

const Loading = (props: LoadingProps) => {
  const { loadingMsg } = props;

  return (
    <Flexbox flexDirection="column" alignItems="center" gap={30}>
      <ReactLoading type="spin" color="#ed6f77" height="80px" width="80px" />
      <Typography color={COLOR.PINK1}>{loadingMsg}</Typography>
    </Flexbox>
  );
};

export default Loading;
