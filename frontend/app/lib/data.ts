'use server'

import { revalidatePath } from "next/cache";
import { Item } from "./Item";
import { redirect } from "next/navigation";

const apiUrl = 'http://localhost:4000/items';

export async function getItems(): Promise<Item[]> {
    const data = await fetch(apiUrl);
    const items = await data.json();
    return items;
}

export async function getItemById(id: string): Promise<Item> {
    const data = await fetch(`${apiUrl}/${id}`);
    return await data.json();
}

export const createItem = async (formData: FormData) => {
    const title = formData.get('title');
    const description = formData.get('description');
    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title, description
        })
    });
    revalidatePath('/');
    redirect('/');
}

export const updateItem = async (formData: FormData) => {
    const title = formData.get('title');
    const description = formData.get('description');
    const id = formData.get('id');
    await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title, description
        })
    });
    revalidatePath(`/item/${id}`);
    redirect(`/item/${id}`);
}

export const deleteItem = async (id: string) => {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });
    revalidatePath('/');
    redirect('/');
}