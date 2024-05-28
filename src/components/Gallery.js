
import './Gallery.css'
import List from './List'
import img1 from '../Images/dogimg1.jpg'
import img2 from '../Images/dogimg2.jpg'
import img3 from '../Images/dogimg3.jpg'
import img4 from '../Images/dogimg4.jpg'
import img5 from '../Images/dogimg5.jpg'
import img6 from '../Images/dogimg6.jpg'
import img7 from '../Images/dogimg7.jpg'
import img8 from '../Images/dogimg8.jpg'

const DogItems = [
{
   id: 1,
   dogImage: img1,
   itemTitle: `Julie's Rabbit Bars`
},
{
   name: 2,
   dogImage: img2,
   dogTitle: `The Innocent Look`
},
{
    name: 3,
    dogImage: img3,
    dogTitle: `Big Eyed Buggy`
},
{
    name: 4,
    dogImage: img4,
    dogTitle: `The Saint Doggo`
},
{
    name: 5,
    dogImage: img5,
    dogTitle: `Big Eyed Buggy`
},
{
    name: 6,
    dogImage: img6,
   itemTitle: `The Saint Doggo`
},
{
    name: 7,
    dogImage: img7,
    dogTitle: `Big Eyed Buggy`
},
{
    name: 8,
    dogImage: img8,
    dogTitle: `Julie's Rabbit Bars`
},

]


function Gallery(){
    return(
        
        <div className="imagegallery">
            {
                DogItems.map((image)=>{
                    return(
                        <List key={image.name} Image={image.dogImage} Title={image.dogTitle}></List>
                    )
                })
            }
        </div>
        
    )
}

export default Gallery;
