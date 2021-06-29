import React from 'react'
import { useState, useEffect } from 'react';
import Catalogcards from '../components/cards'
import Slider from '../components/slider'
import '../components/cards.css'
import '../pages/home.css'
import SearchField from "react-search-field";
const Home=()=> {
    const [data,setdata]=useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [search, setSearch] = useState("");
    const getdata=async()=>{
        const res=await fetch('https://api.covid19india.org/data.json');
        const data= await res.json();
        console.log(data.statewise);
        setdata(data.statewise)
        
    }
   useEffect(()=>{
       getdata();
   },[])


   useEffect(() => {
    setFilteredCountries(
      data.filter((curr) =>
        curr.state.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

    return (
        <div className='home'>
            <Slider/>
            <p className='entry-title' >
                STATE WISE CASES TABLE
            </p>
            <div className='searchbar'>
            <input
                placeholder="Search State..."
                onChange={(e) => setSearch(e.target.value)}
                input="text"
                classNames="test-class"
                size="40"
                />
            </div>
            
            <div className='catalog-container' >
                {
                    filteredCountries.map((curr,index)=>{
                        return(
                            <Catalogcards  image='images/card1_amazon.jpg' state={curr.state} affected={curr.active} deaths={curr.deaths} recovered={curr.recovered} key={index}/>
                        )
                        
                    })
                }
            
            </div>
           



        </div>
    )
}

export default Home;
