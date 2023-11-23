import React, { useState } from 'react';
 // Pastikan file CSS di-import di sini
import styled from 'styled-components';

const AddMovie = (props) => {

  const{ movies, setMovies } = props

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [Link, setLink] = useState("");
  const [genre, setGenre] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    console.log(date);
  };

  const handleLink = (e) => {
    setLink(e.target.value);
    console.log();
  };

  const handleGenre = (e) => {
    setGenre(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(title === "" && date === "") { alert("title dan date kosong")}
    else if(title === "") { alert("title kosong")}
    else if(date === "") { alert("date kosong")}
    else if(genre === "") { alert("genre kosong")}
    else {
      const movie = {
        id: 4,
        title: title,
        date: date,
        image: Link,
        genre: genre
      }
      setMovies([...movies, movie])
      alert("Berhasil Menambahkan Movie Baru")
    }
  }

  const genreOpsi = ["Action", "Comedy", "Drama", "Sci-fi", "Action", "Romance", "Horror", "Sport"];
  return (  
   <AddMovieStyle>
     <div className="container">  
      <form className="addmovie" onSubmit={handleSubmit}>  
        <input placeholder="Masukkan Judul" className="addmovie__input" id="title" type="text" value={title} onChange={handleTitle}/> 
        <input placeholder= "Masukkan Link Gambar"className='addmovie__input' id="link" type="text" value={Link} onChange={handleLink}/>
        <input className="addmovie__date" id="date" type="date" value={date} onChange={handleDate} /> 
        <select className="addmovie__select" id="genre" value={genre} onChange={handleGenre} placeholder="Masukkan genre">

        <option value="" disabled>Pilih Genre</option>
             {genreOpsi.map((option, index) => (
            <option key={index} value={option}>{option}</option>
             ))}
        </select> 
        <button className="addmovie__button">Simpan</button> 

  </form>
</div>
   </AddMovieStyle>
  );
};


const AddMovieStyle = styled.div`

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  /* Form styling */
  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  label {
    margin-bottom: 10px;
  }
  
  input[type="text"],
  select {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    margin-bottom: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  /* Movie list styling */
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
  p {
    font-weight: bold;
    margin: 0;
  }
`
export default AddMovie;

