// templateLoader.js

async function fetchTemplate(templateName) {
    const response = await fetch(`/templates/${templateName}`);
    if (response.ok) {
        return await response.text();
    } else {
        throw new Error('Template not found');
    }
}

export default fetchTemplate;