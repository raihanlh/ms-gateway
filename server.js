const express = require('express');
const app = express();
const axios = require('axios');

const SERVICE_PORT = 9003;

const serviceConfig = {
    services: {
        msLogin: {
            serviceName: "login",
            serviceHost: "localhost",
            servicePort: 9002
        },
        msProfile: {
            serviceName: "profile",
            serviceHost: "localhost",
            servicePort: 9001
        },
        msRegister: {
            serviceName: "register",
            serviceHost: "localhost",
            servicePort: 9000
        }
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectService = (serviceConfig) => {
    const baseURL = `http://${serviceConfig.serviceHost}:${serviceConfig.servicePort}/${serviceConfig.serviceName}`;
    console.log(baseURL);
    const request = axios.create({
        baseURL
    })
    //console.log(request);
    return {
        request
    };
}

app.get('/profile', (req, res) => { //doesn't work
    // const service = connectService(serviceConfig.services.msProfile);
    // user = service.get;
    // console.log(service.get);
    // res.send(user);
})

app.listen(SERVICE_PORT, () => console.log("listening to port ", SERVICE_PORT));