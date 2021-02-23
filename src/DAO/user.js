import {AbstractDAO} from "./abstract";

export default class UserDAO extends AbstractDAO{
    async create({data}) {
        try {
            const response = await this.api.post(`/user/sign_up`, { ...data});

            return { error: false, ...response };
        } catch (e) {
            return { error: true, ...e };
        }
    }

     async find({data}) {
         try {
             const response = await this.api.post(`/user/sign_in`, { ...data});

             return { error: false, ...response };
         } catch (e) {
             return { error: true, ...e };
         }
     }

 }
