import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import ResultProporcao from "./ResultProporcao";

export default function Form() {
    const [gasolina, setGasolina] = useState(null);
    const [alcool, setAlcool] = useState(null);
    const [msgProporcao, setProporcao] = useState('Digite os valores');
    const [vlrProporcao, setVlrProporcao] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

 

    const calculaProporcao = () => {
        if (gasolina != null && alcool != null && gasolina > 0 && alcool > 0) {
            const proporcao = (alcool / gasolina).toFixed(2); // Calcula a proporção
            setVlrProporcao(proporcao);

            // Verifica se compensa álcool ou gasolina
            if (proporcao <= 0.7) {
                setProporcao('Compensa usar Álcool!');
            } else {
                setProporcao('Compensa usar Gasolina!');
            }

            setAlcool(null);
            setGasolina(null);
            setTextButton('Calcular Novamente');
        } else {
            setVlrProporcao(null);
            setTextButton('Calcular');
            setProporcao('Digite os valores corretamente');
        }
    };

    const handleInputChange = (text, setValue) => {
        // Permite apenas números e um ponto decimal
        const cleanedText = text.replace(/[^0-9.]/g, '');
        // Garante que haja no máximo um ponto decimal
        const parts = cleanedText.split('.');
        if (parts.length <= 2) {
            setValue(cleanedText);
        }
    };

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Digite os valores</Text>
                <Text style={styles.formLabel}>Álcool</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: 3.50"
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange(text, setAlcool)}
                    value={alcool}
                />
                <Text style={styles.formLabel}>Gasolina</Text>
                

                <TextInput
                    style={styles.input}
                    placeholder="Ex: 3.50"
                    keyboardType="decimal-pad"
                    onChangeText={(text) => handleInputChange(text, setGasolina)}
                    value={gasolina}
                />

<Text style={styles.formLabel}>Proporção</Text>
                

                <TextInput
                    style={styles.input}
                    placeholder="Ex: 3.50"
                    keyboardType="decimal-pad"
                    //onChangeText={(text) => handleInputChange(text, setGasolina)}
                    value={vlrProporcao}
                />

                <TouchableOpacity style={styles.button} onPress={calculaProporcao}>
                    <Text style={styles.textButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultProporcao msgResultProporcao={msgProporcao} vlrResultProporcao={vlrProporcao} />
        </View>
    );
}