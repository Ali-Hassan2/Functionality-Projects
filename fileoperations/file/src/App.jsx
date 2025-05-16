import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [title,settitle] = useState("");
  const [file,setfile] = useState("");

  const submithandling = async (e)=>{
    e.preventDefault();

    const formdata = new FormData();

    formdata.append('title',title)
    formdata.append('file',file)
    console.log(`The file info is: ${title}, ${file}`)


    const response = await axios.post("http://localhost:3000/upload-files", formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    }).catch(error => console.error("Error:", error.response));
    
  }


  return (
    <>
     <div className="form-class" onSubmit={submithandling}>
      <form action="" >
        <h1>Upload PDF</h1>
        <input type="text" placeholder='Enter Title ' onChange={(e)=>{settitle(e.target.value)}} required/>
        <br />
        <br />
        <input type="file" onChange={(e)=>{setfile(e.target.files[0])}} accept='application/pdf' required/>
        <br />
        <br />
        <br />
        <button type='submit'>upload</button>
      </form>

     </div>
    </>
  )
}

export default App
