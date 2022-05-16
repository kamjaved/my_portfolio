export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },

    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },

      
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },

    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string',
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string',
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
    name: 'tags',
    title: 'Tags',
     type:'array',
     of: [
       {
         name:'tag',
         title:'Tag',
         type:'string'
       }
     ]
    },

    {
      name: 'resposnibility',
      title: 'Responsibility',
       type:'array',
       of: [
         {
           name:'role',
           title:'Role',
           type:'string'
         }
       ]
      },
   
  ],
};