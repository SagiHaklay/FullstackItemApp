import { JSONFilePreset } from 'lowdb/node';
import { Item } from "../models/Item";


type Data = {
    items: Item[]
}
const defaultData: Data = {
    items: []
};

export const getDB = async () => {
    return await JSONFilePreset<Data>('db.json', defaultData);
}

