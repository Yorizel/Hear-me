import {AbstractDAO} from "./abstract";

export default class PatientsDAO extends AbstractDAO{
    async create({data}) {
        try {
            const response = await this.api.post(`/patients/create`, { ...data});

            return { error: false, ...response };
        } catch (e) {
            return { error: true, ...e };
        }
    }
}