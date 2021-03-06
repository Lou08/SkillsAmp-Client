import axios from 'axios';

class CheckpointService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: false // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  getAll =() => {
    return this.auth.get(`/checkpoint`)
    .then((data) => data )
  }

  getOne =(id) =>{
    return this.auth.get(`/checkpoint/${id}`)
    .then((data)=> data.data )
  }

  updateOne = (id, checkpoint ) =>{
    return this.auth.put(`/checkpoint/${id}`, checkpoint)
    .then((data)=> data )
  }

  createCheckpoint(assessments, finalAssessments){
    const date = new Date();
    const currentCheckpoint = true;

    return this.auth.post('/checkpoint', {date, currentCheckpoint, assessments, finalAssessments})
      .then(({ data }) => data);
  }
}

const checkpointService = new CheckpointService();

export default checkpointService;
