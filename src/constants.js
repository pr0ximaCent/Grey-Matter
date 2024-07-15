// import process from 'process';
import.meta.env.MODE === 'development' ? console.log('Development mode') : console.log('Production mode');
const constant_data ={
    "backend_url": "http://localhost:3000"
}

if(import.meta.env.MODE === 'production'){
    constant_data.backend_url = "https://beta.vectorclasses.net"
}

export default constant_data;