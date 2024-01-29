import axios from "axios";

const Get = async (endpoint: string) => {
    const response = await axios.get(
        `https://viniciusbastos-dev.vercel.app${endpoint}`,
    );
    return response.data;
};

export default Get;
