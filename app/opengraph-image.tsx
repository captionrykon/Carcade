import { ImageResponse } from "next/og";

export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        tw="h-full w-full flex flex-col justify-center items-center relative"
        style={{
            backgroundImage: "url(https://i.im.ge/2025/03/26/p0S28G.Untitled-design-31.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 tw="text-6xl text-white"></h1>
      </div>
    ),
    {
      ...size,
    }
  );
}

