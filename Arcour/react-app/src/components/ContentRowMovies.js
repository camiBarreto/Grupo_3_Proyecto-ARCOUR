import React, { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

function ContentRowTop() {
    const [cardProps, setCardProps] = useState([
        {
            color: "primary",
            titulo: "Total Vuelos",
            valor: 0,
            icono: "fa-solid fa-plane-departure",
        },
        {
            color: "success",
            titulo: "Total Usuarios",
            valor: 0,
            icono: "fas fa-user",
        },
        {
            color: "warning",
            titulo: "Total Administradores",
            valor: 0,
            icono: "fa-solid fa-user-tie",
        }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Realiza la solicitud a la API de vuelos
                const apiFlight = "http://localhost:3001/api/flights";
                const flightResponse = await fetch(apiFlight);
                const flightsData = await flightResponse.json();

                // Realiza la solicitud a la API de usuarios
                const apiUser = "http://localhost:3001/api/users";
                const usersResponse = await fetch(apiUser);
                const usersData = await usersResponse.json();

                // Realiza la solicitud a la API de administradores
                const apiAdmin = "http://localhost:3001/api/admins";
                const adminsResponse = await fetch(apiAdmin);
                const adminsData = await adminsResponse.json();

                // Actualiza los valores de las tarjetas
                setCardProps([
                    {
                        ...cardProps[0],
                        valor: flightsData.count // Suponiendo que la API de productos devuelve la longitud en count
                    },
                    {
                        ...cardProps[1],
                        valor: usersData.count // Suponiendo que la API de usuarios devuelve la longitud en count
                    },
                    {
                        ...cardProps[2],
                        valor: adminsData.count // Suponiendo que la API de administradores devuelve la longitud en count
                    }
                ]);
            } catch (error) {
                console.error('Error al cargar datos de las APIs: ' + error);
            }
        };

        fetchData();
    }, []); // El segundo parámetro vacío [] asegura que useEffect se ejecute solo una vez al montar el componente

    return (
        <React.Fragment>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {cardProps.map((producto, index) => (
                    <SmallCard {...producto} key={index} />
                ))}
            </div>
        </React.Fragment>
    );
}

export default ContentRowTop;
