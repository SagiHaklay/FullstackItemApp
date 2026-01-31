import { useFormStatus } from "react-dom";


export function FormSubmit() {
    const {pending} = useFormStatus();
    return (
        <button className="bg-blue-700 text-white p-2 rounded-md disabled:bg-gray-300" type="submit" disabled={pending}>
            {pending? 'Submitting...' : 'Submit'}
        </button>
    );
}