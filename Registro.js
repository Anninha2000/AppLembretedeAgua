import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View,
 ScrollView,
 Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CircularProgress } from 'react-native-circular-progress';


export default function Registro({ registros, setRegistros, meta,setMeta }) {
 const [registro, setRegistro] = useState('');
 const [hora, setHora] = useState('');
 const [consumida, setConsumida] = useState(0);
 const [modalVisivel,setModalVisivel] = useState(false);
 const [novaMeta,setnovaMeta] = useState('');


 const restante = meta - consumida;
 const porcentagem = Math.min(100, (consumida / meta) * 100);
 const enviaRegistro = () => {
   if (registro.trim() && hora.trim()) {
     const agua = parseInt(registro);
     const novoRegistro = {
       id: Date.now().toString(),
       consumo: agua,
       horario: hora,
       data: new Date().toLocaleDateString(),
     };


     setRegistros([...registros, novoRegistro]);
     setConsumida(consumida + agua);
     setRegistro('');
     setHora('');
   }
 };

 const metaNova =()=>{
      const valor = parseInt(novaMeta);
      setMeta(valor);
      setModalVisivel(false);
      setConsumida(0);
      setnovaMeta('');
 };

  const fecharModal = () => {
    setModalVisivel(false);
   
  };
 return (
  
    <LinearGradient
       colors={['#e3f2fd', '#bbdefb', '#90caf9']}
       style={styles.container}
     >
   <ScrollView showsVerticalScrollIndicator={false}>
    
     <Modal  animationType="fade"
        transparent={true}
        visible={modalVisivel}
           onRequestClose={fecharModal}
       >

        <View style={styles.modal}>
        <View style={styles.modalContainer}>

            <Text style={styles.textoNovameta}> Defina sua nova meta</Text>

            <TextInput  value={novaMeta}
            onChangeText={setnovaMeta} style={styles.inputModal}/>

            <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoModal} onPress={metaNova}>
            <Text style={styles.textobotaoModal}> Salvar</Text>
           
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoModal} onPress={fecharModal}>
            
            <Text style={styles.textobotaoModal}> Cancelar</Text>
           
            </TouchableOpacity>
            </View>
        </View>
        </View>
     </Modal>
    
     <View style={styles.header}>
       <View style={styles.textoHeader}>
         <Text style={styles.titulo}>Vita Aqua</Text>
         <Text style={styles.subtitulo}>Adicione seu consumo diario</Text>
       </View>
       <View style={styles.iconeContainer}>
         <LinearGradient colors={['#3b82f6', '#06b6d4']} style={styles.icone}>
           <Ionicons name="water-outline" size={41} color="white" />
         </LinearGradient>
       </View>
     </View>






     <View style={styles.barraCircularContainer}>
      <View style={styles.grafico}>
       <CircularProgress
         size={210}
         width={15}
         fill={porcentagem}
         tintColor={porcentagem >= 100 ? '#4CAF50' : '#2196F3'}
         backgroundColor="#E6F2F8"
        
       >
         {() => (
           <View style={styles.textoCircularContainer}>
             <Text style={styles.textoCircularPercentual}>
               {Math.round(porcentagem)}%
             </Text>
             <Text style={styles.textoCircularMeta}>
                da média diária
             </Text>
           </View>
         )}
       </CircularProgress>
       </View>
      
       <View style={styles.linhaTexto}>
         {consumida >= meta && (
           <Text style={styles.textoMetaCompleta}> ✅ Meta atingida!</Text>
         )}
       </View>
     </View>


     <View style={styles.consumoContainer}>
       <View style={styles.containerCOnsumo}>
         <View style={styles.item}>
          <LinearGradient style = { styles.iconeCalculo } colors={['#3b82f6', '#06b6d4']}  >
           <Ionicons name="time-outline" size={28} color="white" />
           </LinearGradient>
           <Text style={styles.calculoText}>Restante</Text>
             {restante < 0 || restante == 0 ? (
              <Text style = {styles. textoMeta}> Meta Cumprida !!</Text>
             ) : (
             <Text style={styles.calculoResultado}>{restante} mL</Text>
                )}
         </View>
         <TouchableOpacity 
         onPress={()=> setModalVisivel(true)}>
        
         <View style={styles.item}>
          <LinearGradient style = { styles.iconeCalculo } colors={['#3b82f6', '#06b6d4']}  >
           <Ionicons name="flag-outline" size={25} color="white" />
           </LinearGradient>
           <Text style={styles.calculoText}>Meta</Text>
           <View style={styles.metaContainer}>
           <Text style={{fontSize:20}}>🎯</Text>
          <Text style={styles.calculoResultado}>{meta} mL</Text>
          </View>
            <Text style={{color:'blue', fontWeight:'600', marginTop:5, fontSize:12}}>toque p/editar </Text>
          </View>
        
          </TouchableOpacity>
         <View style={styles.item}>
         <LinearGradient style = { styles.iconeCalculo } colors={['#3b82f6', '#06b6d4']}  >
           <Ionicons name="pint-outline" size={25} color="white" />
           </LinearGradient>
           <Text style={styles.calculoText}>Consumida</Text>
           <Text style={styles.calculoResultado}>{consumida} mL</Text>
         </View>
       </View>
     </View>






     <View style={styles.secao}>
       <View style={styles.adicionar}>
         <View style={styles.iconeAdiocionar}>
           <Ionicons name="add-circle" size={24} color="#4A90E2" />
         </View>
         <Text style={styles.subtitulo}> Adicione seu Registro</Text>
       </View>
       <View style={styles.registro}>
         <View style={styles.input}>
           <Ionicons
             name="water"
             size={18}
             color="#4A90E2"
             style={styles.iconInput}
           />
           <TextInput
             value={registro}
             onChangeText={setRegistro}
             placeholder="Quantidade (mL)"
             keyboardType="numeric"
             style={styles.inputText}
           />
         </View>
         <View style={styles.input}>
           <Ionicons
             style={styles.iconInput}
             name="time"
             size={20}
             color="#4A90E2"
           />
           <TextInput
             value={hora}
             onChangeText={setHora}
             placeholder=" 14:50"
             placeholderTextColor="#999"
             style={[styles.inputText, {marginLeft:5}]}
           />
         </View>
       </View>


       <TouchableOpacity style={styles.button} onPress={enviaRegistro}>
         <LinearGradient colors={['#3b82f6', '#06b6d4']} style={styles.botao}>
           <Ionicons
             name="add-circle-outline"
             size={20}
             color="white"
             style={{ marginRight: 8 }}
           />
           <Text style={[styles.textoBotao, { fontWeight: 'bold', color: 'white' }]}>
             Registrar
           </Text>
         </LinearGradient>
       </TouchableOpacity>
     </View>

 
     
     </ScrollView>
       </LinearGradient>
 
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#F8FAFF',
 },
 header: {
   marginTop:30,
   flexDirection: 'row',
   alignItems: 'center',
    padding: 8,
 },
 iconeContainer: {
   marginLeft: 'auto',
   marginRight: 'auto',
   alignItems: 'center',
 },
 metaContainer:{
   flexDirection:'row',
   gap:5,
 },
 icone: {
   alignItems: 'center',
   justifyContent: 'center',
   width: 75,
   height: 75,
   borderRadius: 50,
 
   elevation: 5,
 },
 titulo: {
   color: '#3b82f6',
   fontSize: 27,
   padding: 15,
   fontWeight: 'bold',
   letterSpacing: 0.5,
 },
 subtitulo: {
   fontSize: 20,
   marginLeft: 10,
   color: '#1e40af',
   fontWeight: '700',
   marginTop: 5,
   marginBottom: 8,
 },
 consumoContainer: {
   borderRadius: 10,
   borderColor: '#E0E0E0',
   marginHorizontal: 15,
   padding: 15,
   marginTop: 10,
   marginBottom: 20,
 },
 containerCOnsumo: {
   flexDirection: 'row',
   justifyContent: 'space-between',
 },
 item: {
   backgroundColor:'#e0f2fe',
   justifyContent: 'center',
   alignItems: 'center',
   minWidth: '30%',
   padding: 15,
   borderRadius: 12,
   
 },
 iconeCalculo:{
   width:55,
   height:55,
   borderRadius:25,
   alignItems: 'center',
   justifyContent: 'center'


 },
 calculoText: {
   color: '#666',
   fontSize: 12,
   marginTop: 5,
   marginBottom: 3,
   fontWeight: 'bold',
 },
 calculoResultado: {
   fontWeight: 'bold',
   color: '#2c3e50',
   fontSize: 21,


 },
  textoMeta : {
     fontSize:16,
     fontWeight:'600',
     textAlign:'center'
     
 },
 barraCircularContainer: {
   marginVertical:20,


   padding:16,
    justifyContent:'center',
    alignItems:'center',
  
  },
 grafico:{
     backgroundColor: 'white',
   borderRadius: 120,
     alignItems: 'center',
   justifyContent: 'center',
    padding: 15,
  

   elevation: 8,
 },
 textoCircularContainer: {
   alignItems: 'center',
   justifyContent: 'center',
 },
 textoCircularPercentual: {
   fontSize: 36,
   fontWeight: 'bold',
   color: '#2c3e50',
 },
 textoCircularMeta: {
   fontSize: 16,
   color: '#666',
   marginTop: 5,
 },
  linhaTexto: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 15,
   width: '100%',
 },


 textoMetaCompleta: {
   color: '#388E3C',
   fontWeight: 'bold',
   fontSize: 16,
   marginLeft: 10,
 },


 secao: {
   marginHorizontal: 15,
   marginVertical: 16,
   borderColor: '#E0E0E0',
   backgroundColor: '#FFFFFF',
   borderRadius: 20,
   padding: 25,
   elevation: 8,
 },
 adicionar: {
   flexDirection: 'row',
   marginBottom: 10,
   alignItems: 'center',
 },
 iconeAdiocionar: {
   width: 40,
   height: 40,
   backgroundColor: 'rgba(102, 126, 234, 0.1)',
   borderRadius: 20,
   alignItems: 'center',
   justifyContent: 'center',
 },
 registro: {
   flexDirection: 'row',
   gap: 10,
 },
 input: {
   flex: 1,
   flexDirection: 'row',
   alignItems: 'center',
   borderWidth: 1,
   borderRadius: 16,
   paddingHorizontal: 5,
   marginTop: 6,
   width: '50%',
   height: 50,
   borderColor: '#E0E0E0',
   backgroundColor: '#F1F3F6',
   elevation: 2,
 },
 inputText: {
   flex: 1,
   paddingVertical: 12,
   fontSize: 15,
   borderColor: '#E0E0E0',
   borderRadius: 16,
 },
 botao: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   paddingVertical: 16,
   marginTop: 20,
   borderRadius: 16,
   padding: 12,
   paddingHorizontal: 24,
 },
 textoBotao: {
   fontSize: 17,
   letterSpacing: 0.5,
   fontWeight: '700',
   paddingLeft: 10,
   color: '#4A90E2',
 },
 modal:{
   flex:1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
     justifyContent:'center',
     alignItems:'center',
 },
 modalContainer:{
   width:'80%',
    backgroundColor: '#FFFFFF',
      borderRadius:20,
      padding:25,
    elevation: 10,
    overflow:'hidden'

 },
 textoNovameta:{
     fontSize:17,
      fontWeight:'bold'
 },
 botoes:{
   marginTop:20,
     flexDirection:'row',
     gap:15,
     width:'100%',
     justifyContent:'space-between'

 },
 botaoModal:{
   flex:1,
    borderRadius:16,
    paddingVertical:12,
    backgroundColor:'#3b82f6',
    justifyContent:'center',
     alignItems:'center',
 },
 textobotaoModal:{
    fontSize:18,
    fontWeight:'600',
    color:'white', 
    
 },
 inputModal:{
     height:40,
    borderWidth:1,
    borderColor:'#DDD',
    borderRadius:12,
    marginTop:10,
    marginHorizontal:20,
    padding:10,
    fontSize:16,
    color:'#333',
 }
});

