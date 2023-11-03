  function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
import { IItem, QuantityType, RateType } from "@/app/api/_data/types";
import { faker } from "@faker-js/faker/locale/ru";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const item:IItem = {
    title: faker.lorem.word(),
    tags: faker.lorem.words(),
    parent_name:faker.word.sample() ,parent_uid: faker.string.uuid(),
    meta_description: faker.lorem.paragraph(),
    description: faker.lorem.text(),
     name: faker.lorem.word(),
    uid: faker.string.uuid(),
    quantity: getRandomInt(4) as QuantityType,
    rate: getRandomInt(10) as RateType ,
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
