export default{

 
  name:'experiences',
  title:'Experiences',
  type: 'document',

  fields:[

    {
      name:'manner',
      title:'Manner',
      type: 'number',
    },
    
      {
          name:'year',
          title:'Year',
          type:'string'
      },
      {
          name:'works',
          title:'Works',
          type:'array',
          of:[{ type:'workExperience'}]
      },
  ]
}