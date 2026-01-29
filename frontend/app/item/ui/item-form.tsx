'use client'

import { Item } from "@/app/lib/Item";
import { ChangeEvent, useState } from "react";

export function ItemForm({
    formAction,
    initialItem
}: {
    formAction: (formData: FormData) => void,
    initialItem?: Item
}) {
    const [title, setTitle] = useState(initialItem?.title || '');
    const [description, setDescription] = useState(initialItem?.description || '');
    
    return (
        <form className="flex flex-col items-center gap-6 bg-gray-200 p-12" action={formAction}>
            <label htmlFor="title">Title:</label>
            <input className="bg-white" type="text" id="title" name="title" 
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setTitle(e.target.value);
                }} 
            />
            <label htmlFor="description">Description:</label>
            <textarea className="bg-white" name="description" id="description"
                value={description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setDescription(e.target.value);
                }}
            ></textarea>
            <input type="hidden" name="id" value={initialItem?.id} />
            <button className="bg-blue-700 text-white p-4 rounded-xl" type="submit">Submit</button>
        </form>
    );
}