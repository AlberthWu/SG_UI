import Axios from "axios";

export const GetAll = async() => {
    try {
        const response = await Axios.get("https://jsonplaceholder.typicode.com/posts");

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const Post = async(data) => {
    try {
        const response = await Axios.post("http://10.100.2.235:3004/posts", data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const Put = async(id, data) => {
    try {
        const response = await Axios.put("http://10.100.2.235:3004/posts/" + id, data);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const Delete = async(id) => {
    try {
        const response = await Axios.delete("http://10.100.2.235:3004/posts/" + id);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}