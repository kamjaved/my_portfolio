export default{
  name:'skills',
  title:'Skills',
  type: 'document',
  fields:[
      {
          name:'name',
          title:'Name',
          type:'string'
      },
      {
        name:'rating',
        title:'Rating',
        type:'number'
    },
      {
          name:'bgColor',
          title:'BgColor',
          type:'string'
      },
      {
          name:'icon',
          title:'Icon',
          type: 'image',
          options: {
            hotspot: true,
          },
      },
      
  ]
}