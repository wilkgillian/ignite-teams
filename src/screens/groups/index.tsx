import Highlight from '../../components/highlight';
import Header from '../../components/header';
import GroupCard from '../../components/groupCard';
import ListEmpty from '../../components/listEmpty';
import { Container } from './styles';
import { useState } from 'react';
import { FlatList } from 'react-native';

export default function Groups() {
  const [groups, setGroups] = useState([]);
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma!" />
      <FlatList
        style={{
          width: '100%'
        }}
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </Container>
  );
}
