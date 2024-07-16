import { Button } from "antd";
import { MainLayout } from "./components/layout";

export default function Home() {
  return (
    <MainLayout>
      <div className="text-4xl font-bold py-10 text-center text-red-500">
        <Button type="primary">Button</Button>
      </div>
    </MainLayout>
  );
}
