import { faker } from "@faker-js/faker/locale/ru";

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
export  function getRandomImages() {
  let v = getRandomInt(4);
  const arr: string[] = [];
  while (v > 0) {
    arr.push(faker.image.urlLoremFlickr());
  }
  return arr;
}
export const item = () => {
  return {
     // title: faker.lorem.sentence(),
      title: faker.lorem.slug() ,  
       x:faker.lorem.word(),
    description: faker.lorem.text(),
    uid: faker.string.uuid(),
    quantity: getRandomInt(5),
    rate: getRandomInt(10),
    images: getRandomImages(),
    price: getRandomInt(25),
    created: faker.date.past(),
    updated: faker.date.past(),
  };
};
export const user = () => {
    return {
        name: faker.person.firstName(),
        uid: faker.string.uuid(),
        bio: faker.person.bio(),
        ava: faker.image.avatarGitHub(),
        rate: getRandomInt(10),
  
        created: faker.date.past(),
        updated: faker.date.past()
    }
}