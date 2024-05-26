export const generatePrompt = (responses: any, name: string) => {
    let message = `Generate a REST API structure based on the following specifications:\n\n`;

    message += `Category: ${name}\n\n`;

    message += `Model: ${responses["Model"]}\n`;
    message += `Language/Framework: ${responses["Language/Framework"]}\n`;

    if (name === "authentication") {
        message += `Form Validation: ${responses["Form Validation"]} \n`;
        message += `Authentication Type: ${responses["Authentication Type"]} \n`;
    }

    if (name === "e-commerce") {
        message += `User Authentication: ${responses["User Authentication"]} \n`;
        message += `User Roles: ${responses["User Roles"]} \n`;
        message += `CRUD Operations: ${responses["Crud Operations"]} \n`;
        message += `Cart Functionality: ${responses["Cart Functionality"]} \n`;
    }

    if (name === "chat") {
        message += `Authentication: ${responses["Authentication"]} \n`;
        message += `Messaging: ${responses["Messaging"]} \n`;
        message += `Group Chats & Private Messaging: ${responses["Group Chats And Private Messaging"]} \n`;
        message += `Online Status & Last Seen: ${responses["Online Status And Last Seen"]} \n`;
    }

    if (name === "custom") {
        message += `Description: ${responses["Custom Requirements"]}`
    }

    message += `Database: ${responses["Database"]} \n`;

    message += `\nPlease generate the necessary REST API structure code for the above specifications. Please provide the code in separate files with file names. Don't give all code in a single file.`;

    return message;
};

