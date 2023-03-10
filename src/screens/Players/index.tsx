import { FlatList } from "react-native";

import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlights } from "@components/Highlights";
import { Input } from "@components/Input";

import { Container, Form, HeaderList, NumbOfPlayers } from "./styles";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players(){
    const [team, setTeam ] = useState('Time A'); 
    const [players, setPlayers] = useState([])
    return(
       <Container>
            <Header showBackButton />
            <Highlights
            title="Nome da turma"
            subtitle="Adicione a galera e separe os times"
            />
            <Form>
            <Input
            placeholder="Nome da pessoa"
            autoCorrect={false}
            />
            <ButtonIcon
            icon="add"
            />
</Form>

<HeaderList>
<FlatList
data={['Time A', 'Time B']}
keyExtractor={item => item}
renderItem={({ item }) => (
    <Filter
    title={item}
    isActive={item === team}
    onPress={() => setTeam(item)}
    />
)}
horizontal={true}
/>
<NumbOfPlayers>
    {players.length}
</NumbOfPlayers>
</HeaderList>
<FlatList 
    data={players}
    keyExtractor={item => item}
    renderItem={({item}) => (
        <PlayerCard
        onRemove={() => {}}
        name={item} />
    )}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={[{paddingBottom: 100}, players.length === 0 && {flex: 1}]}
    ListEmptyComponent={() => (
        <ListEmpty
        message="Não há jogadores nesse time."
        />
    )}
/>
     <Button
        title='Remover Turma'
        type="SECONDARY"
        />
       </Container>
    )
}