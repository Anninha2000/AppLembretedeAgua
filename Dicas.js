import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function Dicas() {
  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['#e3f2fd', '#bbdefb', '#90caf9']}
        style={styles.background}
      />
      <View style={styles.headerContainer}>
        <View style={styles.headerTexto}>
          <Text style={styles.titulo}>Dicas de Hidratação</Text>
          <Text style={styles.subtitulo}>
            Guia completo para  manter-se hidratado
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <LinearGradient colors={['#3b82f6', '#06b6d4']} style={styles.icone}>
            <Ionicons name="water" size={32} color="white" />
          </LinearGradient>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.textoContainer}>
         <View style={styles.info}>
           <LinearGradient
              colors={['#3b82f6', '#06b6d4']}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
            <Ionicons name="flask" size={24} color="white" />
          
            </LinearGradient>
            <Text style={styles.infoTitulo}>Quanto devo beber?</Text>
          </View>
          <Text style={styles.infoTexto}>
            Para saber quanto de água você deve beber por dia, multiplique seu peso (em kg) por 35ml.
            {'\n'}
            <Text style={styles.calculoText}>Exemplo:</Text> Se você pesa 70kg:
            {'\n'}70kg × 35ml = 2.450ml (cerca de 2,5 litros por dia).
            {'\n'}
          </Text>
        </View>
        <View style={styles.textoContainer}>
          <View style={styles.info}>
            <LinearGradient
              colors={['#3b82f6', '#06b6d4']}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
            <Ionicons name="body" size={24} color="white" />
            </LinearGradient>
            <Text style={styles.infoTitulo}>Sinais de desidratação</Text>
          </View>
          <Text style={styles.infoTexto}>
            Fique atento a sinais como sede intensa, boca seca, fadiga, tontura
            e urina escura. Esses sintomas indicam que seu corpo precisa de mais
            líquidos.
          </Text>
        </View>
        <View style={styles.textoContainer}>
          <View style={styles.info}>
            <LinearGradient
              colors={['#3b82f6', '#06b6d4']}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center', 
              }}>
            <Ionicons name="leaf" size={24} color="white" />
            </LinearGradient>
            
            <Text style={styles.infoTitulo}>
              Dicas para se manter hidratado
            </Text>
          </View>
          <Text style={styles.infoTexto}>
            Leve sempre uma garrafa de água com você, especialmente em dias
            quentes ou durante atividades físicas. Consuma alimentos ricos em
            água, como frutas e vegetais, e evite bebidas diuréticas como café e
            álcool.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFB',
    padding: 10,
  },
    background: {
    position:'absolute',
    right:0,
    left:0,
    bottom:0,
    top:0,
  },
  headerContainer: {

    flexDirection: 'row',
   paddingVertical: 50,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
 headerTexto:{
   flex:1,
    
    justifyContent: 'space-between',
    alignItems: 'center',
 },
  iconContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  icone: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 66,
    height: 66,
    borderRadius:40,
    elevation: 5,
  },

  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1e40af',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  subtitulo: {
    fontSize: 17,
    color: '#6b7280',
    fontWeight: '500',
    marginTop: 5,
    lineHeight:24,
    marginLeft:12,
  },

  textoContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 25,
    elevation: 8,
  },
  info: {
    flexDirection: 'row',
    gap: 23,
    borderBottomWidth:1,
    paddingBottom: 15,
     borderBottomColor: '#E0F2FE',
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoTitulo: {
     flex: 1,
    fontSize: 20,
    fontWeight: '700',
    color: '#1e40af',


  },
  infoTexto: {
    flex:1,
    fontSize: 18,
    lineHeight: 34,
    
    textAlign: 'justify',
    color: '#333',
    marginTop: 10,
    letterSpacing: 0.3,
    fontWeight: '500',
    opacity: 0.8,
  },
   calculoText: {
    fontWeight: '700',
    color: '#3b82f6',
  },
 
});
