 
 
import { faker } from "@faker-js/faker/locale/ru";
import { NextResponse, type NextRequest } from "next/server";
import { getRandomInt } from "../_utils/fakes";
 
export async function GET(request: NextRequest) {
  
  const item  = {
      title: faker.lorem.paragraph(),
      tags: faker.lorem.words(),
      
      slug:  faker.word.sample() , 
      description: faker.lorem.text(),  
      short_name: faker.lorem.word(), 
       uid: faker.string.uuid(),
       quantity:getRandomInt(4) ,
       rate:  getRandomInt(10),
       images: [faker.image.urlLoremFlickr(),faker.image.urlLoremFlickr(),faker.image.urlLoremFlickr()] ,
       price:  getRandomInt(10000), 
       created: faker.number.int(),
       updated:  faker.number.int(), 
     };

    return NextResponse.json(item);
}

 