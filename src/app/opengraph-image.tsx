import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Calderon Psychiatric Services | Orange County, CA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const imageData = await readFile(
    join(process.cwd(), "public/images/nicholas-calderon-headshot.png")
  );
  const imageSrc = `data:image/png;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#1B365D",
          alignItems: "center",
          justifyContent: "center",
          padding: 60,
          gap: 60,
        }}
      >
        <img
          src={imageSrc}
          width={400}
          height={400}
          style={{ borderRadius: 200, border: "4px solid #C9A84C" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#FAF8F5",
            maxWidth: 580,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Calderon Psychiatric Services
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#C9A84C",
              lineHeight: 1.4,
            }}
          >
            Compassionate, Expert Psychiatric Care in Orange County, CA
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
