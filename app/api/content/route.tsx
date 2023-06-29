import { NextResponse } from "next/server";

const posts = [
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
  },
  {
    title: "Aenean Vulputate",
    slug: "aenean-vulputate",
    content:
      "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.",
  },
  {
    title: "Sed Diam Nonummy",
    slug: "sed-diam-nonummy",
    content:
      "Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Nulla Consequat",
    slug: "nulla-consequat",
    content:
      "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
  },
  {
    title: "Vestibulum Accumsan",
    slug: "vestibulum-accumsan",
    content:
      "Vestibulum accumsan ipsum non justo. Nullam dictum felis eu pede mollis pretium.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
