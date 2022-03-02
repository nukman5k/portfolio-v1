export default {
    name: 'testimonials',
    title: 'Testimonials',
    TYPE: 'document',
    fields: [{
        name: 'name',
        title: 'Name',
        type: 'string'
    },
    {
        name: 'company',
        title: 'Company',
        type: 'string'
    },
    {
        name: 'imageurl',
        title: 'imgURL',
        type: 'image',
        option: {
            hotspot: true  //allows you to crop the image
        }
    },
    {
        name: 'feedback',
        title: 'Feedback',
        type: 'string'
    }]
}


