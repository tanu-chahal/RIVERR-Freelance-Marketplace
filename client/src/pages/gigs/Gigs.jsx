import React, {useEffect, useState, useRef } from 'react'
import './Gigs.scss'
import GigCard from '../../components/gigCard/GigCard.jsx';
import {useQuery} from '@tanstack/react-query'
import newRequest from '../../utils/newRequest.js';
import { useLocation, Link } from "react-router-dom";

function Gigs(){
    
    const [sort, setSort] = useState("sales")
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();
    const {search} = useLocation();

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ["gigs"],
        queryFn: () =>
         newRequest.get(`/gigs${search}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then((res) => {
            return res.data;
         }),
     });

    const reSort = (type) =>{
        setSort(type);
        setOpen(false);
    };

    useEffect(()=>{
        refetch();
    },[sort]);

    const apply = () =>{
        refetch();
    };

    return (
        <div className='Gigs'>
            <div className="container">
                <span className="breadcrumbs"><Link to="/" className="link">RIVERR </Link> &gt; {search.substring(5,search.length)} &gt;</span>
                <h1>AI Artists</h1>
                <p>Explore the boundaries of art and technology with Riverr's AI artists</p>
                <div className="menu">
                    <div className="left">
                       <span>Budget</span>
                       <input ref={minRef} type="text" placeholder='min'/>
                       <input ref={maxRef} type="text" placeholder='max'/>
                       <button onClick={apply}>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">Sort by</span>
                        <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
                        <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
                        { open && (<div className="rightMenu">
                            {sort==="sales" ? <span onClick={()=>reSort("createdAt")}>Newest</span> : (
                            <span onClick={()=>reSort("sales")}>Best Selling</span>)}
                            <span onClick={() => reSort("sales")}>Popular</span>
                            </div>)
                        }
                    </div>
                </div>
                <div className="cards">
                    {isLoading ? "loading..." : error ? "Something went wrong :(" : data.map(gig=> <GigCard key={gig._id} item={gig} />)}
                </div>
            </div>
        </div>
    );
};

export default Gigs;