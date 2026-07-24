    export const login = async (
        email: string,
        password: string
    ) => {
        const response =
            await fetch(
                "http://localhost:3000/auth/login",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':
                            'application/json'
                    },
                    body:

                        JSON.stringify({
                            email,
                            password
                        })
                }
            );//cierra función fetch
        return response.json();
    };

    export const register=async(
        email:string,
        password:string,
        role:string
    )=>{
        const response =
            await fetch(
                "http://localhost:3000/users",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':
                            'application/json'
                    },
                    body:

                        JSON.stringify({
                            email,
                            password,
                            role
                        })
                }
            );//cierra función fetch
        return response.json();
    }

