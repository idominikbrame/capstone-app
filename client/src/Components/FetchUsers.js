import React, {useState, useEffect} from 'react';


const FetchUsers = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            fetch("http://localhost:4000/aws")
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                })
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        // eslint-disable-next-line
        fetchUser()
    }, []);
    return data

};

export default FetchUsers;