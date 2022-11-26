export default function handler(res: any) {
    const data = [
        {
            "id": 1,
            "nickname": 'LowScarlet',
            "status": "@LowScarlet#9891",
            "type": "discord",
            "avatar": "https:\/\/cdn.discordapp.com\/avatars\/850817443454255104\/65b7d2d31fd11a2d0e662eb52d8ced9a.png"
        },
        {
            "id": 2,
            "nickname": 'Tegarmaulana Fahreza',
            "status": "@low_scarlet",
            "type": "instagram",
            "avatar": ""
        },
        {
            "id": 3,
            "nickname": 'Tegar maulana Fahreza',
            "status": "#tegar-maulana-fahreza",
            "type": "linkedin",
            "avatar": ""
        },
        {
            "id": 4,
            "nickname": 'LowScarlet',
            "status": "#LowScarlet",
            "type": "github",
            "avatar": ""
        }
    ]

    const response = {
        item: data.length,
        data: data
    }

    res.status(200).json(
        response
    )
}
