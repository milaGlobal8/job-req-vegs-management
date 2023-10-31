import { Flexbox } from "../../components/common";
import { PageTitle, UpdatedAt } from "../../components/screen";

export default function Home() {
  return (
    <Flexbox className="home_page" flexDirection="column">
      <PageTitle>Home</PageTitle>
      <UpdatedAt>2023/10/31 15:46</UpdatedAt>
    </Flexbox>
  );
}
