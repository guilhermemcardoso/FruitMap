import React, {useState} from 'react';
import OptionCategory from '~/components/OptionCategory';
import {
  Container,
  Content,
  ButtonContainer,
  Button,
  StyledText,
  CategoryList
} from './styles';

const RegisterFruit = ({
  show,
  categories,
  onConfirmPress,
  onCancelPress,
}) => {
  const [selectedCategory, setSelectedCategory] = useState();

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  if (!show) return <></>;
  return (
    <Container>
      <Content>
        <StyledText>{'Adicionar Fruta'}</StyledText>
        <CategoryList
          data={categories}
          keyExtractor={(item) => item.code}
          renderItem={({item}) => (
            <OptionCategory
              selected={selectedCategory && selectedCategory.code === item.code}
              category={item}
              onPress={() => selectCategory(item)}
            />
          )}
        />
      </Content>
      <ButtonContainer>
        <Button onPress={onCancelPress} title={'Cancelar'} />
        <Button onPress={() => onConfirmPress(selectedCategory)} title={'Adicionar'} />
      </ButtonContainer>
    </Container>
  );
};

export default RegisterFruit;
