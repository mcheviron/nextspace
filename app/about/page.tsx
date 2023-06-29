import { Metadata } from "next";

// not necessary, next will automatically make a static page
// when no data fetching happen
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About Us",
  description: "About NextSpace",
};

export default function Blog() {
  return (
    <div>
      <h1>About us</h1>
      <p>We are a social media company that wants to bring people together!</p>
    </div>
  );
}
