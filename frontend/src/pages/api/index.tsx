export default function handler(req: any, res: any) {
    const data = {
        "nickname": 'Low_Scarlet',
        "full_name": 'TEGAR MAULANA FAHREZA',
        "slogan": "I am a full stack website developer from Indonesia.",
    }

    res.status(200).json({
        data: data
    })
}
