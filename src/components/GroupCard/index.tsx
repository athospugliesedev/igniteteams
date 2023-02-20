import { TouchableOpacityProps } from 'react-native'
import { Container, Title, Icon} from './styles'

type Props = TouchableOpacityProps & {
    title: string;
}

export function GroupdCard({title, ...rest}: Props){
    return(
        <Container>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    );
}