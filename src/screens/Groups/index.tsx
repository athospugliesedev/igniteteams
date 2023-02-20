import { useState } from 'react';
import { FlatList } from 'react-native';

import { GroupdCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlights } from '@components/Highlights';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { Container } from './styles';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />
      <Highlights
        title='Turmas'
        subtitle='Jogue com a sua turma'
      />
      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => <GroupdCard title={item}/>}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (<ListEmpty message='Cadastre a primeira turma!' />)}
      />

      <Button title='Criar nova turma'/>
    </Container>
  );
}
