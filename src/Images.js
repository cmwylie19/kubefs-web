import { useEffect, useState } from "react";
import axios from 'axios'
import "./Images.css";

const filterPics = (pics, date) => {
  if(date !== ""){
    return pics.filter(pic => pic.Name.substring(0,date.length+1) === "A"+date)
  } else {
    return pics
  }
}
const fetchPics = async (setPics) => {
  axios.get('http://192.168.1.209:30099/list')
    .then(res => {
      res.data.map(pic => pic.Active = false)
      setPics(res.data)
    })
};

const setActive = (name, pics, setPics) => {
  pics.map(pic => {
    if (pic.Name === name) {
      pic.Active = true
    }
    return true
  })
  setPics(pics)
}
const setUnActive = (name, pics, setPics) => {
  pics.map(pic => {
    if (pic.Name === name) {
      pic.Active = false;
    }
    return true
  })
  setPics(pics)
}

const deletePic = (path, pics, setPics) => {
  axios.get('http://192.168.1.209:30099/delete/file' + path)
    .then(res => {
      if (res.data) {
        setPics(pics.filter(pic => pic.Path !== path));
      }
    })
}

function Images({date}) {
  const [pics, setPics] = useState(null);

  useEffect(() => {
    fetchPics(setPics);
    const interval = setInterval(() => {
      fetchPics(setPics);
    }, 10000);
    return () => clearInterval(interval);

  }, [date]);

  return (
    <>
      {filterPics(pics,date) && filterPics(pics,date).map((pic) =>
        <img
          alt={pic.Name}
          className="image"
          key={pic.Name}
          src={"http://192.168.1.209:30099" + pic.Path.replace("/media", "")}
          onClick={() => deletePic(pic.Path, pics, setPics)}
          onMouseOver={() => setActive(pic.Name, pics, setPics)}
          onMouseOut={() => setUnActive(pic.Name, pics, setPics)}
        />)}
    </>
  );
}

export default Images;
