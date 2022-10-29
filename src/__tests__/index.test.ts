import axios from 'axios';
import  { MakeAPiCall } from '../index';

jest.mock("axios");

describe("Call axios api", () => {
        describe("successful api call", () => {
          it("should return list", async () => {
          
           
          });
        });
      });

// describe("Call axios api", () => {
//     describe("successful api call", () => {
//       it("should return list", async () => {
//         // given
//         const data = { messsage: "https:\/\/images.dog.ceo\/breeds\/pekinese\/n02086079_11664.jpg", status: "success" };

//         (axios.get as jest.Mock).mockResolvedValue(data);
  
//         // when
//         const result = await MakeAPiCall("https://dog.ceo/api/breeds/image/random");
  
//         // then
//         expect(axios.get).toHaveBeenCalledWith("https://dog.ceo/api/breeds/image/random");
//         expect(result).toEqual(data);
//       });
//     });
//   });