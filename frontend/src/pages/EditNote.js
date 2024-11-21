import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import Footer from '../components/Footer';
import Checkbox from '../components/Checkbox';
import { useNavigate, useParams } from 'react-router-dom';


function EditNote() {
  const editor = useRef(null);
	const [content, setContent] = useState('');
  const [check,setCheck] = useState(true);

  const [title,setTitle] = useState();
  const [description,setDesc] = useState();
  const [isImportant,setIsImportant] = useState(false);
  const [uploadedBy,setUploadedBy] = useState("shaan");
  // const [content,setContent] = useState(false);
  let navigate = useNavigate();
    let {id} = useParams()

//function to submit the form
const submitForm = (e) =>{
  e.preventDefault();
  let res = fetch("http://localhost:8000/updateNote",{
    method: "POST",
    mode:"cors",
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify({
      noteId:id,
      title:title,
      description:description,
      content:content,
      isImportant:isImportant,
      uploadedBy:uploadedBy
    })
  }).then(response => response.json()).then(data=>{
    console.log(data);
    if(data){
      alert("Note Updated Successfully");
      navigate("/");
    }else{
      alert("Error while adding note");
    }
  })
}

const getNote = () =>{
    let res = fetch("http://localhost:8000/getNote",{
        method: "POST",
        mode:"cors",
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify({noteId:id})
    }).then(response=>response.json()).then(data=>{
        setTitle(data.title);
        setDesc(data.description);
        setContent(data.content);
        setIsImportant(data.isImportant);
    });
}

useEffect(()=>{
    getNote()
},[])

  return (
    <>
      <Navbar/>
      <div className="EditNotecon min-h-screen px-[50px]">
        <form onSubmit={submitForm}  action="" className='my-5'>
            <h3 className='m-0 p-0 text-2xl'>Edit Note</h3>

            <div className="inputBox2 !block !bg-transparent">
                <label htmlFor="title" className='my-2'>
                    Enter A Note title
                </label>
                <input type="text" 
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className='w-full p-2 border border-gray-300 border- rounded-md mt-1 '  
                />
            </div>

            <div className="inputBox2 !block !bg-transparent">
                <label htmlFor="title" className='my-2'>
                    Enter A Note Description
                </label>
                <textarea type="text"
                onChange={(e) => setDesc(e.target.value)}
                value={description} 
                className='w-full p-2 border border-gray-300 border- rounded-md mt-1'  
                required
                />
            </div>

            <Checkbox check={check} setCheck={setCheck} title="isImportant"   />


            <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
			onChange={newContent => setContent(newContent)}
		/>
    <br/>
    <button type="submit" className='btnNormal'>Update Note</button>
        </form>
      </div>
        <Footer/>
    </>
  )
}

export default EditNote
