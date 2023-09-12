import React from 'react'
import { useEffect ,useState} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import "D:/React/code/geograph/src/components/detail.css"
import { border } from '@mui/system';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  // console.log(Object.values(data.languages));
      
   //console.log( data.borders)
  // console.log(data.timezones[0])
function DetailRight({data}) {

const [flags, setFlags] = useState(); 
const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (id) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
    const data = await response.json();
    return data[0].flags.png;
  }

  useEffect(() => {
    const fetchDataForAllIds = async () => {
      const ids = data.borders; // Example array of IDs
      const dataPromises = ids.map(id => fetchData(id));
      const fetchedData = await Promise.all(dataPromises);
      setFlags(fetchedData);
    }
    fetchDataForAllIds();
  }, []);

  var flagStyle = {
    margin: 'block',
    borderRadius:"2px",
    width: '55px',
    height: '30px',
    paddingRight: "3px";
  }

  

console.log(flags)
if (isLoading) {
    return <p>Loading...</p>;
}
  return (
 
    <div className='Rigth'>
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
            <Grid item xs={18}>
            <Item>
                <div  className='MapItem'>
                    <h2>official Name</h2>
                    <h2>{data.name.official}</h2>
                </div>
            </Item>
            </Grid>

            <Grid item xs={18}>
            <Item>
                <div  className='MapItem'>
                    <h2>capital</h2>
                    <h2>{data.capital[0]}</h2>
                </div>
            </Item>
            </Grid>

            <Grid item xs={18}>
            <Item>
                <div  className='MapItem'>
                    <h2>currency</h2>
                    <h2>{Object.values(data.currencies)[0].name}</h2>
                </div>
            </Item>
            </Grid>

            <Grid item xs={18}>
            <Item>
                <div  className='MapItem'>
                    <h2>languages</h2>
                    <h2  className='multiple' >{Object.values(data.languages).map( (lang) =>(<p style={{paddingLeft:"7px"}}>{lang}</p>) )}</h2>
                </div>
            </Item>
            </Grid>

            <Grid item xs={18}>
            <Item>
                <div  className='MapItem'>
                    <h2>Neibhour</h2>
                    <h2  className='multiple' >
                    {flags.map( (flag) =>( <img style={flagStyle} src = {flag} alt="" />) )}
                    </h2>
                </div>
            </Item>
            </Grid>

        </Grid>
    </Box>
    </div>
  )
}

export default DetailRight