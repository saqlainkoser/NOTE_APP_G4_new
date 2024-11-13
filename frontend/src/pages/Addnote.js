import React from 'react'
import Navbar from '../components/Navbar'

import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import Footer from '../components/Footer';
import Checkbox from '../components/Checkbox';


function Addnote() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
  const [check,setCheck] = useState(true);

  return (
    <>
      <Navbar/>
      <div className="addNotecon min-h-screen px-[50px]">
        <form action="" className='my-5'>
            <h3 className='m-0 p-0 text-2xl'>Create A New Note</h3>

            <div className="inputBox2 !block !bg-transparent">
                <label htmlFor="title" className='my-2'>
                    Enter A Note title
                </label>
                <input type="text" 
                className='w-full p-2 border border-gray-300 border- rounded-md mt-1 '  
                />
            </div>

            <div className="inputBox2 !block !bg-transparent">
                <label htmlFor="title" className='my-2'>
                    Enter A Note Description
                </label>
                <textarea type="text" 
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
        </form>
      </div>
        <Footer/>
    </>
  )
}

export default Addnote
