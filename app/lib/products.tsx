export type Product={
    id : string;
    image : string;
    name : string;
    price : number;
    description : string;
    category: "laptop" | "smartphone" | "smartwatch";

}

export const products : Product[] = [
    {
        id : "1",
        image : "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
        name : "macbook pro",
        price : 775,
        description : "Professional use only",
        category : "laptop"
    },
    {
        id : "2",
        image : "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
        name : "samsung galaxy s25 ultra",
        price : 220,
        description : "Modern phone with enhanced camera quality",
        category : "smartphone"
    },
    {
        id : "3",
        image : "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&q=80",
        name : "boAt storm infinity watch",
        price : 99,
        description : "Digital watch that connects with mobile",
        category : "smartwatch"
    },
    {
        id : "4",
        image : "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=80",
        name : "iphone 15 pro max",
        price : 245,
        description : "Modern phone with enhanced camera quality",
        category : "smartphone"
    },
    {
        id : "5",
        image : "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",
        name : "victus gaming",
        price : 625,
        description : "Best for gamers and developers",
        category : "laptop"
    },
];