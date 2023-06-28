import data from "../data/data.json";

export const pedirData = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(data);
        }, 500);
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id);
        if (item) {
            resolve (item)
        } else {
            reject({
                error: "No se encontro ese producto"
            })
        }
    })
}