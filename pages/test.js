import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Test() {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const sendEmail = async () => {
        const data = {
            name: "Kira js",
            email: "carlosalexisart@gmail.com",
            message: "tas bien guapo"
        };

        try {
            await axios.post("/api/mail", data);
            toast.success("Email sent");
        } catch (error) {
            toast.error("Failed to send email");
            console.error("Error sending email:", error);
        }
    };

    return (
        <div>
            <input type="email" placeholder="Email" />
            <button onClick={sendEmail}>Send Email</button>
            
            {products &&
                products.length > 0 &&
                products.map((product) => (
                    <div key={product.id}>
                        <Image
                            unoptimized
                            src={product.image}
                            alt={product.title}
                            width={200}
                            height={300}
                        />
                        {product.title}
                    </div>
                ))}
        </div>
    );
}
