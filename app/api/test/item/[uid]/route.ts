  function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
import { faker } from "@faker-js/faker/locale/ru";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const item = {
    title: faker.lorem.word(),
    tags: faker.lorem.words(),
    parent_name: faker.lorem.word(),
    parent_slug: faker.word.sample(),
    parent_svg: `<svg height="100" width="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
    Sorry, your browser does not support inline SVG.  
  </svg>`,
    slug: faker.word.sample(),
    meta_description: faker.lorem.paragraph(),
    description: faker.lorem.text(),
     name: faker.lorem.word(),
    uid: faker.string.uuid(),
    quantity: getRandomInt(4),
    rate: getRandomInt(10),
    images: [
      faker.image.urlLoremFlickr(),
      faker.image.urlLoremFlickr(),
      faker.image.urlLoremFlickr(),
    ],
    price: getRandomInt(10000),
    created: faker.number.int(),
    updated: faker.number.int(),
  };

  return NextResponse.json(item);
}
