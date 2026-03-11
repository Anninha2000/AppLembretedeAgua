import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Meta({ navigation, setMeta }) {
  const [metaInput, setmetaInput] = useState('');
  const [peso,setPeso] = useState('');

const calculoMeta =()=>{
  const novoPeso = Number(peso);
    if(peso<0){
     alert('Digite um peso válido!')
   }
   else{
         const metaPeso=novoPeso*35;
         setMeta(metaPeso);
           setmetaInput(String(metaPeso)); 
      
   }
  setPeso('');
};

  const enviaMeta = () => {
  if(metaInput <0 ){
    alert('O valor digitado teve ser positivo. ');
  }
  
    else if (metaInput.trim()) {
      setMeta(Number(metaInput));
      navigation.navigate('paginaPrincipal');
    }

    setmetaInput('');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#e3f2fd', '#bbdefb', '#90caf9']}
        style={styles.background}
      />
      <View style={styles.containericone}>
        <LinearGradient colors={['#3b82f6', '#06b6d4']} style={styles.icone}>
          <Ionicons name="water-outline" size={50} color="white" />
        </LinearGradient>
      </View>
      <Text style={styles.titulo}>Bem-vindo ao{'\n'} VitaAqua</Text>
      <Text style={styles.descricao}>Configure sua meta diária</Text>

      <View style={styles.inputContainer}>
        <View style={styles.adicionar}>
          <View style={styles.logoInput}>
            <LinearGradient
              colors={['#3b82f6', '#06b6d4']}
              style={styles.icone1}>
              <Ionicons name="flag" size={24} color="white" />
            </LinearGradient>
          </View>
          <Text style={styles.subtitulo}> Meta diária</Text>
        </View>
        <Text style={styles.informacao}>
          Informe sua meta diária de água em mL
        </Text>
        <View style={styles.containerInput}>
          <Ionicons
            style={styles.iconeInput}
            name="water"
            size={20}
            color="#4A90E2"
          />
          <TextInput
            style={styles.input}
            placeholder="ex : 1000 mL"
            value={metaInput}
            onChangeText={setmetaInput}
            keyboardType="numeric"
          />
         
        </View>
         <Text style={styles.textoPeso}> Calcule sua meta com base no peso</Text>
  <View style={styles.containerPeso}>
    <View style={styles.containerInputCalculo}>
         <TextInput
            style={styles.inputPeso}
            placeholder="peso : 70kg"
            value={peso}
            onChangeText={setPeso}
            keyboardType="numeric"
          />
    
            <TouchableOpacity style={styles.botaoPeso} onPress={calculoMeta}>
            <LinearGradient
            colors={['#3b82f6', '#06b6d4']}
            style={styles.botaoGradientePeso}>
             <Text style={styles.botaoTexto}>Calcular</Text>
             </LinearGradient>
            </TouchableOpacity>
            </View>
              <Text style={styles.textoPeso}> Formula : 35ml x peso (kg)</Text>
            </View>
        <TouchableOpacity onPress={enviaMeta} style={styles.botao}>
          <LinearGradient
            colors={['#3b82f6', '#06b6d4']}
            style={styles.botaoGradiente}>
            <Text style={styles.botaoTexto}>Definir Meta</Text>
            <Ionicons
              name="arrow-forward"
              size={25}
              color="#ffffff"
              style={{ paddingLeft: 15 }}
            />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8FAFF',
  },
     background: {
    position:'absolute',
    right:0,
    left:0,
    bottom:0,
    top:0,
  },
  icone1: {
    width: 43,
    height: 43,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  containericone: {
    marginBottom: 14,
    marginTop: 40,
    alignSelf: 'center',
  },
  icone: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 90,
    borderRadius: 50,
  
    elevation: 5,
  },
  titulo: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 30,
    color: '#1e40af',
    fontWeight: '800',
    lineHeight: 50,
    marginBottom: 10,
  },
  descricao: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#1e40af',
    lineHeight: 25,
  },
  inputContainer: {
    marginHorizontal: 15,
    marginVertical: 40,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    elevation: 8,
  },
  adicionar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoInput: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e40af',
    
  },
  informacao: {
    color: '#1f2937',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 5,
    marginLeft: 5,
    marginTop: 20,
  },
  containerInput: {
    height: 47,
    marginTop: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F3F6',
    marginHorizontal: 15,
    borderRadius: 16,
    borderColor: '#E0E0E0',
    elevation: 2,
    borderWidth: 1,
    marginBottom:20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#1f2937',
  },
  iconeInput: {
    marginLeft: 10,
  },
 
  containerPeso:{
      alignItems:'center',
      justifyContent:'center',
      marginTop:20,
      backgroundColor:'#e1f5fe',
        padding: 20,
       
        borderRadius:20,
  },
  containerInputCalculo:{
      flexDirection:'row',
        gap:20,
        marginBottom:10,
  },
  inputPeso:{
     fontSize:15,
     height:50,
      borderWidth:1,
      borderRadius:16,
    color: '#0277bd',
    fontWeight: '500',
      backgroundColor: '#F1F3F6',
      paddingHorizontal: 25,
       borderColor: '#b3e5fc',
  },
  textoPeso:{
      fontSize: 16,
    color: '#0277bd',
    fontStyle: 'italic',
  },
    botaoPeso:{
       borderRadius: 16,
       overflow: 'hidden',
       
       
    },
    botaoGradientePeso:{
    paddingVertical: 12,
    paddingHorizontal: 15,
     alignItems: 'center',
    justifyContent: 'center',
     
    },
  botao: {
    marginTop: 20,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 6,
  },
  botaoGradiente: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  botaoTexto: {
    fontSize: 17,
    color: 'white',
    letterSpacing: 0.5,
    fontWeight: '700',
    paddingLeft: 10,
  },

});
