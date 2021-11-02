import { CloseOutlined, SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import "./SearchBar.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { data } from "../Data";

// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.Topic.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className='search'>
      <div className='searchInputs'>
        <input
          type='text'
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className='searchIcon'>
          {filteredData.length === 0 ? (
            <SearchOutlined />
          ) : (
            <CloseOutlined id='clearBtn' onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className='dataResult'>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              // <a className='dataItem' href={value.link} target='_blank'>
              //   <p>{value.Topic} </p>
              // </a>

              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='140'
                    image={value.GameImage}
                    alt=''
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {value.Topic}
                    </Typography>
                    <Typography variant='p' color='text.secondary'>
                      {value.GameDescription}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
