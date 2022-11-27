export default function handler(req: any, res: any) {
    const data = {
        "nickname": 'Low_Scarlet',
        "full_name": 'TEGAR MAULANA FAHREZA',
        "slogan": "I am a full stack website developer from Indonesia.",
        "about_me":
            'I am a full stack website Developer and owner of Pumpkin Project Community. I create successful websites that are fast, easy to use, and built with best practices.' +
            '\n\n' +
            'I work to make a better web; one that is fast, easy to use, beautiful, accessible to all, and frustration-free. Regardless of your specific business requirements, in solving these challenges, you have a great chance of finding success online.' +
            '\n\n' +
            'My main experience is in backend-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences.',

        "hobbies": [
            {
                "name": "badminton",
                "grade": 100,
                "description": ""
            },
            {
                "name": "coding",
                "grade": 100,
                "description": ""
            },
            {
                "name": "online games",
                "grade": 90,
                "description": ""
            }
        ]
    }

    res.status(200).json({
        data: data
    })
}
