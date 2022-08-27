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

    onChangeInput(event) {
        const field = event.target.name
        this.setState({
            [field]: event.target.value
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

        this.setState({
            [field]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Controle de Pressão Arterial</h1>

                Pressão sistólica: <br />
                <input type="number" onChange={(event) => this.onChangeSistolica(event)} />

                <br /><br />

                Pressão diastólica: <br />
                <input type="number" onChange={(event) => this.onChangeDiastolica(event)} />

                <br /><br />

                <input type="button" value="Verificar"
                    onClick={() => this.verificarPressao()} />

                <br /><br />

                {this.state.result}
            </div>
        )
    }

}

export default App;
