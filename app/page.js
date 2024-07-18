import { Button } from "antd";
import { MainLayout } from "./layouts";
import { HeroHeader, Products } from "./Home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <MainLayout>
        <HeroHeader />
        <Products />
      </MainLayout>
    </>
  );
}
