import TestimonialsData from "./testimonials-json";

export const formattedDataHeader = [
    {
        id: 1,
        text: "Special Final Prep FLPs",
        customCss: {
            color: " #FFF",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "var(--PreMed-Yellow, #FC951E)",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "700",
        },
        imageUrl: "/MacbookPro1.png",
        link: "https://blog.premed.pk/post/nums-final-hour-prep"
    },
    {
        id: 2,
        text: "The New Quiz Builder",
        customCss: {
            color: " #FFF",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "var(--PreMed-Yellow, #6D6DFC)",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "700",
        },
        imageUrl: "/MacbookPro2.png",
        link: "https://blog.premed.pk/post/quiz-builder-your-personalized-path-to-exam-success"
    },
    {
        id: 1,
        text: "All-New Flashcards",
        customCss: {
            color: " #FFF",
            WebkitTextStrokeWidth: "2px",
            WebkitTextStrokeColor: "var(--PreMed-Yellow, #4285F4)",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "700",
        },
        imageUrl: "/MacbookPro3.png",
        link: "https://blog.premed.pk/post/all-the-bookish-lines-to-be-crammed-in-one-place-the-ultimate-flashcards"
    },
];

export const testimonialIds = [
    "66788252d8a438b8eefe1dfa",
    "667ae25a8111d093b320fab0",
    "6678a0c23bda35892f16be82",
    "667b2287b92381ae60b566e2",
    "667857bfd8a438b8eef639ad",
    "667710f02bc182278626138e",
    "667b3c2d391fa8e73c32e27d",
    "667b46fa391fa8e73c33274a",
    "6678a4123bda35892f16c69e",
    "667b4cbf391fa8e73c33371c",
    "6678a490d8a438b8eeff1f47",
    "667b43ac391fa8e73c331b14",
    "667b44c4391fa8e73c331f13",
    "667889fed8a438b8eefe70c2",
    "667b45ef391fa8e73c332387",
    "6678a6ce3bda35892f16c6f7",
    "667b46fa391fa8e73c33274a",
    "6678a1953bda35892f16bec5",
    "667b4990391fa8e73c332e95",
    "667b4a27391fa8e73c332f92",
    "6678a4123bda35892f16c69e",
    "667b4ad7391fa8e73c333161",
    "667b4ba2391fa8e73c333437",
    "667b4c37391fa8e73c333652",
    "667b4cbf391fa8e73c33371c",
    "667b4ea6391fa8e73c3341c3",
    "667b4f7b391fa8e73c334439",
    "667b5056391fa8e73c334690",
    "667b50bd391fa8e73c334830",
    "667b5197391fa8e73c334a74",
    "667b537d391fa8e73c3350f6",
    "667b5463391fa8e73c33552d",
    "667b52fe391fa8e73c334ef2",
];

export const fetchLocalTestimonialsByIds = () => {
    const filteredTestimonials = TestimonialsData?.filter((item) =>
        testimonialIds?.includes(item?._id)
    );

    const formattedData = filteredTestimonials.map(({ _id, name, UniName, text, examName, score, type, isTopper }) => ({
        id: _id,
        Name: name || "",
        type: type || "",
        UniName: UniName || "",
        UniLogo: text?.pictureUrl || "",
        ReviewContent: text?.description || "",
        uniShortName: examName || "",
        highestScore: score || "",
        isTopper: isTopper || false,
    })).filter((item) => item?.type === "text");
    return formattedData;
};

export const PreMedical = [
    "MDCAT",
    "NUMS",
    "AKU",
]
export const PreEngineering = [
    "ECAT",
    "NET",
    "FAST",
]

export const International = [
    "SAAT",
    "GAT",
]


export const BusinessAndManagement = [
    "IBA",
    "LUMS",
    "CBM",
    "SZABIST",
    "IB&M",
]

export const Intermediate = [
    "FSC",
    "ICS",
    "I.COM",
    "FA",
]

export const Cambridge = [
    "O-Levels",
    "A-Levels",
]

export const MedSchool = [
    "MBBS",
    "BDS",
    "DPT",
    "Pharmacy",
]

