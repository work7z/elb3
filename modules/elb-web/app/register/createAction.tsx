'use server'

export default async function create(formData: FormData) {
    const rawFormData = {
        username: formData.get('username'),
    };
    // Test it out:
    console.log(rawFormData);
}
