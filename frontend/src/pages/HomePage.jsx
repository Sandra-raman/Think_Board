import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import NoteCard from '../Components/NoteCard';
import api from '../lib/axios';
import NotesNotFound from '../Components/NoteNotFound.jsx';
const HomePage = () => {
  const [notes,setNotes]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const fetchNotes=async()=>{
      try {
        const res=await api.get("/notes");
        setNotes(res.data);
        
      } catch (error) {
        console.log("error fetching Notes");
        
      }
      finally {
      setLoading(false);
    }
    };
    fetchNotes();
  },[]);
  return (
    
    <div className='min-h-screen'>
      <Navbar/>
      <div className='max-w-w07x1 mx-auto p-4 mt-6'>
  {loading && <div className='text-center\ text-primary py-10'>Loading Notes</div>}
  {notes.length===0  && <NotesNotFound/>}
  <div className="grid border-s-black p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {notes.map((note) => (
      <NoteCard key={note._id} note={note} setNotes={setNotes}/>
    ))}
  </div>
</div>
    </div>


  )
}

export default HomePage