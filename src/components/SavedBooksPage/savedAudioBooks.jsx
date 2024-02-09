import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function SavedAudioBooks() {
    const [audiobooks,setAudiobooks]=useState("")
  
    useEffect(() => {
        const audioData = new XMLHttpRequest()
        
        audioData.onload = () => {
            if (audioData.status === 200) { 
                setAudiobooks(JSON.parse(audioData.responseText));
              }
              else {
                console.log("error: " + audioData.status)
              }
            }
        

        audioData.open('GET','http://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6')
        audioData.send()
        console.log(audioData.status);
        
    })
    console.log(audiobooks); 
    return (
      <div>
            hello
    </div>
  )
}

export default SavedAudioBooks