const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addBook":
            return [...state, action.payload];
        case "deleteBook":
            return [];
        default:
            return state;
    }
}

const initialState = [
    {
        id: 1,
        name: 'Wiedzmin Sezon Burz',
        author: "Andrzej Sapkowski",
        imgUrl: 'https://s.lubimyczytac.pl/upload/books/199000/199630/490986-352x500.jpg',
        launguageVersion: 'polska',
        categories: ['fantasy', 'tego typu'],
        description: "Geralt stacza walkę z niebezpiecznym potworem, którego jedynym celem w życiu jest zabijanie ludzi. Krótko po tym zostaje aresztowany, co skutkuje utratą jego dwóch bezcennych mieczy wiedźmińskich. Z małą pomocą swojego przyjaciela, Jaskra i jego koneksji, robi wszystko, by odzyskać swoje narzędzia pracy.",
        views: 0,
        rate: 8,
        pdfUrl: "https://manning-content.s3.amazonaws.com/download/5/54dea42-e46e-44c7-a930-d4c86a2c2ca3/CORS_ch03.pdf"
    },
    {
        id: 2,
        name: 'Ty Kochasz Mnie',
        author: "Caroline Kepnes",
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavJutkAo3ruDiorebd7BzrQDg0rUGPQxzb-9i_ItDjwOkW4iDcsookbXhubzIwtp6ZVQ&usqp=CAU',
        launguageVersion: 'polska',
        categories: ['fantasy', 'tego typu'],
        description: "Geralt stacza walkę z niebezpiecznym potworem, którego jedynym celem w życiu jest zabijanie ludzi. Krótko po tym zostaje aresztowany, co skutkuje utratą jego dwóch bezcennych mieczy wiedźmińskich. Z małą pomocą swojego przyjaciela, Jaskra i jego koneksji, robi wszystko, by odzyskać swoje narzędzia pracy.",
        views: 0,
        rate: 8,
        pdfUrl: 'http://localhost:3000/pdf/Ty.pdf'
    },
    {
        id: 3,
        name: 'It',
        author: "Stephen King",
        imgUrl: 'https://ecsmedia.pl/c/to-b-iext97106887.jpg',
        launguageVersion: 'polska',
        categories: ['fantasy', 'tego typu'],
        description: "Geralt stacza walkę z niebezpiecznym potworem, którego jedynym celem w życiu jest zabijanie ludzi. Krótko po tym zostaje aresztowany, co skutkuje utratą jego dwóch bezcennych mieczy wiedźmińskich. Z małą pomocą swojego przyjaciela, Jaskra i jego koneksji, robi wszystko, by odzyskać swoje narzędzia pracy.",
        views: 0,
        rate: 8
    },
    {
        id: 4,
        name: 'Wiedzmin Sezon Burz',
        author: "Andrzej Sapkowski",
        imgUrl: 'https://s.lubimyczytac.pl/upload/books/199000/199630/490986-352x500.jpg',
        launguageVersion: 'polska',
        categories: ['fantasy', 'tego typu'],
        description: "Geralt stacza walkę z niebezpiecznym potworem, którego jedynym celem w życiu jest zabijanie ludzi. Krótko po tym zostaje aresztowany, co skutkuje utratą jego dwóch bezcennych mieczy wiedźmińskich. Z małą pomocą swojego przyjaciela, Jaskra i jego koneksji, robi wszystko, by odzyskać swoje narzędzia pracy.",
        views: 0,
        rate: 8
    }
]

export default reducer;