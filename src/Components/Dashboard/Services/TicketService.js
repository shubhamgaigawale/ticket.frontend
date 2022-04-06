import React, { useState } from 'react'
import axios from "axios";
import { toast } from "react-toastify";

function TicketService() {

    const TICKET_BASE_URL = 'http://localhost:8080/api/v1/ticket';


    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get(`${TICKET_BASE_URL}/all`)
            .then(
                (result) => {
                    setData(result.data);
                    console.log(result)
                }
            ).catch(error => {
                console.log(error);
            })
    }


    const handleDelete = (ticket_id) => {
        axios.delete(`${TICKET_BASE_URL}/delete/${ticket_id}`)
            .then((res) => {
                toast.success("Ticket has been deleted", {
                    position: "top-right",
                    autoClose: 2000,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                console.log(res);
                fetchData();
            })
    }

    return {
        data, fetchData, handleDelete, TICKET_BASE_URL
    }
}

export default TicketService