import { Metadata } from "next";
import App from "@/components/app";

const appUrl = process.env.NEXT_PUBLIC_URL;

const frame = {
  version: "next",
  imageUrl: "https://i.im.ge/2025/03/19/pIU1pS.Untitled-design-15.png",
  button: {
    title: "Launch Frame",
    action: {
      type: "launch_frame",
      name: "TrenchVerse",
      url: appUrl,
      splashImageUrl: "https://i.im.ge/2025/03/19/pIU1pS.Untitled-design-15.png",
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "TrenchVerse",
    openGraph: {
      title: "TrenchVerse",
      description:
        "",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return <App />;
}
