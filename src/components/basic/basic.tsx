import { useEffect, useState } from "react";
import { type Item } from "./interface";
// import { url } from "inspector";

export default function CardsItem() {
    const [items, setItems] = useState<Item[]>([]);
    //   const [itemsImg, setItemsimh] = useState<Item[]>([]);

    const [loading, setLoading] = useState<boolean>(true);
    let url: string;
    // let url_img: string;
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/v1/cats/");
                const data: Item[] = await res.json();
                setItems(data);
                // console.log(data)
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const imgData = await
                    Promise.all(items.map(async (item) => {
                        const ref = item.reference_image_id
                        // console.log(ref)
                        url = 'https://api.thecatapi.com/v1/images/${item.reference_image_id$(item.reference_image_id)'
                        const url_img = fetch(url, {
                            method: "GET",
                            headers: {
                                "x-api-key": "ef72570ff371408f9668e414353b7b2e",
                                "Content-Type": "application/json"
                            },

                        })
                       
                    }
                )
            )
            } catch (error) {
                console.error("Error al cargar la API:", error);
            } finally {
                setLoading(false);
            }
        }




            ;

        fetchItems();
    }, []);

    if (loading) return <p className="text-center mt-10">Cargando...</p>;

    return (
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-50">
            {items.map((item) => (


                <div
                    key={item.id}
                    className="bg-amber-300 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
                >
                    <img src="{}" alt="" />
                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                    <p className="text-gray-700">{item.description}</p>
                    <p className="text-gray-700 hidden" >'https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg'</p>

                </div>
            ))}
        </div>
    );
}
