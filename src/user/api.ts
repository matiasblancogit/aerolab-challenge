import { User } from "./types";

export default {
    fetch:() :Promise<User>=> Promise.resolve(
        new Promise<User>((resolve, reject) => {
            setTimeout(() => {resolve({
                id: "5a03638052fd231590d04eb5",
                name: "Sapo",
                points: 2000,
                redeemHistory: [],
               
              })},500)
        })
    ),
      points:{
          add:(amount:number) :Promise<number> => Promise.resolve(amount)
      }
};