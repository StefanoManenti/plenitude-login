export const emailExistenceCheck = async (email) => {
    const url = `api/registrazioneServices/${email}/verificEmial`;
    try {
        const response = await window.axios.post(url);
        console.log("response", response)
        // if success, navigate to registration page
    } catch (error) {
        console.log("error", error)
    }
}