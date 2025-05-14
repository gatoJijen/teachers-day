import Title from "@/components/Title";
import Content from "@/components/Content";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 justify-center min-h-screen">
      <Title />
      <Content />
    </main>
  );
}
