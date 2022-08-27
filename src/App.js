import React from "react";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            sistolica: null,
            diastolica: null,
            result: ''
        }
    }

    onChangeSistolica(event) {
        this.setState({
            sistolica: event.target.value
        })
    }

    onChangeDiastolica(event) {
        this.setState({
            diastolica: event.target.value
        })
    }

    verificarPressao() {
        let resultPressao;
        const { sistolica, diastolica } = this.state

        if (sistolica < 130 && diastolica < 85) {
            resultPressao = 'Normal'
        } else if (sistolica < 140 && diastolica < 90) {
            resultPressao = 'Normal - Limítrofe'
        } else if (sistolica < 160 && diastolica < 100) {
            resultPressao = 'Hipertensão Leve'
        } else if (sistolica < 180 && diastolica < 110) {
            resultPressao = 'Hipertensão Moderada'
        } else {
            resultPressao = 'Hipertensão Grave'
        }
        console.log(resultPressao)
        this.setState({
            result: resultPressao
        })
    }

    onChangeInput(event) {
        const field = event.target.name
        this.setState({
            [field]: event.target.value
        })
    }

    showResult() {
        if (this.state.result !== '') {
            return <p>Seu diagnóstico é: {this.state.result}</p>
        }

        return null
    }

    render() {
        return (
            <div>
                <h1>Controle de Pressão Arterial</h1>

                Pressão sistólica: <br />
                <input type="number" name="sistolica" onChange={(event) => this.onChangeInput(event)} />

                <br /><br />

                Pressão diastólica: <br />
                <input type="number" name="diastolica" onChange={(event) => this.onChangeInput(event)} />

                <br /><br />

                <input type="button" value="Verificar"
                    onClick={() => this.verificarPressao()} />

                <br /><br />
                
                { this.showResult() }

            </div>
        )
    }

}

export default App;
