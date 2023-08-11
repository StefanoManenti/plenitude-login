export const emailExistenceCheck = async (email, request) => {
    const url = `api/registrazioneServices/${email}/verificaEsistenzaMail`;
    try {
        return await window.axios({method: 'post', url: url, data: request});
    } catch (error) {
        console.log("error", error)
    }
}