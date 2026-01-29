import { createItem } from "@/app/lib/data";
import { ItemForm } from "../ui/item-form";


export default function Page() {

    return (
        <div>
            <h1>Add New Item</h1>
            <ItemForm formAction={createItem}></ItemForm>
        </div>
    );
}