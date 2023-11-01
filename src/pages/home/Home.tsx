import shiitake from "../../assets/shiitake.jpg";
import tomato from "../../assets/tomato.jpg";
import { Flexbox } from "../../components/common";
import { Card, PageTitle, UpdatedAt } from "../../components/screen";

export default function Home() {
  return (
    <Flexbox className="home_page" flexDirection="column" gap={20}>
      <PageTitle>Home</PageTitle>
      <UpdatedAt>2023/10/31 15:46</UpdatedAt>
      <Flexbox justifyContent="center" flexWrap="wrap" gap={30} margin={45}>
        <Card
          alt="トマト"
          src={tomato}
          name="Tomato"
          stock={5637}
          desc="Lorem ipsum dolor sit amet, consectetur fugit sapiente, vero ut labore? Vitae, aliquam?"
        />
        <Card
          alt="しいたけ"
          src={shiitake}
          name="Shiitake"
          stock={2636}
          desc="Lorem ipsum dolor sit amet, consectetur fugit sapiente, vero ut labore? Vitae, aliquam?"
        />
      </Flexbox>
    </Flexbox>
  );
}
