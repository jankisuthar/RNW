import React from 'react';
import { useForm } from "react-hook-form";

function FormValidation(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
        <>
            <div className="container mt-5">
                <form onSubmit={handleSubmit(onSubmit)} >
                <table className='table'>
                    <tr>
                        <td>Name:</td>
                        <td><input {...register("firstName", { required: true, maxLength: 20 })} />
                        
                        </td>
                    </tr>
                    <tr>
                        <td>Number:</td>
                        <td>  <input type="number" {...register("age", { min: 18, max: 99 })} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" className='form-control' id='pwd' /></td>
                    </tr>
                    <tr>
                        <td colSpan={2} align='center'><input type="submit" name='submit' value="submit" className='btn btn-primary text-dark' /></td>
                    </tr>
                </table>
                </form>
            </div>
        </>
    );
}

export default FormValidation;