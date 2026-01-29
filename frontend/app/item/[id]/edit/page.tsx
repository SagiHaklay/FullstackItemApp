import { getItemById, updateItem } from "@/app/lib/data";
import { ItemForm } from "../../ui/item-form";

export default async function Page({
    params
}: {
    params: Promise<{ id: string}>
}) {
    const { id } = await params;
    const item = await getItemById(id);

    return (
        <div>
            <h1>Edit Item</h1>
            <ItemForm formAction={updateItem} initialItem={item}></ItemForm>
        </div>
    );
}