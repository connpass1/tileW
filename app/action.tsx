'use server' 
import { sql } from "@vercel/postgres";
import { IFormInput } from "./(.)/admin/addItem/page";
 
//"createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
//"updatedAt" TIMESTAMP(3) NOT NULL,

export async function createAction() {
  "use server"
 
  const req1 = await sql`  
DROP TABLE IF EXISTS Items; 
`
  
  const req2 = await sql`  
CREATE TABLE IF NOT EXISTS Items  (
id SERIAL, 
title VARCHAR(25)  DEFAULT '' NOT NULL ,
name VARCHAR(15)  NOT NULL,
render smallint DEFAULT 0 NOT NULL,
description VARCHAR(255),
parent_id INTEGER DEFAULT 1 NOT NULL REFERENCES Items,
sort   smallint DEFAULT 0 NOT NULL, 
PRIMARY KEY (id) 
);  
`
}
  
export async function dropAction( )   {  
const  req = await sql`DROP TABLE Items`  
return req 
}
 
 
export async function createItem(output: IFormInput )   {
  const {title  , name , render , description , sort,parent_id} =   output  ;
  
const  req = await sql`INSERT INTO  Items  ( parent_id , title  , name , render , description , sort) VALUES (${parent_id} ,${title}, ${name}, ${render}, ${description},${sort});`  

return req 
}
export async function getItem (uid:number) { 
 
  const  req = await sql`SELECT * from items where id =${uid};`  
  return req.rows[0]
  }
 

export async function selectAll() { 
  const  req = await sql`SELECT * from items;`  
  return req 
  }

 
export async function selectBYiD(uid:number) {  
  const  req = await sql`SELECT id, name,render,sort from items where parent_id =${uid}  ORDER BY sort  DESC;`  
  return req 
  }