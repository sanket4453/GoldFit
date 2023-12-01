import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercise from '../components/SimilarExercise'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();
  
  useEffect(() => {
      const fetchExercisesData = async () => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailsData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions);
        setExerciseDetail(exerciseDetailsData);

        const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailsData?.name}`,youtubeOptions);
        setExerciseVideos(exerciseVideoData.contents);

        const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,exerciseOptions);
        setTargetMuscleExercises(targetMuscleExerciseData);

        const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`, exerciseOptions);
        setEquipmentExercises(equipmentExercisesData);

      }
      fetchExercisesData();
  
   
  }, [id])
  
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercise 
      targetMuscleExercises={targetMuscleExercises}
      equipmentExercises={equipmentExercises} 
       />
    </Box>
  )
}

export default ExerciseDetail