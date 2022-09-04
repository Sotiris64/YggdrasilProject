import type { NextPage } from "next";
import { Container } from "../../../../components/styled/styled-index";

interface Data {
  name: string;
  id: number;
}

export async function getStaticPaths() {
  const res = await fetch(
    "http://localhost:3000/django/herbarium/families/getAll"
  );
  const families = (await res.json()).context;
  const paths = families.map((family: any) => ({
    params: { group: family.group__name, family: family.name },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(
    `http://localhost:3000/django/herbarium/${params.group}/${params.family}`
  );
  const genera = (await res.json()).context;
  return { props: { genera, group: params.group, family: params.family } };
}

const Home: NextPage = ({ genera, family }: any) => {
  return (
    <Container>
      <h1>GENUS</h1>
      {genera.map((e: Data) => (
        <a href={`${family}/${e.name}`} key={e.id}>
          {e.name}
        </a>
      ))}
    </Container>
  );
};

export default Home;
