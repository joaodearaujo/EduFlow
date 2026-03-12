export const checkEmail = (email: string) => {

    const regexEmail = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i; 

    return regexEmail.test(email) 
}

export const checkNumber = (number: string): boolean => {
    const cleanNumber = number.replace(/\D/g, '');
    
    let finalNumber = cleanNumber;
    if (cleanNumber.length === 13 && cleanNumber.startsWith('55')) {
        finalNumber = cleanNumber.slice(2);
    }

    const regexNumber = /^\d{10,11}$/;
    
    return regexNumber.test(finalNumber);
}                                                           