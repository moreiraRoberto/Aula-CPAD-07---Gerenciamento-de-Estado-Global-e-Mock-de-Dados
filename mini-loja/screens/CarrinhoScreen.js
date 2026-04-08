import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { produtos } from '../data/produtos';
import { useCarrinho } from '../context/CarrinhoContext';
export default function CarrinhoScreen() {
const { carrinho, remover } = useCarrinho();

const total = carrinho.reduce((sum, item) => sum + item.preco, 0);

return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Carrinho</Text>
      {carrinho.length === 0 ? (
        <Text style={styles.vazio}>O carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={carrinho}
            keyExtractor={(item, index) => index.toString()} // Index evita erro se houver itens repetidos
            renderItem={({ item, index }) => (
              <View style={styles.card}>
                <View>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text>R$ {item.preco.toFixed(2)}</Text>
                </View>
                {/* Opcional: botão para remover se sua Context permitir */}
                {remover && <Button title="X" color="red" onPress={() => remover(index)} />}
              </View>
            )}
          />
          <View style={styles.footer}>
            <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  vazio: { textAlign: 'center', marginTop: 50, fontSize: 16, color: '#666' },
  card: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    backgroundColor: '#f9f9f9', 
    padding: 15, 
    marginVertical: 5, 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee'
  },
  nome: { fontSize: 16, fontWeight: '600' },
  footer: { marginTop: 20, paddingVertical: 20, borderTopWidth: 1, borderColor: '#eee' },
  totalText: { fontSize: 20, fontWeight: 'bold', textAlign: 'right' }
});
