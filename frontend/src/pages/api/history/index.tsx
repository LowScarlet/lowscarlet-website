export default function handler(req: any, res: any) {
    const data = [
        {
            "id": 1,
            "title": 'Learn Blender 3D',
            "description": 'Making 3D Models for minecraft rendering',
            "year": '2017',
            "icon": 'LocalLibrary',
            "icon_color": 'primary'
        },
        {
            "id": 2,
            "title": 'Learn Basic Pascal',
            "description": 'Create a mouse macro program',
            "year": '2018',
            "icon": 'DataObject',
            "icon_color": 'secondary'
        },
        {
            "id": 3,
            "title": 'Creating Minecraft Servers',
            "description": 'Building my first minecraft server',
            "year": '2019',
            "icon": 'DesignServices',
            "icon_color": 'primary'
        },
        {
            "id": 4,
            "title": 'Learn many languages',
            "description": 'Java, Javascript, Python & C++',
            "year": '2020',
            "icon": 'Javascript',
            "icon_color": 'secondary'
        },
        {
            "id": 5,
            "title": 'Learn full stack website developer',
            "description": 'Using framework Vue.js & Django',
            "year": '2021',
            "icon": 'Web',
            "icon_color": 'primary'
        },
        {
            "id": 5,
            "title": 'Become full Stack Junior Website Developer',
            "description": 'Learn the Next.js and Express.js Frameworks',
            "year": '2022',
            "icon": 'DeveloperMode',
            "icon_color": 'success'
        },
    ]

    const response = {
        data: data
    } 

    res.status(200).json(
        response
    )
}
