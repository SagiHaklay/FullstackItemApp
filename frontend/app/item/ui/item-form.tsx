'use client'

import { Item } from "@/app/lib/Item";
import { ChangeEvent, useState } from "react";
import { FormSubmit } from "./form-submit";

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
        <form className="flex flex-col gap-6 p-12" action={formAction}>
            <label htmlFor="title">Title*:</label>
            <input className="bg-white border-1 border-gray-300 p-1 rounded-sm invalid:border-red-500" type="text" id="title" name="title" 
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setTitle(e.target.value);
                }} 
                required
            />
            <label htmlFor="description">Description:</label>
            <textarea className="bg-white border-1 border-gray-300 p-1 rounded-sm" name="description" id="description"
                value={description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                    setDescription(e.target.value);
                }}
            ></textarea>
            <input type="hidden" name="id" value={initialItem?.id} />
            <FormSubmit></FormSubmit>
        </form>
    );
}