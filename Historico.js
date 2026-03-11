
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';



export default function Historico({ registros }) {
   
  return (
    <View style={styles.listaContainer}>
      <LinearGradient
        colors={['#e3f2fd', '#bbdefb', '#90caf9']}
        style={styles.background}
      />
      
      <Text style={styles.tituloHistorico}>Histórico de Registros</Text>
      {registros.length === 0 ? (
         <View style={styles.nenhumRegistro}>
          <LinearGradient
            colors={['#3b82f6', '#06b6d4']}
            style={styles.agua}
          >
            <Ionicons name="water-outline" size={40} color="white" />
          </LinearGradient>
        <Text style={styles.semRegistros}>Nenhum registro encontrado</Text>
         </View>

      ) : (
        <FlatList
          data={registros}
          renderItem={({ item }) => (
            <View style={styles.registroItem}>
              <View style={styles.header}>
                <View style={styles.linha}>
                <LinearGradient colors={['#3b82f6', '#06b6d4']}
                style={styles.waterIconContainer}>
                  <Ionicons name="water" size={23} color="white" />
                  </LinearGradient>
                  <Text style={styles.registroText}>{item.consumo} mL</Text>
                </View>

                <View style={styles.hora}>
                  <Ionicons
                    name="time"
                    size={16}
                    color="#FFF"
                  />
                  <Text style={styles.horaText}> {item.horario}</Text>
                </View>
              </View>
              <View style={styles.data}>
                <Ionicons
                  name="calendar-outline"
                  size={18}
                  color="#777"
                  style={{ marginLeft: 10 }}
                />
                <Text style={styles.dataText}>{item.data}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listaContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
   background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  tituloHistorico: {
    marginTop:30,
    fontSize: 24,
    fontWeight: 'bold',
     fontFamily: 'Roboto-Bold',
    color: '#1e40af',
    marginBottom: 10,
  },

  registroItem: {
    marginTop: 10,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
  },
    waterIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
    nenhumRegistro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  agua: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,

    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  hora: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight:'auto',
    //  marginLeft:'auto',
    marginRight:10,
    backgroundColor: '#4A90E2',
    paddingVertical: 6,
    paddingHorizontal: 19,
    borderRadius: 50,
    
    elevation: 3,
  },
  horaText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  data: {
    alignItems: 'center',
    marginTop: 4,
    flexDirection: 'row',
  },

  registroText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginLeft: 10,
  },
  dataText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 4,
  },
 
  semRegistros: {
     fontWeight: '700',
    textAlign: 'center',
    color: '#1e40af',
    marginTop: 16,
    fontSize: 21,
  },
});