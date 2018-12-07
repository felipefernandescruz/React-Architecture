import React from "react";
import { StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Card,
  Button,
  Text,
  Label
} from "native-base";

export default class LoginPage extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <Form>
              <Item floatingLabel>
                <Label>Usuário</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Senha</Label>
                <Input />
              </Item>

              <Button block>
                <Text>ENTRAR</Text>
              </Button>
              <Button block>
                <Text>ENTRAR COM FACEBOOK</Text>
              </Button>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
