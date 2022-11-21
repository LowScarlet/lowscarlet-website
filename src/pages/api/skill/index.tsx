export default function handler(req: any, res: any) {
    const { item } = req.query

    const data = [
        {
            "id": 1,
            "title": 'Coding',
            "description": "I'm not the master, but I'm experienced.",
            "grade": 100,
            "tags": [
                'it',
                'website',
                'bot',
            ]
        },
        {
            "id": 2,
            "title": 'Design',
            "description": "I'm a beginner at this.",
            "grade": 75,
            "tags": [
                'it',
                'website',
                'banner',
            ]
        },
        {
            "id": 3,
            "title": 'Ms Office',
            "description": "I will be in trouble if I don't have experience here.",
            "grade": 75,
            "tags": [
                'it',
                'excel',
                'word',
            ]
        },
        {
            "id": 4,
            "title": 'Cloud Computing',
            "description": "Cloud Computing has become my daily life.",
            "grade": 75,
            "tags": [
                'it',
                'aws',
                'docker'
            ]
        },
        {
            "id": 5,
            "title": 'Editing',
            "description": "I prefer to do video editing.",
            "grade": 50,
            "tags": [
                'it',
                'premiere'
            ]
        },
        {
            "id": 6,
            "title": 'Cyber Security',
            "description": "I am very newbie in this.",
            "grade": 25,
            "tags": [
                'it',
                'network'
            ]
        }
    ]

    const response = {
        item: data.length,
        data: item ? (data.slice(0, item)) : (data)
    } 

    res.status(200).json(
        response
    )
}
