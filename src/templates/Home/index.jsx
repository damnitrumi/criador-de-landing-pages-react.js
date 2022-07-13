import { useEffect, useRef, useState } from "react";
import { mapData } from "../../api/map-data";
import { Base } from "../Base";
import { Loading } from "../Loading";
import config from "../../config";

import { PageNotFound } from "../PageNotFound";
import { GridTwoColumns } from "../../components/GridTwoColumns";
import { GridContent } from "../../components/GridContent";
import { GridText } from "../../components/GridText";
import { GridImage } from "../../components/GridImage";
// import { useLocation } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const isMounted = useRef(true);
  // const location = useLocation();

  useEffect(() => {
    // const pathName = location.pathname.replace(/â-z0-9-_/gi, "");
    // const slug = pathName ? pathName : "landing-page";

    const load = async () => {
      try {
        // const data = await fetch(
        //   "http://localhost:1337/api/pages/?slug=" + slug
        // );

        const data = await fetch(
          "http://localhost:1337/api/pages?populate=deep"
        );

        const json = await data.json();

        const { attributes } = json.data[0];

        const pageData = mapData([attributes]);

        setData(() => pageData[0]);
      } catch (e) {
        setData(undefined);
      }
    };

    if (isMounted.current === true) {
      load();
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (data === undefined) {
      document.title = `Página não encontrada | ${config.siteName}`;
    }

    if (data && !data.slug) {
      document.title = `Carregando... | ${config.siteName}`;
    }

    if (data && data.title) {
      document.title = `${data.title} | ${config.siteName}`;
    }
  }, [data]);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      logoData={{ text, link, srcImg }}
      footerHtml={footerHtml}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === "section.section-two-columns") {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === "section.section-content") {
          return <GridContent key={key} {...section} />;
        }

        if (component === "section.section-grid-text") {
          return <GridText key={key} {...section} />;
        }

        if (component === "section.section-grid-image") {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
}

export default Home;
