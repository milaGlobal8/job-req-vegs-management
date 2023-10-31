import UpdateIcon from "@mui/icons-material/Update";

import { Flexbox, Typography } from "../../common";
import { UpdatedAtProps } from "./UpdatedAt.types";

const UpdatedAt = (props: UpdatedAtProps) => {
  const { children } = props;

  return (
    <Flexbox justifyContent="center" alignItems="center" gap={10}>
      <UpdateIcon />
      <Typography>{children}</Typography>
    </Flexbox>
  );
};

export default UpdatedAt;
