import { JSONFilePreset } from 'lowdb/node';
import { Item } from "../models/Item";


type Data = {
    items: Item[],
    idCounter: number
}
const defaultData: Data = {
    items: [],
    idCounter: 1
};

export const getDB = async () => {
    return await JSONFilePreset<Data>('db.json', defaultData);
}

