export default function handler(req: any, res: any) {
    const { item } = req.query

    const data = [
        {
            "id": 1,
            "title": 'Pumpkincraft',
            "description": 'A public minecraft server that has the Survival Mix genre.',
            "date_time": '1548982800000',
            "open_source": false,
            "tags": [
                'game',
                'server',
                'community'
            ]
        },
        {
            "id": 2,
            "title": 'Ender Dragon',
            "description": 'A Discord Bot that works to help the Pumpkin Project community.',
            "date_time": '1622509200000',
            "open_source": false,
            "tags": [
                'bot',
                'community'
            ]
        },
        {
            "id": 3,
            "title": 'Bunga Sofa Website',
            "description": 'Website for Service Shop and Sofa Manufacturer.',
            "date_time": '1643677200000',
            "open_source": true,
            "tags": [
                'website',
                'store'
            ]
        },
        {
            "id": 4,
            "title": 'Pumpkin Project Website',
            "description": 'A website for the Pumpkin Project community.',
            "date_time": '1654045200000',
            "open_source": false,
            "tags": [
                'website',
                'community'
            ]
        },
        {
            "id": 5,
            "title": 'LowScarlet Website',
            "description": 'A multifunctional personal website for me.',
            "date_time": '1668976816000',
            "open_source": false,
            "tags": [
                'website',
                'personal'
            ]
        },
        {
            "id": 5,
            "title": 'Etika Chat Website',
            "description": 'A website that helps you maintain good manners when chatting with superiors, lecturers and others.',
            "date_time": '1668976816000',
            "open_source": true,
            "tags": [
                'website',
                'application'
            ]
        },
    ].reverse()

    const response = {
        item: data.length,
        data: item ? (data.slice(0, item)) : (data)
    } 

    res.status(200).json(
        response
    )
}
