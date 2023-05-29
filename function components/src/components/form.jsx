import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState, useEffect } from 'react';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

function FormSignUp (props){
    const { handleSubmit} = props;
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);
    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: "Deben ser al menos 3 caracteres" //Helpertext
        },
    })

  //  useEffect(() => {

   // }, [name]) Esto hace que cuando detecta un cambio en name, realiza la función
   
   function validarNombre(nombre) {
    if(nombre.length >= 3) {
        return {
            name: {
                error: false, 
                message: "",
            },
        }
    }else {
        return {
        name: {
            error: true, 
            message: "Deben ser al menos 3 caracteres"
        },
    }
   }
} 

   return <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit({
                    name,
                    lastName,
                    email,
                    prom,
                    nov,
                })}}>
        <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth margin="normal"
        onChange={(e) => setName(e.target.value)}
        value={name}
        error={errors.name.error}
        helperText={
            errors.name.error 
                ? errors.name.message 
                : ""
        }
        onBlur={(e) => {
            setErrors(
                validarNombre(
                    e.target.value
                     ))
        }}
        />

        <TextField
        id="apellido"
        label="Apellido/s"
        variant="outlined"
        fullWidth 
        margin="normal"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        />

        <TextField
        id="correo"
        label="Correo"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />

        <FormGroup>
            <FormControlLabel
            control={<Switch
            //defaultChecked Esto al inicio sería para tener un default; ahora con checked recibe el estado true o false
            checked={prom}
                onChange={(e) => setProm(e.target.checked)}/>} //No es .value por que checked espera true o fals
            label="Promociones" />
            <FormControlLabel
            control={<Switch
                //defaultChecked Esto al inicio sería para tener un default; ahora con checked recibe el estado true o false
                color="secondary"
                checked={nov}
                onChange={(e) => setNov(e.target.checked)} 
                />}
            label="Novedades"
            />
        </FormGroup>
        <Button
        variant="contained"
        type="submit">
            Registro
        </Button>
    </form>
}

export default FormSignUp