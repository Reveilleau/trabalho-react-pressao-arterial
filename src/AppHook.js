import { useState } from "react";

const AppHook = () => {
    const [sistolica, setSistolica] = useState('')
    const [diastolica, setDiastolica] = useState('')
    const [result, setResult] = useState('')
    
    const verificarPressao = () => {
        if (sistolica < 130 && diastolica < 85) {
            setResult('Pressão Normal')
        } else if (sistolica < 140 && diastolica < 90) {
            setResult('Pressão Normal - Limítrofe')
        } else if (sistolica < 160 && diastolica < 100) {
            setResult('Hipertensão Leve')
        } else if (sistolica < 180 && diastolica < 110) {
            setResult('Hipertensão Moderada')
        } else {
            setResult('Hipertensão Grave')
        }
    } 
    
    return (
        <div>
            <h1>Controle de Pressão Arterial</h1>
            
            Pressão sistólica: <br />
            <input type="number" name="sistolica" onChange={(event) => setSistolica(event.target.value)} />
            <br /><br />
            
            Pressão diastólica: <br />
            <input type="number" name="diastolica" onChange={(event) => setDiastolica(event.target.value)} />
            <br /><br />
            
            <input type="button" value="Verificar" onClick={verificarPressao} />
            <br /><br />
            
            {result}
    
        </div>
    )
}

export default AppHook
