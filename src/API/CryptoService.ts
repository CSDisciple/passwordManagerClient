import axios from 'axios';

const SERVICE_URL = `http://localhost:8080/cipher`;

class CryptoService {
    CryptoService(){}
    
    encrypt = async (input: String) =>{
        let res = await axios.get(SERVICE_URL + `/encrypt?message=` + input);
        return res;
    }
    
    decrypt = async (input: String) =>{
        let res = await axios.get(SERVICE_URL + `/decrypt?message=` + input);
        return res;
    }
}

export default new CryptoService();