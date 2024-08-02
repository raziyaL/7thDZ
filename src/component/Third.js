import React, {useEffect, useState} from 'react';
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "../store/Slice";

function ThirdTab() {



    const { users } = useSelector((state) => state.tabsSlice);
    const [error, setError] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const dispatch = useDispatch();

    const handleUserInfo = (data) => {
        if (data.password === data.secondPass) {
            dispatch(UserInfo(data));
            setError("");
            reset();
        } else {
            setError("Пароли не совпадают");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleUserInfo)} style={{ display: "flex", width: "700px", margin: "0 auto", justifyContent: "space-between" }}>
                <div>
                    <TextField
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <p>Заполните это поле</p>}
                </div>
                <div>
                    <TextField
                        type="password"
                        placeholder="Confirm Password"
                        {...register("secondPass", { required: true })}
                    />
                    {errors.secondPass && <p>Заполните это поле</p>}
                </div>
                <Button type="submit" style={{ height: "40px", marginTop: "10px" }}>Add</Button>
            </form>
            {error && <p>{error}</p>}

            {users && users.map((user, id) => (
                <div key={id} style={{ width: '300px', margin: "0 auto", border: "1px solid black", borderRadius: "10px", marginTop: "10px" }} >
                    <p>password: {user.password}</p>
                </div>
            ))}
        </div>
    );
}

export default ThirdTab;