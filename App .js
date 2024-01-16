const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
const  port  = 3000;
app.get('/',(req,res)=>{
    res.send('Welcome to contact page:')
})
app.get('/contact',(req,res)=>{
    res.json({addr:'welcome to contact page:'})
})
app.get('/address',(req,res)=>{
    res.send('Address page:');
})
app.get('/about',(req,res)=>{
    res.json({val:'This is about page:',cal:'use for calculation:',add:'it is use for addition'})
})
//array of image ..
app.get('/card',(req,res)=>{
   res.json([
    {pic:"https://images.indianexpress.com/2023/02/Collage-Maker-16-Feb-2023-03.46-PM.jpg",
     details:"bollywood",
     name:"kareen kapoor",
     gender:"female",
      genre:"comedy"},
  
    {pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpruDIwzefHdg25SL6Uml9n98j_fK7TH5OZg&usqp=CAU",
    details:"hollywood",
    name:"scarlett johnson",
     gender:"female",
    genre:"action"
  },
  
    {pic:"https://www.geo.tv/assets/uploads/updates/2023-05-18/488129_6992704_updates.jpg",
     name:"charlize theron", 
     details:"hollywood",
     gender:"female",
      genre:"action"
    },
  
     {
      pic:"https://www.investopedia.com/thmb/1ajxMWoaqbSxXSyeqRwgcBICZWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1447271928-6e46d5f45a824f428116f3cf4c38725f.jpg",
      details:"hollywood",
      name:"ryan renolds",
      gender:"male",
      genre:"comedy"
     },
     {
      pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGe7t710RRgWI5i18kE0eZbQSsFN1wIwdFg&usqp=CAU",
      details:"hollwood",
      name:"scott adkins",
      gender:"male",
      genre:"action"
  
     },
     {
      pic:"https://www.hollywoodreporter.com/wp-content/uploads/2020/08/gettyimages-971538646.jpg?w=1296",
      details:"hollywood",
      name:"annebelle wallis",
      gender:"female",
      genre:"horror"
     },
     {
      pic:"https://images.hindustantimes.com/img/2022/06/25/1600x900/INDIA-ENTERTAINMENT-CINEMA-BOLLYWOOD-8_1655467627838_1656164167083.jpg",
      details:"bollywood",
      name:"shah rukh khan",
      gender:"male",
      genre:"romance"
     },
     
     {
       pic:"https://imageio.forbes.com/blogs-images/zackomalleygreenburg/files/2015/06/0626_celeb100-jackie-chan_1200x675.jpg?format=jpg&width=1200",
       details:"chinawood",
       name:"jackie chan",
       gender:"male",
       genre:"comedy"
     },
     {
       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0FYoIvIpx6MbsdEHjpzm0RrJOfWaNnjqbA&usqp=CA",
       details:"chinawood",
       name:"wu jing",
       gender:"male",
       genre:"action"
     },
    
     {
       pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlx6W-h6owSk-mj7mal5FnxLNYJEC6eBw03g&usqp=CAU",
       details:"chinawood",
       name:"michelle yeoh",
       gender:"female",
       genre:"horror"
     },
     {
       pic:"https://images.indianexpress.com/2023/02/salmankhan1200.jpg",
       details:"bollywood",
       name:"salman khan",
       gender:"male",
       genre:"action"
     },
     {
       pic:"https://igimages.gumlet.io/tamil/home/rashmika-vijaydevarakonda2972022m4.jpg?w=376&dpr=2.6",
       details:"bollywood",
       name:"vijay devarkonda",
       gender:"male",
       genre:"action"
     },
     {
       pic:"https://images.indianexpress.com/2015/06/tiger-shroff-4809.jpg",
       details:"bollywood",
       name:"tiger shroff",
       gender:"male",
       genre:"action"
     }
    
    
   ])
})
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)

})