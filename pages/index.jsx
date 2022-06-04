import Head from "next/head";
import Controls from "../components/Controls";
import SnippetBox from "../components/SnippetBox";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-blue-50">
      <Head>
        <title>CSS box shadow generator</title>
        <meta
          name="description"
          content="A modern and clean CSS box shadow generator"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container mb-16 max-w-6xl select-none">
          <h1 className="mb-4 text-5xl">CSS box shadow generator</h1>
          <p className="text-lg">
            A modern and clean CSS box shadow generator.
          </p>
        </div>
        <div className="container my-auto grid max-w-6xl grid-cols-5 gap-12">
          <div className="z-10 col-span-2 flex flex-col gap-4">
            <h2 className="select-none text-lg font-medium text-gray-800">
              Adjust shadow parameters
            </h2>
            <Controls />
          </div>
          <div className="col-span-3 flex flex-col gap-4">
            <h2 className="select-none text-lg font-medium text-gray-800">
              CSS Code snippet
            </h2>
            <SnippetBox />
          </div>
        </div>
      </main>
    </div>
  );
}
