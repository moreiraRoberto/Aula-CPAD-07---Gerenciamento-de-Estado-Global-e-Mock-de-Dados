import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CarrinhoProvider } from './context/CarrinhoContext';
import ProdutosScreen from './screens/ProdutosScreen';
import CarrinhoScreen from './screens/CarrinhoScreen';

export default function App() {
  // Estado para controlar qual tela aparece
  const [telaAtiva, setTelaAtiva] = useState('Produtos');

  return (
    <CarrinhoProvider>
      <View style={styles.container}>
        
        {/* Área de Conteúdo */}
        <View style={styles.content}>
          {telaAtiva === 'Produtos' ? <ProdutosScreen /> : <CarrinhoScreen />}
        </View>

        {/* Menu de Navegação Inferior */}
        <View style={styles.navBar}>
          <TouchableOpacity 
            style={[styles.navButton, telaAtiva === 'Produtos' && styles.activeTab]} 
            onPress={() => setTelaAtiva('Produtos')}
          >
            <Text style={styles.navText}>🛒 Loja</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.navButton, telaAtiva === 'Carrinho' && styles.activeTab]} 
            onPress={() => setTelaAtiva('Carrinho')}
          >
            <Text style={styles.navText}>🛍️ Carrinho</Text>
          </TouchableOpacity>
        </View>

      </View>
    </CarrinhoProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  navBar: { 
    flexDirection: 'row', 
    height: 70, 
    backgroundColor: '#222', 
    alignItems: 'center', 
    justifyContent: 'space-around',
    paddingBottom: 10
  },
  navButton: { padding: 10, borderRadius: 5 },
  activeTab: { borderBottomWidth: 2, borderBottomColor: '#fff' },
  navText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});