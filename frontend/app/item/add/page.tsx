import { createItem } from "@/app/lib/data";
import { ItemForm } from "../ui/item-form";
import Link from "next/link";


export default function Page() {

    return (
        <div className="p-4 flex flex-col">
            <Link href={'/'} className="text-blue-500 underline">Back to item list</Link>
            <h1 className="text-lg font-bold text-center">Add New Item</h1>
            <ItemForm formAction={createItem}></ItemForm>
        </div>
    );
}