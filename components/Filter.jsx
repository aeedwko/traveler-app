'use client'
import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

const Filter = ({ selectedCategory, minRating }) => {
  
  const [filterSelectedCategory, setFilterSelectedCategory] = useState(selectedCategory);
  const [filterMinRating, setFilterMinRating] = useState(minRating);
  const router = useRouter();

  const applyFilter = async () => {

      router.push(`/locations?minRating=${filterMinRating}&category=${filterSelectedCategory}`);
      
  };

  const handleChangeCategory = (event) => {
    const { value } = event.target;
    setFilterSelectedCategory(value);
  };

  const handleChangeRating = (event) => {
    const { value } = event.target;
    setFilterMinRating(value);
  };


  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6">Filter by category:</Typography>
      <Select
        label="Select Category"
        value={filterSelectedCategory}
        onChange={handleChangeCategory}
        fullWidth
      >
        <MenuItem value="All">All Categories</MenuItem>
        <MenuItem value="Park">Parks</MenuItem>
        <MenuItem value="Attraction">Tourist Attractions</MenuItem>
        <MenuItem value="Zoo">Zoos</MenuItem>
        <MenuItem value="Historical Landmark">Historical Landmarks</MenuItem>
        <MenuItem value="Museum">Museums</MenuItem>
        <MenuItem value="Gallery">Galleries</MenuItem>
        <MenuItem value="Shopping Mall">Shopping Malls</MenuItem>
      </Select>
      <Typography variant="h6" sx={{ mt: 2 }}>Minimum rating:</Typography>
      
      <TextField
        type="number"
        value={filterMinRating || ''}
        onChange={handleChangeRating}
        InputProps={{ inputProps: { min: 0, max: 5 } }}
        fullWidth
      />
      
      <Button onClick={applyFilter} variant="contained" sx={{ mt: 2 }}>Apply Filter</Button>
      
    </Box>
  );
};

export default Filter;